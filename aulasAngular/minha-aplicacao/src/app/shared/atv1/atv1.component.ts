import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atv1',
  templateUrl: './atv1.component.html',
  styleUrls: ['./atv1.component.scss']
})
export class Atv1Component implements OnInit {

  @Input() numero = 0;

  @Output() numeroChange = new EventEmitter();

  increase(): void {
    console.log('Incrementando:' + this.numero);
    // enviando resposta para o componente pai
    this.numeroChange.emit(this.numero++);
  }

  decrease(): void {
    console.log('Decrementando:' + this.numero);
    // enviando resposta para o component pai
    this.numeroChange.emit(this.numero--);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
