import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from './estudante';
import { EstudanteService } from '../estudante.service';
@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes: Estudante[];
  @Input() estudanteNovo = Estudante;
  constructor(private estudanteService: EstudanteService) {
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }

  adicionar(nome: string, isJedi: boolean, templo: string): void {
    nome = nome.trim();

    if (!nome) {
      this.notifica('Nome é obrigatório');
      return;
    }

    if (!isJedi) {
      this.notifica('Informe se o estudante é Jedi');
      return;
    }
    this.estudanteService.adicionaEstudante({ nome, isJedi, templo } as Estudante)
      .subscribe(estudante => {
        this.estudantes.push(estudante);
      });
  }

  remover(estudante: Estudante): void {
    this.estudantes = this.estudantes.filter(h => h !== estudante);
    this.estudanteService.removerEstudante(estudante).subscribe();
  }



  ngOnInit() {
    this.getEstudantes();
  }

  notifica(mensagem: string): void {
    alert(mensagem);
  }

}
