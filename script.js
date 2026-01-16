let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  {login:"admin", senha:"123", tipo:"admin"}
];

let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

function salvar(chave, valor){
  localStorage.setItem(chave, JSON.stringify(valor));
}

function login(){
  let u = login.value;
  let s = senha.value;

  let user = usuarios.find(x => x.login === u && x.senha === s);
  if(!user){
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("logado", JSON.stringify(user));
  location.href = "dashboard.html";
}

function sair(){
  localStorage.removeItem("logado");
  location.href = "index.html";
}
