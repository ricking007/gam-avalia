import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss'],
})
export class AvaliacaoComponent implements OnInit {
  @Input() pessoa: any;
  @Output() avaliacao = new EventEmitter<any>();
  color5: string = "danger";
  color4: string;
  color3: string;
  color2: string;
  color1: string;

  comentario: string;
  constructor() { }

  ngOnInit() {}

  salvar(){
    this.avaliacao.emit(true);
  }

}
