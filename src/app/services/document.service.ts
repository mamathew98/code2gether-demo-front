import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Document } from '../models/document';
import { Cursor } from '../models/cursors';

import { User } from '@app/models';
import { AccountService } from './account.service';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  user: User;

  currentDocument = this.socket.fromEvent<Document>('document');
  currentCursors = this.socket.fromEvent<Cursor[]>('cursors');
  userLeft = this.socket.fromEvent<String>('disconnect');
  documents = this.socket.fromEvent<Document[]>('documents');
  userDocuments: BehaviorSubject<Document[]>;

  constructor(
    private socket: Socket,
    private accountService: AccountService,
    private http: HttpClient,
  ) {
    this.user = this.accountService.userValue;
    this.userDocuments = new BehaviorSubject<Document[]>([]);
  }

  getUserDocuments() {
    console.log(this.user);
    return this.http.get<Document[]>(`${environment.apiUrl}/projects/user/${this.user.username}`)
      .pipe(map(docs => {
        const userDocs: Document[] = [];
        docs.forEach(doc => {
          userDocs.push({
            id: doc.id,
            name: doc.name,
            html: doc.html,
            css: doc.css,
            js: doc.js,
            owner: doc.owner,
          });
        });
        this.userDocuments.next(userDocs);
        return userDocs;
      }));
  }

  getDocument(id: string) {
    this.socket.emit('getDoc', {docId: id, username: this.user.username});
    // this.currentDocument.subscribe(document => console.log(document));
  }

  addDocument(pid: string) {
    console.log('Button Works')
    return this.http.post(`${environment.apiUrl}/users/addproject`, { username: this.user.username, pid })
      .subscribe(res => {
        console.log('Added');
      });
  }

  newDocument(name: string) {
    const docId = this.docId();
    console.log('USER', this.user);
    if (name === '') {
      name = docId;
    }
    console.log(name);
    console.log(docId);
    this.socket.emit('addDoc', { id: docId, name, html: '', css: '', js: '', owner: this.user.username });
  }

  editDocument(document: Document) {
    this.socket.emit('editDoc', document);
  }

  updateCursors(docID, htmlPos, cssPos, jsPos){
    this.socket.emit('updateCursor', {
      docID,
      username: this.user.username,
      htmlPos,
      cssPos,
      jsPos
    })
  }

  deleteDocument(id: string){
    // console.log('remove button')
    // return this.http.post(`${environment.apiUrl}/projects/deletedoc`, {username: this.user.username, pid: id})
    // .subscribe(res => {
    //   console.log('Removed');
    // });
    this.socket.emit('deleteDoc', this.user.username, id);
  }

  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
