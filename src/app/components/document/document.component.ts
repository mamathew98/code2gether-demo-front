import { Component, OnInit, OnDestroy, ViewChild, ElementRef, inject, Inject } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Subscription } from 'rxjs';
import { Document } from 'src/app/models/document';
import { startWith } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  activeIndex: number = 0;


  editorHtmlOptions = {
    theme: 'vs-dark',
    language: 'html',
  };
  editorCssOptions = {
    theme: 'vs-dark',
    language: 'css',
  };
  editorJsOptions = {
    theme: 'vs-dark',
    language: 'javascript',
  };

  compiler: any;

  doc: Document;
  private _docSub: Subscription;
  constructor(
    private documentService: DocumentService,
  ) {
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

  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.doc);
    this.compiler = document.getElementsByTagName('iframe')[0].contentWindow.document;
    this.compile();
  }
}
