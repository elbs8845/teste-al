// =====================
// SESSÃO
// =====================
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuarioLogado) location.href = "index.html";

// =====================
// CONTATOS
// =====================
function addContato() {
  const nome = nomeInput("nome");
  const telefone = nomeInput("telefone");
  if (!nome || !telefone) return alert("Preencha os campos");

  const dados = getLS("contatos");
  dados.push({ nome, telefone, vendedor: usuarioLogado.login });
  setLS("contatos", dados);
  listarContatos();
}

function listarContatos() {
  renderList("listaContatos", "contatos", (c) =>
    `${c.nome} - ${c.telefone}`,
    "delContato"
  );
}

function delContato(i) {
  delItem("contatos", i, listarContatos);
}

// =====================
// AGENDAMENTOS
// =====================
function addAgendamento() {
  const cliente = nomeInput("cliente");
  const data = nomeInput("data");
  const hora = nomeInput("hora");
  if (!cliente || !data || !hora) return alert("Preencha os campos");

  const dados = getLS("agendamentos");
  dados.push({ cliente, data, hora, vendedor: usuarioLogado.login });
  setLS("agendamentos", dados);
  listarAgendamentos();
}

function listarAgendamentos() {
  renderList(
    "listaAgendamentos",
    "agendamentos",
    (a) => `${a.cliente} - ${a.data} ${a.hora}`,
    "delAgendamento"
  );
}

function delAgendamento(i) {
  delItem("agendamentos", i, listarAgendamentos);
}

// =====================
// VENDAS (100% FUNCIONAL)
// =====================
function addVenda() {
  const cliente = nomeInput("vCliente");
  const valor = Number(nomeInput("vValor"));
  if (!cliente || !valor) return alert("Preencha os campos");

  const vendas = getLS("vendas");
  vendas.push({ cliente, valor, vendedor: usuarioLogado.login });
  setLS("vendas", vendas);
  listarVendas();
}

function listarVendas() {
  const lista = document.getElementById("listaVendas");
  lista.innerHTML = "";

  const vendas = getLS("vendas");
  let total = 0;

  vendas.forEach((v, i) => {
    if (usuarioLogado.tipo === "vendedor" && v.vendedor !== usuarioLogado.login) return;

    total += v.valor;

    lista.innerHTML += `
      <div class="item">
        ${v.cliente} - R$ ${v.valor.toFixed(2)}
        <button onclick="delVenda(${i})">🗑️</button>
      </div>
    `;
  });

  lista.innerHTML += `
    <hr>
    <strong>Total de Vendas: R$ ${total.toFixed(2)}</strong>
  `;
}

function delVenda(i) {
  delItem("vendas", i, listarVendas);
}

// =====================
// USUÁRIOS
// =====================
function addUser() {
  const login = nomeInput("uLogin");
  const senha = nomeInput("uSenha");
  const tipo = nomeInput("uTipo");
  if (!login || !senha) return alert("Preencha os campos");

  const users = getLS("usuarios");
  users.push({ login, senha, tipo });
  setLS("usuarios", users);
  listarUsuarios();
}

function listarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";

  getLS("usuarios").forEach((u, i) => {
    lista.innerHTML += `
      <div class="item">
        ${u.login} (${u.tipo})
        <button onclick="delUser(${i})">🗑️</button>
      </div>
    `;
  });
}

function delUser(i) {
  delItem("usuarios", i, listarUsuarios);
}

// =====================
// HELPERS (BASE)
// =====================
function getLS(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setLS(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function nomeInput(id) {
  return document.getElementById(id).value;
}

function delItem(key, i, cb) {
  const arr = getLS(key);
  arr.splice(i, 1);
  setLS(key, arr);
  cb();
}

// =====================
// MENU PERMISSÃO
// =====================
if (usuarioLogado.tipo === "vendedor") {
  document.querySelector("button[onclick=\"abrir('userBox')\"]").style.display = "none";
}
