import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Output() ev : EventEmitter<any> = new EventEmitter();
  @Output() ev2 : EventEmitter<any> = new EventEmitter();
  @Input() compteur : number = 0;

  constructor() { }

  ngOnInit() {
  }

  incrementer(): void {
    this.ev.emit();
  }

  decrementer() : void {
    this.ev2.emit();
  }

}
