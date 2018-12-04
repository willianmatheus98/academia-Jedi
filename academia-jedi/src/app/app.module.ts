import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';

import { FormsModule } from '@angular/forms';
import { EstudanteDetalheComponent } from './estudante-detalhe/estudante-detalhe.component';
import { PainelComponent } from './painel/painel.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudanteDetalheComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
