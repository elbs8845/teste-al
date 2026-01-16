let logado = JSON.parse(localStorage.getItem("logado"));
if(!logado){
  window.location.href = "index.html";
}

// ===== USUÁRIOS BASE =====
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

if(!usuarios || usuarios.length === 0){
  usuarios = [
    { login: "admin", senha: "123", tipo: "admin" }
  ];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// ===== LOGIN =====
function login(){
  let u = usuario.value;
  let s = senha.value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let user = usuarios.find(x => x.login === u && x.senha === s);

  if(!user){
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(user));
  location.href = "dashboard.html";
}

// ===== LOGOUT =====
function sair(){
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}
