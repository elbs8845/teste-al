// ===== CONTATOS =====
function addContato(){
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;

  if(!nome || !telefone){
    alert("Preencha todos os campos");
    return;
  }

  contatos.push({ nome, telefone });
  localStorage.setItem("contatos", JSON.stringify(contatos));

  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";

  alert("Contato salvo com sucesso");
}

// ===== AGENDAMENTOS =====
function addAgendamento(){
  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  let cliente = document.getElementById("cliente").value;
  let data = document.getElementById("data").value;
  let hora = document.getElementById("hora").value;

  if(!cliente || !data || !hora){
    alert("Preencha todos os campos");
    return;
  }

  agendamentos.push({ cliente, data, hora });
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  document.getElementById("cliente").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";

  alert("Agendamento salvo");
}

// ===== VENDAS =====
function addVenda(){
  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

  let cliente = document.getElementById("vCliente").value;
  let valor = document.getElementById("vValor").value;

  if(!cliente || !valor){
    alert("Preencha todos os campos");
    return;
  }

  vendas.push({ cliente, valor: Number(valor) });
  localStorage.setItem("vendas", JSON.stringify(vendas));

  document.getElementById("vCliente").value = "";
  document.getElementById("vValor").value = "";

  alert("Venda registrada");
}

// ===== USUÁRIOS =====
function addUser(){
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let login = document.getElementById("uLogin").value;
  let senha = document.getElementById("uSenha").value;
  let tipo = document.getElementById("uTipo").value;

  if(!login || !senha){
    alert("Preencha todos os campos");
    return;
  }

  usuarios.push({ login, senha, tipo });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  document.getElementById("uLogin").value = "";
  document.getElementById("uSenha").value = "";

  alert("Usuário criado");
}

// ===== LOGOUT =====
function sair(){
  localStorage.removeItem("usuarioLogado");
  location.href = "index.html";
}
