// USUÁRIO PADRÃO (GARANTE ACESSO)
if(!localStorage.getItem("usuarios")){
  localStorage.setItem("usuarios", JSON.stringify([
    {login:"admin", senha:"123", tipo:"admin"}
  ]));
}

function login(){
  const u = document.getElementById("usuario").value;
  const s = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const user = usuarios.find(x => x.login === u && x.senha === s);

  if(!user){
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(user));
  window.location.href = "dashboard.html";
}

