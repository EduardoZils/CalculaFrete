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
  public cidadeSelId: number;
  public cidadeSel: Cidade = new Cidade;
  public cidadeModel: Cidade = new Cidade();
  public estadoModel: Estado = new Estado();
  
  public estados:  any;
  public cidades:  any;
  public ceps:  any;
  public dataSource: any;
  constructor() { }

  ngOnInit() {
    this.cidades = new Array<Cidade>();
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
      this.dataSource = new Array<Estado>();
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
    
    atualizarCidadeListBox(){
      console.log("Chamou atualizarEstadoListBox codigo -------> " + this.cidadeSelId);
      let id = this.cidadeSelId;
      let cidadeSelLocal;
      this.estados.forEach(item => {
        if(item.cidadeId == id){
          cidadeSelLocal = item;
          alert("Propriedade da pessoa selecionada "+ item.cidades)
        }
      });
      this.cidadeSel = cidadeSelLocal;
    }
    setExpandido(){

    }

    salvarCidade(){
      this.cidades.push(this.cidadeModel);
    }

    salvarCEP(){
      let cep = new Cep();
      let id = this.cidadeSelId
      let cepsCidade = this.cidadeSel.cepList;
      console.log("Cep Salvo -->" + cep);
      this.cidades.forEach(item => {
        if(item.cidadeID == id){
          item.cepList.push(cepsCidade);
        }
      });
    }
}
