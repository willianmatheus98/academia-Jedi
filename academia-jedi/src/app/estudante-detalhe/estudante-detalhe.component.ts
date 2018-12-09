import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudantes/estudante';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudante-detalhe',
  templateUrl: './estudante-detalhe.component.html',
  styleUrls: ['./estudante-detalhe.component.css']
})
export class EstudanteDetalheComponent implements OnInit {

  @Input() estudante: Estudante;
  constructor(
    private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEstudante();
  }

  getEstudante(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.estudanteService.getEstudante(id)
      .subscribe(estudante => this.estudante = estudante);
  }

  voltar(): void {
    this.location.back();
  }

  salvar(): void {
    this.estudanteService.atualizaEstudante(this.estudante)
      .subscribe(() => this.voltar());
  }
}
