// ================= BASE =================
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

// ================= USUÁRIOS =================
function addUser(){
  let login = document.getElementById("uLogin").value.trim();
  let senha = document.getElementById("uSenha").value.trim();
  let tipo  = document.getElementById("uTipo").value;

  if(!login || !senha){
    alert("Preencha todos os campos");
    return;
  }

  usuarios.push({ login, senha, tipo });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Usuário cadastrado");

  document.getElementById("uLogin").value = "";
  document.getElementById("uSenha").value = "";
}

// ================= CONTATOS =================
function addContato(){
  let nome = document.getElementById("nome").value.trim();
  let telefone = document.getElementById("telefone").value.trim();

  if(!nome || !telefone){
    alert("Preencha todos os campos");
    return;
  }

  contatos.push({
    nome,
    telefone,
    status: "Lead"
  });

  localStorage.setItem("contatos", JSON.stringify(contatos));

  alert("Contato salvo");

  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
}

// ================= AGENDAMENTOS =================
function addAgendamento(){
  let cliente = document.getElementById("cliente").value.trim();
  let data = document.getElementById("data").value;
  let hora = document.getElementById("hora").value;

  if(!cliente || !data || !hora){
    alert("Preencha todos os campos");
    return;
  }

  agendamentos.push({ cliente, data, hora });
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  alert("Agendamento salvo");
}

// ================= VENDAS =================
function addVenda(){
  let cliente = document.getElementById("vCliente").value.trim();
  let valor = Number(document.getElementById("vValor").value);

  if(!cliente || !valor){
    alert("Preencha todos os campos");
    return;
  }

  vendas.push({ cliente, valor });
  localStorage.setItem("vendas", JSON.stringify(vendas));

  alert("Venda registrada");
}
