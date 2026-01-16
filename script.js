let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

// USUÁRIOS
function addUser(){
  let login = uLogin.value.trim();
  let senha = uSenha.value.trim();
  let tipo = uTipo.value;

  if(!login || !senha){
    alert("Preencha todos os campos");
    return;
  }

  usuarios.push({ login, senha, tipo });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário criado");
}

// CONTATOS
function addContato(){
  if(!nome.value || !telefone.value){
    alert("Preencha os campos");
    return;
  }
  contatos.push({ nome:nome.value, telefone:telefone.value, status:"Lead" });
  localStorage.setItem("contatos", JSON.stringify(contatos));
  alert("Contato salvo");
}

// AGENDAMENTOS
function addAgendamento(){
  if(!cliente.value || !data.value || !hora.value){
    alert("Preencha tudo");
    return;
  }
  agendamentos.push({ cliente:cliente.value, data:data.value, hora:hora.value });
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  alert("Agendamento salvo");
}

// VENDAS
function addVenda(){
  if(!vCliente.value || !vValor.value){
    alert("Preencha tudo");
    return;
  }
  vendas.push({ cliente:vCliente.value, valor:Number(vValor.value) });
  localStorage.setItem("vendas", JSON.stringify(vendas));
  alert("Venda registrada");
}

