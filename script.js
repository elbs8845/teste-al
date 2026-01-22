// =====================
// CONTROLE DE SESSÃO
// =====================
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuarioLogado) {
  location.href = "index.html";
}

// =====================
// CONTATOS
// =====================
function addContato() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  if (!nome || !telefone) return alert("Preencha os campos");

  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.push({
    nome,
    telefone,
    vendedor: usuarioLogado.login
  });

  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

function listarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.forEach((c, index) => {
    if (usuarioLogado.tipo === "vendedor" && c.vendedor !== usuarioLogado.login) return;

    lista.innerHTML += `
      <div class="item">
        ${c.nome} - ${c.telefone}
        <button onclick="delContato(${index})">🗑️</button>
      </div>`;
  });
}

function delContato(index) {
  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

// =====================
// AGENDAMENTOS
// =====================
function addAgendamento() {
  const cliente = document.getElementById("cliente").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if (!cliente || !data || !hora) return alert("Preencha os campos");

  const ag = JSON.parse(localStorage.getItem("agendamentos")) || [];

  ag.push({
    cliente,
    data,
    hora,
    vendedor: usuarioLogado.login
  });

  localStorage.setItem("agendamentos", JSON.stringify(ag));
  listarAgendamentos();
}

function listarAgendamentos() {
  const lista = document.getElementById("listaAgendamentos");
  lista.innerHTML = "";

  const ag = JSON.parse(localStorage.getItem("agendamentos")) || [];

  ag.forEach((a, index) => {
    if (usuarioLogado.tipo === "vendedor" && a.vendedor !== usuarioLogado.login) return;

    lista.innerHTML += `
      <div class="item">
        ${a.cliente} - ${a.data} ${a.hora}
        <button onclick="delAg(${index})">🗑️</button>
      </div>`;
  });
}

function delAg(index) {
  const ag = JSON.parse(localStorage.getItem("agendamentos")) || [];
  ag.splice(index, 1);
  localStorage.setItem("agendamentos", JSON.stringify(ag));
  listarAgendamentos();
}

// =====================
// VENDAS (CORRIGIDO)
// =====================
function addVenda(){
  let cliente = document.getElementById("vCliente").value;
  let valor = Number(document.getElementById("vValor").value);

  if(cliente === "" || valor === 0){
    alert("Preencha todos os campos");
    return;
  }

  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

  vendas.push({
    cliente: cliente,
    valor: valor
  });

  localStorage.setItem("vendas", JSON.stringify(vendas));

  document.getElementById("vCliente").value = "";
  document.getElementById("vValor").value = "";

  listarVendas();
}


function listarVendas(){
  let lista = document.getElementById("listaVendas");
  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

  lista.innerHTML = "";

  let total = 0;

  vendas.forEach((v, i) => {
    total += Number(v.valor);

    lista.innerHTML += `
      <div class="item">
        <span>${v.cliente} - R$ ${v.valor.toFixed(2)}</span>
        <button onclick="excluirVenda(${i})">🗑️</button>
      </div>
    `;
  });

  lista.innerHTML += `
    <hr>
    <strong>Total: R$ ${total.toFixed(2)}</strong>
  `;
}

function excluirVenda(index){
  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

  vendas.splice(index, 1);

  localStorage.setItem("vendas", JSON.stringify(vendas));

  listarVendas();
}


  vendasFiltradas.forEach((v, i) => {
    total += Number(v.valor);

    lista.innerHTML += `
      <div class="item">
        <span>
          ${v.cliente} — R$ ${Number(v.valor).toFixed(2)}
          <br>
          <small style="color:#aaa">Vendedor: ${v.vendedor}</small>
        </span>
        <button onclick="delVenda(${i})">🗑️</button>
      </div>
    `;
  });

  lista.innerHTML += `
    <hr>
    <h3>Total de Vendas: R$ ${total.toFixed(2)}</h3>
  `;
}



// =====================
// USUÁRIOS (ADMIN)
// =====================
function addUser() {
  if (usuarioLogado.tipo !== "admin") return alert("Acesso negado");

  const login = document.getElementById("uLogin").value;
  const senha = document.getElementById("uSenha").value;
  const tipo = document.getElementById("uTipo").value;

  if (!login || !senha) return alert("Preencha os campos");

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.some(u => u.login === login)) {
    return alert("Usuário já existe");
  }

  usuarios.push({ login, senha, tipo });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  listarUsuarios();
}

function listarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios.forEach((u, index) => {
    lista.innerHTML += `
      <div class="item">
        ${u.login} (${u.tipo})
        <button onclick="delUser(${index})">🗑️</button>
      </div>`;
  });
}

function delUser(index) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  listarUsuarios();
}

// =====================
// PERMISSÃO MENU
// =====================
if (usuarioLogado.tipo === "vendedor") {
  const btn = document.querySelector("button[onclick=\"abrir('userBox')\"]");
  if (btn) btn.style.display = "none";
}
