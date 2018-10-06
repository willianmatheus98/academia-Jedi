import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';

import { FormsModule } from '@angular/forms';
import { EstudanteDetalheComponent } from './estudante-detalhe/estudante-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudanteDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
