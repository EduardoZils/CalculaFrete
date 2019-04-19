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
  private cidade: Cidade;
  public isExpandido: number;
  public estadoSelId: number;
  public estadoSel: Estado = new Estado;
  public cidadeSelId: number;
  public cidadeSel: Cidade = new Cidade;
  public cidadeModel: Cidade = new Cidade();
  public estadoModel: Estado = new Estado();

  public estados: Array<Estado>;
  public cidades: Array<Cidade>;
  public ceps: Array<Cep>;
  public dataSourceEstado: any;
  public dataSourceCidade: any;


  displayColumnsEstado: string[] = ['actionsColumn', 'estadoId', 'uf', 'descricao'];
  displayColumnsCidade: string[] = ['actionsColumn', 'cidadeId', 'descricao'];


  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.cidades = new Array<Cidade>();
    this.cidade = new Cidade;
    this.estado = new Estado;
    this.estados = new Array<Estado>();
    this.isExpandido = 0;

    this.criaDados();
    this.dataSourceEstado = new MatTableDataSource<Estado>(this.estados);
    this.dataSourceEstado.paginator = this.paginatorCustom;
    console.log("DATA SOURCE" + this.dataSourceEstado)
    console.log(this.estados);

    this.dataSourceCidade = new MatTableDataSource<Cidade>(this.cidades);
    this.dataSourceCidade.paginator = this.paginatorCustom;
    console.log("DATA SOURCE" + this.dataSourceCidade)
    console.log(this.cidades);
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
    cidade.cidadeId = 1;
    cidade.descricao = "Cascavel";
    cidade.cepList = ceps;
    cidades.push(cidade);

    cidade = new Cidade();
    cidade.cidadeId = 2;
    cidade.descricao = "Toledo";
    cidade.cepList = ceps;
    cidades.push(cidade);

    estado = new Estado();
    estado.estadoId = 1;
    estado.descricao = "Paraná";
    estado.uf = "PR";
    estado.cidadeList = cidades;
    this.estados.push(estado);

    estado = new Estado();
    estado.estadoId = 2;
    estado.descricao = "Rio Grande do Sul";
    estado.uf = "RS";
    estado.cidadeList = cidades;
    this.estados.push(estado);
  }


  //referente a ESTADO
  salvarEstado() {
    let estado = new Estado();
    console.log("Estado Salvo")
    console.log(this.estadoModel);
    this.estados.push(this.estadoModel);
    console.log("Lista de Estados");
    console.log(this.estados);
    this.estadoModel = new Estado();
    this.dataSourceEstado = new MatTableDataSource<Estado>(this.estados);
    this.dataSourceEstado.paginator = this.paginatorCustom;
    this.dataSourceEstado.sort = this.sort;

  }

  editarEstado(estadoId: number) {
    console.log("CHAMOU EDITAR" + estadoId);
    let estadoUpdate;
    this.estados.forEach(item => {
      if (item.estadoId == estadoId) {
        estadoUpdate = item;
        this.estados.splice(estadoUpdate, 1);
      }
    });
    this.estadoModel = estadoUpdate;
  }

  excluirEstado(codigo: number) {
    console.log("chamou metodo excluir " + codigo);
    this.estados.splice(this.estados.findIndex(d => d.estadoId === codigo), 1);
    this.atualizaTableEstado();
  }

  atualizaTableEstado() {
    this.dataSourceEstado = new MatTableDataSource<Estado>(this.estados);
    this.dataSourceEstado.paginator = this.paginatorCustom;
    this.dataSourceEstado.sort = this.sort;
  }

  aplicarFiltroEstado(valor: String) {
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();
    console.log("realiza o filtro com " + valor);
    this.dataSourceEstado.filterPredicate = (data: Estado, filter: string) =>
      data.estadoId.toString().indexOf(filter) != -1 ||
      data.uf.toLowerCase().indexOf(filter) != -1 ||
      data.descricao.toString().indexOf(filter) != -1;
    this.dataSourceEstado.filter = valor;
  }



  //referente a Cidade

  atualizarEstadoListBox() {
    this.dataSourceEstado = new Array<Estado>();
    console.log("Chamou atualizarEstadoListBox codigo -------> " + this.estadoSelId);
    let id = this.estadoSelId;
    let estadoSelLocal;
    this.estados.forEach(item => {
      if (item.estadoId == id) {
        estadoSelLocal = item;
        alert("Propriedade da pessoa selecionada " + item.cidadeList);
      }
    });
    this.estadoSel = estadoSelLocal;
  }

  
  salvarCidade() {
   /* this.cidades.push(this.cidadeModel);
    console.log("Cidade salva");
    console.log(this.cidades);*/

    let cidade = new Cidade();
    console.log("Cidade Salva")
    console.log(this.cidadeModel);
    this.cidades.push(this.cidadeModel);
    console.log("Lista de cidade");
    console.log(this.cidades);
    this.cidadeModel = new Cidade();
    this.dataSourceCidade = new MatTableDataSource<Cidade>(this.cidades);
    this.dataSourceCidade.paginator = this.paginatorCustom;
    this.dataSourceCidade.sort = this.sort;




  }

  editarCidade(cidadeId: number) {
    console.log("CHAMOU EDITAR" + cidadeId);
    let cidadeUpdate;
    this.cidades.forEach(item => {
      if (item.cidadeId == cidadeId) {
        cidadeUpdate = item;
        this.estados.splice(cidadeUpdate, 1);
      }
    });
    this.cidadeModel = cidadeUpdate;
  }

  excluirCidade(cidadeId: number) {
    console.log("chamou metodo excluir " + cidadeId);
    this.cidades.splice(this.cidades.findIndex(d => d.cidadeId === cidadeId), 1);
    this.atualizaTableCidade();
  }

  atualizaTableCidade() {
    this.dataSourceCidade = new MatTableDataSource<Cidade>(this.cidades);
    this.dataSourceCidade.paginator = this.paginatorCustom;
    this.dataSourceCidade.sort = this.sort;
  }

  aplicarFiltroCidade(valor: String) {
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();
    console.log("realiza o filtro com " + valor);
    this.dataSourceCidade.filterPredicate = (data: Cidade, filter: string) =>
      data.cidadeId.toString().indexOf(filter) != -1 ||
      data.descricao.toLowerCase().indexOf(filter) != -1 ||
      data.cepList.toString().indexOf(filter) != -1;
    this.dataSourceCidade.filter = valor;
  }









  atualizarCidadeListBox() {
    console.log("Chamou atualizarEstadoListBox codigo -------> " + this.cidadeSelId);
    let id = this.cidadeSelId;
    let cidadeSelLocal;
    this.estados.forEach(item => {
      if (item.estadoId == id) {
        cidadeSelLocal = item;
        alert("Propriedade da pessoa selecionada " + item.cidadeList)
      }
    });
    this.cidadeSel = cidadeSelLocal;
  }




  sortData() {
    this.dataSourceEstado.sort = this.sort;
  }


  salvarCEP() {
    let cep = new Cep();
    let id = this.cidadeSelId
    let cepsCidade = this.cidadeSel.cepList;
    console.log("Cep Salvo -->" + cep);
    this.cidades.forEach(item => {
      if (item.cidadeId == id) {
        //item.cepList.push(this.cepsCidade);
      }
    });
  }

  voltar() {

  }




}
