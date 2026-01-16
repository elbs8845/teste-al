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

// ===== LISTAR CONTATOS =====
function listarContatos(){
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  let html = "";

  contatos.forEach((c, i) => {
    html += `
      <p style="color:white">
        ${c.nome} - ${c.telefone}
        <button onclick="delContato(${i})">🗑</button>
      </p>
    `;
  });

  document.getElementById("listaContatos").innerHTML = html;
}

function delContato(i){
  let contatos = JSON.parse(localStorage.getItem("contatos"));
  contatos.splice(i,1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

// ===== LISTAR AGENDAMENTOS =====
function listarAgendamentos(){
  let ag = JSON.parse(localStorage.getItem("agendamentos")) || [];
  let html = "";

  ag.forEach((a, i) => {
    html += `
      <p style="color:white">
        ${a.cliente} | ${a.data} ${a.hora}
        <button onclick="delAg(${i})">🗑</button>
      </p>
    `;
  });

  document.getElementById("listaAgendamentos").innerHTML = html;
}

function delAg(i){
  let ag = JSON.parse(localStorage.getItem("agendamentos"));
  ag.splice(i,1);
  localStorage.setItem("agendamentos", JSON.stringify(ag));
  listarAgendamentos();
}

// ===== LISTAR VENDAS =====
function listarVendas(){
  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];
  let html = "";

  vendas.forEach((v, i) => {
    html += `
      <p style="color:white">
        ${v.cliente} - R$ ${v.valor}
        <button onclick="delVenda(${i})">🗑</button>
      </p>
    `;
  });

  document.getElementById("listaVendas").innerHTML = html;
}

function delVenda(i){
  let vendas = JSON.parse(localStorage.getItem("vendas"));
  vendas.splice(i,1);
  localStorage.setItem("vendas", JSON.stringify(vendas));
  listarVendas();
}
