import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudantes/estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  estudantes: Estudante[] = [];

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit() {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes.slice(1, 6));

  }

}
