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
  let u = document.getElementById("login").value.trim();
  let s = document.getElementById("senha").value.trim();

  let user = usuarios.find(x => x.login === u && x.senha === s);

  if(!user){
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("logado", JSON.stringify(user));

  if(user.tipo === "admin"){
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "vendedor.html";
  }
}

// ===== LOGOUT =====
function sair(){
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}
