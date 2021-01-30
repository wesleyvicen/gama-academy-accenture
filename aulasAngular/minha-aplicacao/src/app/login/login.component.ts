import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('usuarioInput') usuarioInput: ElementRef | undefined
  @ViewChild('senhaInput') senhaInput: ElementRef | undefined

  usuario = ''
  senha = ''

  constructor(private LoginService: LoginService) { }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.controls.usuario.markAsTouched();
      form.controls.senha.markAsTouched();

      if (form.controls.usuario.invalid) {
        this.usuarioInput?.nativeElement.focus();
      }

      if (form.controls.senha.invalid) {
        this.senhaInput?.nativeElement.focus();
      }

      return;
    }

    this.login();
  }

  exibeErro(nomeControle: string,form: NgForm) {
    if(!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  login(){

    const credenciais = {
      usuario: this.usuario,
      senha: this.senha
    }

    this.LoginService.logar(credenciais)
    .subscribe(response => this.onSucessLogin(response), error => this.onErrorLogin(error))
  }

  onSucessLogin(response: any){
    console.log("Sucesso", response)
  }
  onErrorLogin(error: any){
     console.log("Erro", error)
  }

}