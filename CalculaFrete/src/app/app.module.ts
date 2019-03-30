import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './cadastros/cep/cep.component';
import { EstadoComponent } from './cadastros/estado/estado.component';
import { CidadeComponent } from './cadastros/cidade/cidade.component';
import { PageNotFoundComponent } from './cadastros/erros/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    EstadoComponent,
    CidadeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
