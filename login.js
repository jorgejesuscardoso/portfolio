document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("formLogin");
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let login = formulario.elements["login"].value;
      let senha = formulario.elements["senha"].value;
  
      let dados = {
        login: login,
        senha: senha
      };
  
      if (dados.login === "Bushido" && dados.senha === "123" || dados.login === "Kauã" && dados.senha === "123"  ) {
        boasVindas(dados.login);
        window.location.href = "mario/index.html"
      } else {
        mensagemErro();
      }
    });
  
    function boasVindas(login) {
      let mensagem = 'Seja bem-vindo ' + login + '. Aproveite o site!';
      alert(mensagem);
    }
  
    function mensagemErro() {
      alert("Login e/ou senha incorretos. Tente novamente ou registre-se!.");
    }
  })