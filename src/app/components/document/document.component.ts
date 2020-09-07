import { Component, OnInit, OnDestroy, ViewChild, ElementRef, inject, Inject } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/models/document';
import { startWith } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

import * as $ from 'jquery'

import { interval } from 'rxjs';
import { Cursor } from '@app/models/cursors';
import { User } from '@app/models';
import { AccountService } from '@app/services';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  timer: Subscription;

  htmleEditor;
  cssEditor;
  jsEditor;

  activeIndex: number = 0;
  contentWidgets = {}; // save monaco editor name contentWidgets - monaco editor의 이름 뜨는 위젯을 저장

  htmlPos = {
    lineNumber: 1,
    column: 1
  };
  cssPos = {
    lineNumber: 1,
    column: 1
  };
  jsPos = {
    lineNumber: 1,
    column: 1
  };


  editorHtmlOptions = {
    theme: 'vs-dark',
    language: 'html',
    cursorStyle: 'line',
    lineHeight: 25
  };
  editorCssOptions = {
    theme: 'vs-dark',
    language: 'css',
    cursorStyle: 'line'
  };
  editorJsOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    cursorStyle: 'line'
  };

  compiler: any;
  user: User;
  cursors: Cursor[];
  doc: Document;
  private _docSub: Subscription;
  private _cursorsSub: Subscription;
  private _userLeft: Subscription;

  constructor(
    private documentService: DocumentService,
    private accountService: AccountService,

  ) {
    this.user = this.accountService.userValue;

  }

  compile() {
    const html = this.doc.html;
    const css = this.doc.css;
    const js = this.doc.js;

    this.compiler.open();
    this.compiler.writeln(
      html +
      '<style>' +
      css +
      '</style>' +
      '<script>' +
      js +
      '</script>'
    );
    this.compiler.close();
  }

  ngOnInit() {
    this._docSub = this.documentService.currentDocument
      .subscribe(doc => {
        this.compiler = document.getElementsByTagName('iframe')[0].contentWindow.document;
        this.doc = doc;

        if (this.htmleEditor) {
          this.htmleEditor.setValue(this.doc.html);
          const myCursor = this.cursors.find(curosr => curosr.id === this.user.username);
          this.htmleEditor.focus();
          this.htmleEditor.setPosition(myCursor.html);
        }
        if (this.cssEditor) {
          this.cssEditor.setValue(this.doc.css);
          const myCursor = this.cursors.find(curosr => curosr.id === this.user.username);
          this.htmleEditor.focus();
          this.htmleEditor.setPosition(myCursor.css);
        }
        if (this.jsEditor) {
          this.jsEditor.setValue(this.doc.js);
          const myCursor = this.cursors.find(curosr => curosr.id === this.user.username);
          this.htmleEditor.focus();
          this.htmleEditor.setPosition(myCursor.js);
        }
        this.compile();
      });
    this._cursorsSub = this.documentService.currentCursors
      .subscribe(cursors => {
        // console.log(cursors);

        this.cursors = cursors;
      });
  }

  ngOnDestroy() {
    this.documentService.leaveDocument(this.doc.id);
    this._docSub.unsubscribe();
    this._cursorsSub.unsubscribe();
    this._userLeft.unsubscribe();
  }

  htmlEditorEvent(editor) {
    this.htmleEditor = editor;
    editor.setValue(this.doc.html);

    this.deleteCursorOnDisconnect(editor);

    editor.onDidChangeCursorPosition((e) => {
      this.htmlPos = e.position;
    });
    editor.onDidChangeModelContent((e) => {
      console.log('line count: ', editor.viewModel.getLineCount());
      this.renderCursors(editor);

      this.doc.html = editor.getValue();

    });
  }
  cssEditorEvent(editor) {
    this.cssEditor = editor;
    editor.setValue(this.doc.css);

    this.deleteCursorOnDisconnect(editor);

    editor.onDidChangeCursorPosition((e) => {
      this.cssPos = e.position;
    });
    editor.onDidChangeModelContent((e) => {
      this.renderCursors(editor);

      this.doc.css = editor.getValue();

    });
  }
  jsEditorEvent(editor) {
    this.jsEditor = editor;
    editor.setValue(this.doc.js);

    this.deleteCursorOnDisconnect(editor);

    editor.onDidChangeCursorPosition((e) => {
      this.jsPos = e.position;
    });
    editor.onDidChangeModelContent((e) => {
      this.renderCursors(editor);

      this.doc.js = editor.getValue();

    });
  }
  editDoc(event) {
    this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
    this.documentService.editDocument(this.doc);
    this.compiler = document.getElementsByTagName('iframe')[0].contentWindow.document;
    this.compile();
  }

  async leaveDoc() {
    await this.ngOnDestroy();
    window.location.reload();
  }


  deleteCursorOnDisconnect(editor) {
    this._userLeft = this.documentService.userLeft.subscribe(user => {
      const contentWidget = {
        allowEditorOverflow: true,
        domNode: null,
        position: null,
        getId: function () {
          return user;
        },
        getDomNode: function () {
          return this.domNode;
        },
        getPosition: function () {
          return {
            position: this.position,
            preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE, monaco.editor.ContentWidgetPositionPreference.EXACT]
          };
        }
      };
      editor.removeContentWidget(contentWidget);
    });
  }

  renderCursors(editor) {
    this.cursors.forEach(cursor => {
      if (cursor.id !== this.user.username) {
        const contentWidget = {
          allowEditorOverflow: true,
          domNode: null,
          getId: function () {
            return cursor.id;
          },
          getDomNode: function () {
            if (!this.domNode) {
              this.domNode = document.createElement('div');
              this.domNode.innerHTML =
                `
              <div style="
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-bottom: 5px solid ${cursor.color};
              "></div>
              <div
              class="fadeOut"
              style="background-color: ${cursor.color};
                    color: white;
                    padding: 0px 5px;
                    opacity: 0.7"
              >${cursor.id}</div>`;
            }
            return this.domNode;
          },
          getPosition: function () {
            return {
              position: {
                lineNumber: cursor.html.lineNumber,
                column: cursor.html.column
              },
              preference: [monaco.editor.ContentWidgetPositionPreference.BELOW, monaco.editor.ContentWidgetPositionPreference.EXACT]
            };
          }
        };
        editor.removeContentWidget(contentWidget);

        editor.addContentWidget(contentWidget);
      }
    })
  }
}
