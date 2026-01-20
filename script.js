/* =========================
   SESSÃO / USUÁRIO LOGADO
========================= */
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if(!usuarioLogado){
  alert("Faça login novamente");
  location.href = "index.html";
}

/* =========================
   META
========================= */
function salvarMeta(){
  const meta = document.getElementById("meta").value;
  if(!meta) return alert("Informe a meta");

  localStorage.setItem("meta", meta);
  alert("Meta salva com sucesso");
}

/* =========================
   CONTATOS
========================= */
function addContato(){
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  if(!nome || !telefone) return alert("Preencha tudo");

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.push({
    nome,
    telefone,
    vendedor: usuarioLogado.login
  });

  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

function listarContatos(){
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  if(usuarioLogado.tipo === "vendedor"){
    contatos = contatos.filter(c => c.vendedor === usuarioLogado.login);
  }

  contatos.forEach((c,i)=>{
    lista.innerHTML += `
      <p>
        ${c.nome} - ${c.telefone}
        <button onclick="excluirContato(${i})">🗑️</button>
      </p>
    `;
  });
}

function excluirContato(i){
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(i,1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

/* =========================
   AGENDAMENTOS
========================= */
function addAgendamento(){
  const cliente = document.getElementById("cliente").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if(!cliente || !data || !hora) return alert("Preencha tudo");

  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  agendamentos.push({
    cliente, data, hora,
    vendedor: usuarioLogado.login
  });

  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  listarAgendamentos();
}

function listarAgendamentos(){
  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
  const lista = document.getElementById("listaAgendamentos");
  lista.innerHTML = "";

  if(usuarioLogado.tipo === "vendedor"){
    agendamentos = agendamentos.filter(a => a.vendedor === usuarioLogado.login);
  }

  agendamentos.forEach((a,i)=>{
    lista.innerHTML += `
      <p>
        ${a.cliente} - ${a.data} ${a.hora}
        <button onclick="excluirAgendamento(${i})">🗑️</button>
      </p>
    `;
  });
}

function excluirAgendamento(i){
  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
  agendamentos.splice(i,1);
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  listarAgendamentos();
}

/* =========================
   VENDAS
========================= */
function addVenda(){
  const cliente = document.getElementById("vCliente").value;
  const valor = document.getElementById("vValor").value;

  if(!cliente || !valor) return alert("Preencha tudo");

  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

  vendas.push({
    cliente,
    valor,
    vendedor: usuarioLogado.login
  });

  localStorage.setItem("vendas", JSON.stringify(vendas));
  listarVendas();
}

function listarVendas(){
  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];
  const lista = document.getElementById("listaVendas");
  lista.innerHTML = "";

  if(usuarioLogado.tipo === "vendedor"){
    vendas = vendas.filter(v => v.vendedor === usuarioLogado.login);
  }

  vendas.forEach((v,i)=>{
    lista.innerHTML += `
      <p>
        ${v.cliente} - R$ ${v.valor}
        <button onclick="excluirVenda(${i})">🗑️</button>
      </p>
    `;
  });
}

function excluirVenda(i){
  let vendas = JSON.parse(localStorage.getItem("vendas")) || [];
  vendas.splice(i,1);
  localStorage.setItem("vendas", JSON.stringify(vendas));
  listarVendas();
}

/* =========================
   USUÁRIOS (ADMIN)
========================= */
function addUser(){
  if(usuarioLogado.tipo !== "admin"){
    return alert("Acesso restrito");
  }

  const login = uLogin.value;
  const senha = uSenha.value;
  const tipo = uTipo.value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if(usuarios.some(u=>u.login===login)){
    return alert("Usuário já existe");
  }

  usuarios.push({login,senha,tipo});
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  listarUsuarios();
}

function listarUsuarios(){
  const lista = document.getElementById("listaUsuarios");
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  lista.innerHTML = "";

  usuarios.forEach((u,i)=>{
    lista.innerHTML += `
      <p>
        ${u.login} (${u.tipo})
        <button onclick="excluirUsuario(${i})">🗑️</button>
      </p>
    `;
  });
}

function excluirUsuario(i){
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.splice(i,1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  listarUsuarios();
}

/* =========================
   ABRIR BOX
========================= */
function abrir(id){
  document.querySelectorAll(".box").forEach(b=>b.style.display="none");
  document.getElementById(id).style.display="block";
}
