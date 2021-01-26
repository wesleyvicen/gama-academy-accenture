import baseURL from '../../../service/baseURL.js';
import auth from '../../service/IsAuth.js'

let Login = {
    render : async () => {
        let IsAuth = await auth(true, 'dashboard');
        let view = `
        <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-md-6 m-auto">
                <div class="fluid text-center pt-5">
                    <h2>Formulario de Login</h2>
                    <p>Seja bem vindo</p>
                    <img src="img/bootstrap-icons.png" class="img-fluid m-auto" alt="bootstrap">
                </div>
            </div>
            <div class="col-md-6 m-auto">
                <div class="card">
                    <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
                    <form class="p-5">
                        <div class="form-group">
                            <label for="usuario">Seu Email</label>
                            <input type="text" class="form-control mb-4" id="usuario">
                            <small class="form-text text-muted">Adicione aqui seu email.</small>
                        </div>
                        <div class="form-group">
                            <label for="senha">Senha</label>
                            <input type="password" class="form-control mb-4" id="senha">
                        </div>
                        <div class="form-group form-check mb-4">
                            <input type="checkbox" class="form-check-input" id="manter">
                            <label class="form-check-label" for="manter">Me mantenha conectado</label>
                          </div>
                          <button id="submit_login" class="btn btn-primary" ">Logar-se</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        `

        return view;
    },
    after_render :async () => {
        document.getElementById('submit_login').addEventListener('click', () => {
           let usuario = document.getElementById('usuario').value,
           senha = document.getElementById('senha').value

           if( usuario.length >= 4 && senha.length >= 4 ){

            axios.post(`${baseURL}login`, {
                usuario: usuario,
                senha: senha
            }, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then( res => {
                if ( res.status === 200 ){
                    window.location.replace('#/dashboard')
                    localStorage.setItem('@token', res.data.token)
                    localStorage.setItem('userDataAccount', JSON.stringify(res.data))
                }
            })

        } else {
            alert('confira sua senha!')
        }
    })
}
}

export default Login;