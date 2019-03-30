import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './cadastros/erros/page-not-found/page-not-found.component';
import { FreteComponent} from './cadastros/frete/frete.component';

const routes: Routes = [
  {path: 'PageNotFound', component: PageNotFoundComponent},
  {path: 'CalculaFrete', component: FreteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
