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

  alert("Usuário salvo com sucesso");

  document.getElementById("uLogin").value = "";
  document.getElementById("uSenha").value = "";
}
