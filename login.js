function login() {
  const loginInput = document.getElementById("usuario");
  const senhaInput = document.getElementById("senha");

  if (!loginInput || !senhaInput) {
    alert("Campos de login não encontrados");
    return;
  }

  const login = loginInput.value.trim();
  const senha = senhaInput.value.trim();

  if (!login || !senha) {
    alert("Preencha usuário e senha");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const user = usuarios.find(
    u => u.login === login && u.senha === senha
  );

  if (!user) {
    alert("Usuário ou senha incorretos");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  window.location.href = "dashboard.html";
}
