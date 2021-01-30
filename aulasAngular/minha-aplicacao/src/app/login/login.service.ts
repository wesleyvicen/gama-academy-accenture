import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginCredenciais } from './login.interfaces';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  logar(credenciais: LoginCredenciais){
    console.log(credenciais)
    return this.HttpClient.post('https://accenture-java-desafio.herokuapp.com/login', credenciais);
  }
}
