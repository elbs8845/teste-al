function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!usuario || !senha) {
    alert("Preencha usuário e senha");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const user = usuarios.find(
    u => u.login === usuario && u.senha === senha
  );

  if (!user) {
    alert("Usuário ou senha incorretos");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  setTimeout(() => {
    window.location.replace("dashboard.html");
  }, 100);
}

