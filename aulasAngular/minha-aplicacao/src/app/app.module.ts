import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { HomeComponent } from './area-logada/home/home.component';
import { LancamentosComponent } from './area-logada/lancamentos/lancamentos.component';
import { PlanosContaComponent } from './area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { LoginComponent } from './login/login.component';
import { Atv1Component } from './shared/atv1/atv1.component';
import { ExercicioDiretivasComponent } from './shared/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    Atv1Component,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    LoginComponent,
    PlanosContaComponent,
    CadastroComponent,
    LancamentosComponent,
    Erro404Component,
    AreaLogadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  },
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
