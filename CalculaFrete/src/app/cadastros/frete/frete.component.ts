import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frete',
  templateUrl: './frete.component.html',
  styleUrls: ['./frete.component.css']
})
export class FreteComponent implements OnInit {

  displayedCollumns: string[] = ['freteId'];

  constructor() { }

  ngOnInit() {
  }

}
