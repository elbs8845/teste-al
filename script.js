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
  alert("Meta salva");
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
      <p>
        ${i+1}. ${c.nome} - ${c.telefone}
        <button onclick="editarContato(${i})">✏️</button>
        <button onclick="excluirContato(${i})">🗑️</button>
      </p>
    `;
  });
}

function excluirContato(index){
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  listarContatos();
}

function editarContato(index){
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  let c = contatos[index];

  const novoNome = prompt("Editar nome:", c.nome);
  const novoTelefone = prompt("Editar telefone:", c.telefone);

  if(novoNome && novoTelefone){
    contatos[index] = { nome: novoNome, telefone: novoTelefone };
    localStorage.setItem("contatos", JSON.stringify(contatos));
    listarContatos();
  }
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

  let age

