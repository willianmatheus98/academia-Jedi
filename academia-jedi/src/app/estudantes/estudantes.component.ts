import { Component, OnInit } from '@angular/core';
import { Estudante } from './estudante';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudante = new Estudante(1,'Luke Skywalker',true,'');

  constructor() { }

  ngOnInit() {
  }

}
