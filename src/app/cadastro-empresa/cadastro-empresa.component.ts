import { Component, OnInit } from '@angular/core';

export class Pessoa {
  public nome: string;
  public email: string;
  public cnpj: string;
  public url: string;
}

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent implements OnInit {
  pessoa: Pessoa;
  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa();
  }
  public nome(): void {
    console.log('sadsaasddasd '.toUpperCase());
  }
  email(): void {
    console.log(this.pessoa.email);
  }
}
