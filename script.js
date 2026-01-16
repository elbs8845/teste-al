// ===== BASE DE DADOS LOCAL =====
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

if(!usuarios){
  usuarios = [{ login:"admin", senha:"123", tipo:"admin" }];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// ===== LOGIN =====
function login(){
  let u = document.getElementById("login").value;
  let s = document.getElementById("senha").value;

  let user = usuarios.find(x => x.login === u && x.senha === s);
  if(!user){ alert("Usuário ou senha inválidos"); return; }

  localStorage.setItem("logado", JSON.stringify(user));
  location.href = user.tipo === "admin" ? "dashboard.html" : "vendedor.html";
}

// ===== LOGOUT =====
function sair(){
  localStorage.removeItem("logado");
  location.href = "index.html";
}

// ===== USUÁRIOS =====
function addUser(){
  usuarios.push({
    login:uLogin.value,
    senha:uSenha.value,
    tipo:uTipo.value
  });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário cadastrado");
}

// ===== CONTATOS =====
function addContato(){
  contatos.push({
    nome: document.getElementById("nome").value,
    telefone: document.getElementById("telefone").value,
    status: "Lead"
  });
  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

function listarContatos(){
  let lista = document.getElementById("lista");
  if(!lista) return;

  lista.innerHTML = "";
  contatos.forEach(c=>{
    lista.innerHTML += `
      <tr>
        <td>${c.nome}</td>
        <td>${c.telefone}</td>
        <td>${c.status}</td>
      </tr>
    `;
  });
}

