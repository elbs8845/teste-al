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
function addContato(){
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  if(!nome || !telefone) return alert("Preencha os campos");

  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push({ nome, telefone, vendedor: usuarioLogado.login });
  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

function listarContatos(){
  const lista = document.getElementById("listaContatos");
  if(!lista) return;
  lista.innerHTML = "";

  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos
    .filter(c => usuarioLogado.tipo !== "vendedor" || c.vendedor === usuarioLogado.login)
    .forEach((c,i)=>{
      lista.innerHTML += `
        <div class="item">
          ${c.nome} - ${c.telefone}
          <button onclick="excluirContato(${i})">🗑️</button>
        </div>`;
    });
}

function excluirContato(i){
  const contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(i,1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

// =====================
// AGENDAMENTOS
// =====================
function addAgendamento(){
  const cliente = document.getElementById("cliente").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  if(!cliente || !data || !hora) return alert("Preencha os campos");

  const ag = JSON.parse(localStorage.getItem("agendamentos")) || [];
  ag.push({ cliente, data, hora, vendedor: usuarioLogado.login });
  localStorage.setItem("agendamentos", JSON.stringify(ag));
  listarAgendamentos();
}

function listarAgendamentos(){
  const lista = document.getElementById("listaAgendamentos");
  if(!lista) return;
  lista.innerHTML = "";

  const ag = JSON.parse(localStorage.getItem("agendamentos")) || [];
  ag
    .filter(a => usuarioLogado.tipo !== "vendedor" || a.vendedor === usuarioLogado.login)
    .forEach((a,i)=>{
      lista.innerHTML += `
        <div class="item">
          ${a.cliente} - ${a.data} ${a.hora}
          <button onclick="excluirAgendamento(${i})">🗑️</button>
        </div>`;
    });
}

function excluirAgendamento(i){
  const ag = JSON.parse(localStorage.getItem("agendamentos")) || [];
  ag.splice(i,1);
  localStorage.setItem("agendamentos", JSON.stringify(ag));
  listarAgendamentos();
}

// =====================
// VENDAS
// =====================
function addVenda(){
  const cliente = document.getElementById("vCliente").value;
  const valor = Number(document.getElementById("vValor").value);
  if(!cliente || !valor) return alert("Preencha os campos");

  const vendas = JSON.parse(localStorage.getItem("vendas")) || [];
  vendas.push({ cliente, valor, vendedor: usuarioLogado.login });
  localStorage.setItem("vendas", JSON.stringify(vendas));
  listarVendas();
}

function listarVendas(){
  const lista = document.getElementById("listaVendas");
  if(!lista) return;
  lista.innerHTML = "";

  const vendas = JSON.parse(localStorage.getItem("vendas")) || [];
  let total = 0;

  vendas
    .filter(v => usuarioLogado.tipo !== "vendedor" || v.vendedor === usuarioLogado.login)
    .forEach((v,i)=>{
      total += v.valor;
      lista.innerHTML += `
        <div class="item">
          ${v.cliente} - R$ ${v.valor.toFixed(2)}
          <button onclick="excluirVenda(${i})">🗑️</button>
        </div>`;
    });

  lista.innerHTML += `<hr><strong>Total: R$ ${total.toFixed(2)}</strong>`;
}

function excluirVenda(i){
  const vendas = JSON.parse(localStorage.getItem("vendas")) || [];
  vendas.splice(i,1);
  localStorage.setItem("vendas", JSON.stringify(vendas));
  listarVendas();
}

// =====================
// USUÁRIOS
// =====================
function addUser(){
  const login = document.getElementById("uLogin").value;
  const senha = document.getElementById("uSenha").value;
  const tipo = document.getElementById("uTipo").value;
  if(!login || !senha) return alert("Preencha os campos");

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push({ login, senha, tipo });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  listarUsuarios();
}

function listarUsuarios(){
  const lista = document.getElementById("listaUsuarios");
  if(!lista) return;
  lista.innerHTML = "";

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.forEach((u,i)=>{
    lista.innerHTML += `
      <div class="item">
        ${u.login} (${u.tipo})
        <button onclick="excluirUser(${i})">🗑️</button>
      </div>`;
  });
}

function excluirUser(i){
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.splice(i,1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  listarUsuarios();
}

// =====================
// PERMISSÃO
// =====================
if(usuarioLogado.tipo === "vendedor"){
  const btn = document.querySelector("button[onclick=\"abrir('userBox')\"]");
  if(btn) btn.style.display = "none";
}
