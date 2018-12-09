import { Injectable } from '@angular/core';
import { Estudante } from './estudantes/estudante';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const estudantes: Estudante[] = [
      { id: 11, nome: 'Luke Skywalker', isJedi: true, templo: 'templo 1' },
      { id: 12, nome: 'Rey', isJedi: true, templo: 'templo 2' },
      { id: 13, nome: 'Kylo Ren', isJedi: true, templo: 'templo 3' },
      { id: 14, nome: 'Leia Organa', isJedi: true, templo: 'templo 4' },
      { id: 15, nome: 'Yoda', isJedi: true, templo: 'templo 5' },
      { id: 16, nome: 'Capitã Phasma', isJedi: true, templo: 'templo 5' },
      { id: 17, nome: 'Finn', isJedi: true, templo: 'templo 6' },
      { id: 18, nome: 'Poe Dameron', isJedi: true, templo: 'templo 7' }
    ];
    return { estudantes };
  }
  // Sobrescreve o método genId para garantir que um estudante sempre tenha um id.
  // Se o array de estudantes estiver vazio,
  // o método abaixo retorna o número inicial 11.
  // Se o array de estudantes não estiver vazio, o método retorna o maior
  // id de estudante + 1.
  genId(estudantes: Estudante[]): number {
    return estudantes.length > 0 ? Math.max(...estudantes.map(estudante => estudante.id)) + 1 : 11;
  }
}

