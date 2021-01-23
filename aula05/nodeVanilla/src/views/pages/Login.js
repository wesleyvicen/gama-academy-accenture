import baseURL from '../../../service/baseURL.js';
let Login = {
    render : async () => {
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
                            <label for="email">Seu Email</label>
                            <input type="email" class="form-control mb-4" id="email">
                            <small class="form-text text-muted">Adicione aqui seu email.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" class="form-control mb-4" id="password">
                        </div>
                        <div class="form-group form-check mb-4">
                            <input type="checkbox" class="form-check-input" id="manter">
                            <label class="form-check-label" for="manter">Me mantenha conectado</label>
                          </div>
                          <button id="submit_login" class="btn btn-primary" ">Logar-se</button
                    </form>
                </div>
            </div>
        </div>
    </div>
        `

        return view;
    },
    after_render : async () => {
        document.getElementById('submit_login').addEventListener('click', () => {
            let emailVal = document.getElementById('email').value,
            passwordVal = document.getElementById('password').value
               console.log("Tudo certo")
               axios.post(baseURL, {
                   username: emailVal,
                   password: passwordVal
               }).then(res => {
                   console.log(res.data)
                   localStorage.setItem('@token', res.data.token)
                   sessionStorage.setItem('@token', res.data.token)
                   Cookies.set('@token', res.data.token, {expires: 1})
               })
           
         })
    }
}

export default Login;