import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
