import IsAuthenticated from '../../service/IsAuth.js';
import auth from '../../service/IsAuth.js'

import baseURL from '../../../service/baseURL.js';
let dataUser = JSON.parse(localStorage.getItem('userDataAccount'));
let {token, usuario: {login}} = dataUser

let HeadersDefault = {
  headers: {
    "Content-Type": "application/json",
    "Authorization" : token
}
}

let RequestDataAccount = () => {
  axios.get(`${baseURL}lancamentos/planos-conta?login=${login}`, HeadersDefault)
}

let Dash = {
    render : async () => {
      let getInfo = RequestDataAccount();
      let IsAuth = await auth(false, 'login');

      let userData = JSON.parse(localStorage.getItem('userDataAccount'))
      const {usuario, conta} = userData

        let view = `
        <div>
        <div class="container p-5">
        <div class="row">
        <h1>Olá, ${usuario.nome}</h1>
        <p>Atualmente você tem em conta: R$ ${conta.saldo}</p>
        <div class="row align-items-center">
        <div class="col">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
        <div class="col">
        <div class="card" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        </div>
      
      </div>
          </div>
    
      </div>
        `

        return view;
    },
    after_render : async () => {}
}

export default Dash;