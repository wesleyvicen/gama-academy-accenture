import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { usuario } from 'src/app/shared/interfaces/usuario.interfaces';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { dashboardResponse } from './home.interfaces';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  usuario: usuario | undefined;
  dashboard: dashboardResponse | undefined;

  estaCarregando: boolean = false;
  erro = false;

  constructor(private authService: AuthService, private homeService: HomeService) { }

  ngOnInit() {

    this.usuario = this.authService.getUsuario();
    this.getDashboard();
  }

  inicio = '2021-01-01';
  fim = '2021-02-02';

  getDashboard() {
    this.estaCarregando = true;
    this.erro = false;

    this.homeService.getDashboard(this.inicio, this.fim)
    .pipe(
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError
    )
  }

  onSuccess(response: any) {
    this.dashboard = response;
    console.log("Sucesso")
  }
  onError(error: any){
     console.log("Erro", error)
     this.erro = true;
  }

  getBordaCardCSS(saldo: number){
    return {
      'border-success': saldo > 0,
       'border-danger': saldo < 0
    }
  }
  getTextSaldoCSS(saldo : number) {
    return {
      'text-success': saldo > 0,
      'text-danger': saldo < 0
    }
  }
}
