import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudanteDetalheComponent } from './estudante-detalhe/estudante-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

const routes: Routes = [
  { path: '', redirectTo: '/painel', pathMatch: 'full' },
  { path: 'painel', component: PainelComponent },
  { path: 'estudantes', component: EstudantesComponent },
  { path: 'detalhe/:id', component: EstudanteDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
  // O módulo HttpClientInMemoryWebApiModule intercepta requisições HTTP
  // e retorna respostas de servidor simuladas.
  // Remova-o quando um servidor real estiver pronto para receber requisições.
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
