import { Component, OnInit } from '@angular/core';
import { Estudante } from './estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  
  estudantes: Estudante[];

  constructor(private estudanteService: EstudanteService) {
  }

  estudanteSelecionado : Estudante;

  getEstudantes() : void {
    this.estudanteService.getEstudantes()
    .subscribe(estudantes => this.estudantes = estudantes);
  }

  onSelect(estudante: Estudante): void{
    this.estudanteSelecionado = estudante;
  }


  ngOnInit() {
    this.getEstudantes();
  }

}
