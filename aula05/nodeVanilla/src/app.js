
    var form = document.getElementById('form')
     var email = document.getElementById('email')
     var pass = document.getElementById('senha')

     verName = localStorage
     localStorage.setItem("name", "teste@teste.com")
     localStorage.setItem("pass", "123")

     form.addEventListener('submit', function(e) {
        e.preventDefault();

        emailv = localStorage.getItem("name")
        passv = localStorage.getItem("pass")
                      if(email.value == emailv && pass.value == passv){

                          window.location.href = "/dashboard.html"
                      }
                      else{
                          alert("Usuário e ou senha está errado!")
                      }
                      
     })