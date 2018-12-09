import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudante } from './estudantes/estudante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  private estudantesUrl = 'api/estudantes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  estudantes: Estudante[];

  /** Obtém (GET) estudantes do servidor */
  getEstudantes(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(this.estudantesUrl)
      .pipe(
        tap(_ => this.log('estudantes obtidos')),
        catchError(this.trataErro('getEstudantes', []))
      )
  }

  /** Obtem (GET) um estudante pelo seu id. Gera erro 404 se não for encontrado */
  getEstudante(id: number): Observable<Estudante> {
    const url = `${this.estudantesUrl}/${id}`;
    return this.http.get<Estudante>(url).pipe(
      tap(_ => this.log(`obtido o estudante id=${id}`)),
      catchError(this.trataErro<Estudante>(`getEstudante id=${id}`))
    );
  }

  /** PUT: atualiza o estudante no servidor */
  atualizaEstudante(estudante: Estudante): Observable<any> {
    return this.http.put(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap(_ => this.log(`atualizado o id do estudante=${estudante.id}`)),
      catchError(this.trataErro<any>('atualizaestudante'))
    );
  }

  /** DELETE: remove o estudante do servidor */
  removerEstudante(estudante: Estudante | number): Observable<Estudante> {
    const id = typeof estudante === 'number' ? estudante : estudante.id;
    const url = `${this.estudantesUrl}/${id}`;
    return this.http.delete<Estudante>(url, this.httpOptions).pipe(
      tap(_ => this.log(`removido o estudante com id=${id}`)),
      catchError(this.trataErro<Estudante>('removeestudante'))
    );
  }

  /**
* Trata uma operação Http que falhou.
* Permite que a aplicação continue.
* @param operacao - nome da operação que falhou
* @param resultado - valor opcional para retornar como o resultado observable
*/
  private trataErro<T>(operacao = 'operação', resultado?: T) {
    return (erro: any): Observable<T> => {
      // TODO: enviar o erro para a estrutura de log remota
      console.error(erro); // faz o log para o console
      // TODO: melhorar a transformação do erro para consumo do usuário
      this.log(`${operacao} falhou: ${erro.message}`);
      // Deixa a aplicação continuar rodando, retornando um resultado vazio
      return of(resultado as T);
    };
  }


  /** POST: adiciona um novo estudante no servidor */
  adicionaEstudante(estudante: Estudante): Observable<Estudante> {

    this.getEstudantes().subscribe(estudantes => this.estudantes = estudantes);

    return this.http.post<Estudante>(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap((estudante: Estudante) => this.log(`adicionado estudante com id=${estudante.id}`)),
      catchError(this.trataErro<Estudante>('adicionaEstudante'))
    );
  }

  /* GET estudantes cujo nome contém o termo de pesquisa */
  buscaEstudantes(termo: string): Observable<Estudante[]> {
    if (!termo.trim()) {
      // se nenhum termo de pesquisa, retorna array de estudantes vazio.
      return of([]);
    }
    return this.http.get<Estudante[]>(`${this.estudantesUrl}/?nome=${termo}`).pipe(
      tap(_ => this.log(`encontrados estudantes compatíveis com "${termo}"`)),
      catchError(this.trataErro<Estudante[]>('buscaEstudantes', []))
    );
  }

  /** Fazendo log uma mensagem de EstudanteService com MensagemService */
  private log(mensagem: string) {
    console.log(`EstudanteService: ${mensagem}`);
  }

  constructor(private http: HttpClient,
    private inMemoryService: InMemoryDataService) { }
}
