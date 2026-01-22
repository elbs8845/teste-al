function login() {
  alert("Botão clicado ✅"); // teste – depois pode remover

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
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  // 🔀 Redirecionamento por tipo
  if (user.tipo === "vendedor") {
    window.location.href = "vendedor.html";
  } 
  else if (user.tipo === "supervisor") {
    window.location.href = "dashboard.html";
  } 
  else {
    window.location.href = "dashboard.html";
  }
}

