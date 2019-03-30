import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './cadastros/erros/page-not-found/page-not-found.component';
import { FreteComponent } from './cadastros/frete/frete.component';

import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, 
  MatPaginatorModule,
  MatSortModule} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FreteComponent
  ],
  imports: [
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
