import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/shared/interfaces/usuario.interfaces';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

usuario: usuario | undefined

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.usuario = this.authService.getUsuario();
  }


}
