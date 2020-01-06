import { Component, OnInit } from '@angular/core';

export class Pessoa {
  public nome: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'empresa';
  qualquerNome = 'Geovane';
  pessoa: Pessoa;

  ngOnInit() {
    this.pessoa = new Pessoa();
  }

  constructor() {

  }
  imprimir(): void {
    console.log('nome: ' + this.pessoa.nome);
  }
}
