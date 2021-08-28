import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
})
export class PessoaComponent implements OnInit {

  @Input() pessoa_tipo?: any;
  @Output() _pessoa_tipo?= new EventEmitter<any>();
  pessoa: any;

  constructor() { }

  ngOnInit() { }

  avaliar(pessoa) {
    this.pessoa = pessoa;
  }

  voltar() {
    this._pessoa_tipo.emit(this.pessoa_tipo);
  }
}
