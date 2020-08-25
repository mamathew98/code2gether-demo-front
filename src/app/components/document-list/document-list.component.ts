import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { DocumentService } from 'src/app/services/document.service';
import { Document } from '@app/models/document';
import { first } from 'rxjs/operators';

import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  allProjectsSideBar = false;
  userProjectsSidebar = false;


  newpName: string;
  documents: Observable<Document[]>;
  userDocuments: any;

  currentDoc: string;
  private _docSub: Subscription;
  private _userDocSub: Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    // this.cols = [
    //   { field: 'name', header: 'Name'},
    //   { field: 'id', header: 'ID' },
    //   { field: 'owner', header: 'Owner' },
    // ];
    this.documents = this.documentService.documents;
    this._docSub = this.documentService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
    this._userDocSub = this.documentService.getUserDocuments()
      .pipe(first())
      .subscribe(docs => {
        this.userDocuments = docs;
        console.log(this.userDocuments);
      });

  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string) {
    this.documentService.getDocument(id);
  }

  addDocument(pid: string) {
    this.documentService.addDocument(pid);
    this.ngOnInit();
    location.reload();
  }

  removeDocument(pid: string) {
    this.documentService.deleteDocument(pid);
    this.ngOnInit();
    location.reload();
  }

  newDoc() {
    this.documentService.newDocument(this.newpName);
    this.ngOnInit();
  }

}
