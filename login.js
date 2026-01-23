function login() {
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");

  if (!usuario || !senha) {
    alert("Campos não encontrados");
    return;
  }

  const login = usuario.value.trim();
  const senhaVal = senha.value.trim();

  if (!login || !senhaVal) {
    alert("Preencha usuário e senha");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const user = usuarios.find(
    u => u.login === login && u.senha === senhaVal
  );

  if (!user) {
    alert("Usuário ou senha incorretos");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  window.location.replace("dashboard.html");
}
