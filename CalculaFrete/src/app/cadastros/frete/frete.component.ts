import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from '../models/estado'
import { Cidade } from '../models/cidade';
import { Cep } from '../models/cep';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css']
})
export class FreteComponent implements OnInit {

  public estado: Estado;
  public isExpandido: number;
  public estadoSelId: number;
  public estadoSel: Estado = new Estado;
  public cidadeSelId: number;
  public cidadeSel: Cidade = new Cidade;
  public cidadeModel: Cidade = new Cidade();
  public estadoModel: Estado = new Estado();

  public estados: any;
  public cidades: any;
  public ceps: any;
  public dataSource: any;


  displayColumnsEstado: string[] = ['actionsColumn', 'codigo', 'uf', 'descricao'];
  displayColumnsCidade: string[] = ['actionsColumn','codigo', 'descricao'];


  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.cidades = new Array<Cidade>();
    this.estados = new Array<Estado>();
    this.estado = new Estado;
    this.estados = new Array<Estado>();
    this.isExpandido = 0;

    this.criaDados();
    this.dataSource = new MatTableDataSource<Estado>(this.estados);
    this.dataSource.paginator = this.paginatorCustom;
    console.log("DATA SOURCE" + this.dataSource)
    console.log(this.estados);
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  criaDados() {
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
    cidade.descricao = "Cascavel";
    cidade.cepList = ceps;
    cidades.push(cidade);

    cidade = new Cidade();
    cidade.codigo = 2;
    cidade.descricao = "Toledo";
    cidade.cepList = ceps;
    cidades.push(cidade);

    estado = new Estado();
    estado.codigo = 1;
    estado.descricao = "Paraná";
    estado.uf = "PR";
    estado.cidadeList = cidades;
    this.estados.push(estado);

    estado = new Estado();
    estado.codigo = 2;
    estado.descricao = "Rio Grande do Sul";
    estado.uf = "RS";
    estado.cidadeList = cidades;
    this.estados.push(estado);
  }


  atualizarEstadoListBox() {
    this.dataSource = new Array<Estado>();
    console.log("Chamou atualizarEstadoListBox codigo -------> " + this.estadoSelId);
    let id = this.estadoSelId;
    let estadoSelLocal;
    this.estados.forEach(item => {
      if (item.estadoId == id) {
        estadoSelLocal = item;
        alert("Propriedade da pessoa selecionada " + item.cidades)
      }
    });
    this.estadoSel = estadoSelLocal;
  }

  atualizarCidadeListBox() {
    console.log("Chamou atualizarEstadoListBox codigo -------> " + this.cidadeSelId);
    let id = this.cidadeSelId;
    let cidadeSelLocal;
    this.estados.forEach(item => {
      if (item.cidadeId == id) {
        cidadeSelLocal = item;
        alert("Propriedade da pessoa selecionada " + item.cidades)
      }
    });
    this.cidadeSel = cidadeSelLocal;
  }


  salvarEstado() {
    console.log("Estado Salvo");
    console.log(this.estado)
    this.estados.push(this.estado);
    console.log("Lista de Estados");
    console.log(this.estados);
    this.estado = new Estado();
    this.dataSource = new MatTableDataSource<Estado>(this.estados);
    this.dataSource.paginator = this.paginatorCustom;
    console.log("DATA SOURCE" + this.dataSource)
    console.log(this.estados);
  }


  sortData() {
    this.dataSource.sort = this.sort;
  }

  salvarCidade() {
    this.cidades.push(this.cidadeModel);
    console.log("Cidade salva");
    console.log(this.cidades);
  }

  salvarCEP() {
    let cep = new Cep();
    let id = this.cidadeSelId
    let cepsCidade = this.cidadeSel.cepList;
    console.log("Cep Salvo -->" + cep);
    this.cidades.forEach(item => {
      if (item.cidadeID == id) {
        item.cepList.push(cepsCidade);
      }
    });
  }

  voltar(){

  }

  editar(){

  }

  excluir(){

  }

  aplicarFiltroEstado(valor: String){
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();

    console.log("realiza o filtro com " + valor);
    this.dataSource.filterPredicate = (data: Estado, filter: string) =>
      data.codigo.toString().indexOf(filter) != -1 ||
      data.uf.toLowerCase().indexOf(filter) != -1 ||
      data.descricao.toString().indexOf(filter) != -1;
    this.dataSource.filter = valor;
  }
}
