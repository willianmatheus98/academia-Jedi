import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudante } from './estudantes/estudante';
import { ESTUDANTES } from './mock-estudantes';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  getEstudantes(): Observable<Estudante[]> {
    return of(ESTUDANTES);
  }

  getEstudante(id: number): Observable<Estudante> {
    return of(ESTUDANTES.find(Estudante => Estudante.id === id));
  }

  constructor() { }
}
