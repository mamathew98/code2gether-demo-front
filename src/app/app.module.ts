import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './components';
import { HomeComponent } from './pages/home';
import { NavbarComponent } from './components/navbar/navbar.component';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DocumentComponent } from './components/document/document.component';
import { DocumentListComponent } from './components/document-list/document-list.component';

const config: SocketIoConfig = { url: 'http://0.0.0.0:4000', options: {} };

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    MonacoEditorModule.forRoot(),
    MatTabsModule,
    MatGridListModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    CardModule,
    TableModule,
    MenubarModule,
    TabViewModule,
    RippleModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    NavbarComponent,
    DocumentComponent,
    DocumentListComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
