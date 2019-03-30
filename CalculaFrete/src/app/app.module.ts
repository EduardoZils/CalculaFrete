import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './cadastros/erros/page-not-found/page-not-found.component';
import { FreteComponent } from './cadastros/frete/frete.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
