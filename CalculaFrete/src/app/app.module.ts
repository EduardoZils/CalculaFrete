import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './cadastros/erros/page-not-found/page-not-found.component';
import { FreteComponent } from './cadastros/frete/frete.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';


import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FreteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
