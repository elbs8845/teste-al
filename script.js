/* =========================
   META
========================= */
function salvarMeta(){
  const meta = document.getElementById("meta").value;
  if(!meta){
    alert("Informe a meta");
    return;
  }
  localStorage.setItem("meta", meta);
  alert("Meta salva com sucesso");
}

/* =========================
   CONTATOS
========================= */
function addContato(){
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  if(!nome || !telefone){
    alert("Preencha todos os campos");
    return;
  }

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push({ nome, telefone });
  localStorage.setItem("contatos", JSON.stringify(contatos));

  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";

  listarContatos();
}

function listarContatos(){
  const lista = document.getElementById("listaContatos");
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  lista.innerHTML = "";

  contatos.forEach((c, i) => {
    lista.innerHTML += `
      <p><b>${i+1}.</b> ${c.nome} - ${c.telefone}</p>
    `;
  });
}

/* =========================
   AGENDAMENTOS
========================= */
function addAgendamento(){
  const cliente = document.getElementById("cliente").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if(!cliente || !data || !hora){
    alert("Preencha todos os campos");
    return;
  }

  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
  agendamentos.push({ cliente, data, hora });
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  document.getElementById("cliente").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";

  listarAgendamentos();
}

function listarAgendamentos(){
  const lista = document.getElementById("listaAgendamentos");
  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  lista.innerHTML = "";

  agendamentos.forEach((a, i) => {
    lista.innerHTML += `
      <p><b>${i+1}.</b> ${a.cliente} | ${a.data} às ${a.hora}</p>
    `;
  });
}

/* =========================
   VENDAS
========================= */
function addVenda(){
  const cliente = document.getElementById("vCliente").value;
  const valor = document.getElementById("vValor").value;

  if(!cliente || !valor){
    alert("Preencha todos os campos");
    return;
  }

  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];
  vendas.push({ cliente, valor });
  localStorage.setItem("vendas", JSON.stringify(vendas));

  document.getElementById("vCliente").value = "";
  document.getElementById("vValor").value = "";

  listarVendas();
}

function listarVendas(){
  const lista = document.getElementById("listaVendas");
  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

  lista.innerHTML = "";

  vendas.forEach((v, i) => {
    lista.innerHTML += `
      <p><b>${i+1}.</b> ${v.cliente} - R$ ${Number(v.valor).toFixed(2)}</p>
    `;
  });
}

/* =========================
   USUÁRIOS (ADMIN / VENDEDOR)
========================= */
function addUser(){
  const login = document.getElementById("uLogin").value;
  const senha = document.getElementById("uSenha").value;
  const tipo = document.getElementById("uTipo").value;

  if(!login || !senha){
    alert("Preencha todos os campos");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // evita login duplicado
  if(usuarios.some(u => u.login === login)){
    alert("Usuário já existe");
    return;
  }

  usuarios.push({ login, senha, tipo });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  document.getElementById("uLogin").value = "";
  document.getElementById("uSenha").value = "";

  listarUsuarios();
}

function listarUsuarios(){
  const lista = document.getElementById("listaUsuarios");
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  lista.innerHTML = "";

  usuarios.forEach((u, i) => {
    lista.innerHTML += `
      <p>
        👤 <b>${u.login}</b> 
        <span style="color:#ff8c00">(${u.tipo})</span>
        <button onclick="excluirUsuario(${i})">🗑️</button>
      </p>
    `;
  });
}

function excluirUsuario(index){
  if(!confirm("Deseja excluir este usuário?")) return;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  listarUsuarios();
}
