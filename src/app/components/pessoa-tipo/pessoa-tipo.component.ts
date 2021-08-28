import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-tipo',
  templateUrl: './pessoa-tipo.component.html',
  styleUrls: ['./pessoa-tipo.component.scss'],
})
export class PessoaTipoComponent implements OnInit {
  pessoa_tipo: any;
  constructor() { }

  ngOnInit() {}

  open(pessoa_tipo){
    this.pessoa_tipo = pessoa_tipo;
  }

  _pessoa_tipo(pessoa_tipo){
    console.log(pessoa_tipo);
    this.pessoa_tipo = null;
  }

}
