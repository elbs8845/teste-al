function login(){
  const login = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if(!login || !senha){
    alert("Preencha usuário e senha");
    return;
  }

  // busca usuários cadastrados
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // procura usuário correto
  const user = usuarios.find(u => u.login === login && u.senha === senha);

  if(!user){
    alert("Usuário ou senha incorretos");
    return;
  }

  // salva sessão
  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  // redireciona
  if(user.tipo === "admin"){
    location.href = "dashboard.html";
  } else {
    location.href = "dashboard.html"; 
    // se quiser separar depois: vendedor.html
  }
}
