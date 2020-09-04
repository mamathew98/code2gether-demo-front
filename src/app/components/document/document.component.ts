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
        this.compile();
      });
    this._cursorsSub = this.documentService.currentCursors
      .subscribe(cursors => {
        console.log(cursors);

        this.cursors = cursors;
      });
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
    this._cursorsSub.unsubscribe();
    this._userLeft.unsubscribe();
  }

  htmlEditorEvent(editor) {
    this.deleteCursorOnDisconnect(editor);

    editor.onDidChangeCursorPosition((e) => {
      this.htmlPos = e.position;
      // this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
    });
    editor.onDidChangeModelContent((e) => {
      // console.log(editor)
      this.renderCursors(editor);

    });
  }
  cssEditorEvent(editor) {
    this.deleteCursorOnDisconnect(editor);

    editor.onDidChangeCursorPosition((e) => {
      this.cssPos = e.position;
      // this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
    });
    editor.onDidChangeModelContent((e) => {
      // console.log(editor)
      this.renderCursors(editor);
    });
  }
  jsEditorEvent(editor) {
    this.deleteCursorOnDisconnect(editor);

    editor.onDidChangeCursorPosition((e) => {
      this.jsPos = e.position;
      // this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
    });
    editor.onDidChangeModelContent((e) => {
      // console.log(editor)
      this.renderCursors(editor);
    });
  }
  editDoc(event) {
    // console.log('htmlPos: ', this.htmlPos);
    // console.log('cssPos: ', this.cssPos);
    // console.log('jsPos: ', this.jsPos);
    this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
    this.documentService.editDocument(this.doc);
    this.compiler = document.getElementsByTagName('iframe')[0].contentWindow.document;
    this.compile();
  }


  deleteCursorOnDisconnect(editor){
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
            position : this.position,
            preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE, monaco.editor.ContentWidgetPositionPreference.EXACT]
          };
        }
      };
      editor.removeContentWidget(contentWidget);
    });
  }

  renderCursors(editor){
    this.cursors.forEach(cursor => {
      if(cursor.id !== this.user.username) {
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
              margin-left: 5px;
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
