import { Component, OnInit } from '@angular/core';
import { Estado} from '../models/estado'
import { Cidade } from '../models/cidade';
import { Cep } from '../models/cep';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css']
})
export class FreteComponent implements OnInit {

  displayedCollumns: string[] = ['freteId'];

  public estadoSelId: number;
  public estadoSel: Estado = new Estado;
  
  public estados:  any;
  public dataSourceEstado: any;
  constructor() { }

  ngOnInit() {
    this.dataSourceEstado = new Array<Estado>();
    this.estados = new Array<Estado>();


    this.criaDados();
  }

  criaDados(){
    let estado;
    let cidade;
    let cidades = new Array<Cidade>();

    let cep;
    let ceps = new Array<Cep>();

    cep = new Cep();
    cep.descricao = "123456-78";
    ceps.push(cep);
    
    cep = new Cep();
    cep.descricao = "876543-21";
    ceps.push(cep);

    cidade = new Cidade();
    cidade.codigo = 1;
    cidade.descricao = "Cidade 1";
    cidade.cepList = ceps;
    cidades.push(cidade);
    
    cidade = new Cidade();
    cidade.codigo = 2;
    cidade.descricao = "Cidade 2";
    cidade.cepList = ceps;
    cidades.push(cidade);
    
      estado = new Estado();
      estado.codigo = 1;
      estado.descricao = "Estado1";  
      estado.uf = "E1";
      estado.cidadeList = cidades;
      this.estados.push(estado);

      estado = new Estado();
      estado.codigo = 2;
      estado.descricao = "Estado2";  
      estado.uf = "E2";
      estado.cidadeList = cidades;
      this.estados.push(estado);
    }
  

  atualizarEstadoListBox(){
    console.log("Chamou atualizarEstadoListBox codigo -------> " + this.estadoSelId);
    let id = this.estadoSelId;
    let estadoSelLocal;
    this.estados.forEach(item => {
      if(item.estadoId == id){
        estadoSelLocal = item;
        alert("Propriedade da pessoa selecionada "+ item.cidades)
      }
    });
    this.estadoSel = estadoSelLocal;
  }

}
