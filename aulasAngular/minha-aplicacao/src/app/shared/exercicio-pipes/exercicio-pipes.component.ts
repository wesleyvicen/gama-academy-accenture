import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent  {

valorMonetario = 3000;


data = new Date();

compras = [{
  produto: 'Lâmpadas',
  valor: 299.29,
  peso: 0,
  quantidade: 2,
  data: new Date(2020, 1, 1, 15, 20),
},
{
  produto: 'Farinha',
  valor: 450.29,
  peso: 29.33333,
  quantidade: 2,
  data: new Date(2020, 1, 10, 19, 30),
}]

}
