function login(){
  let u = document.getElementById("login").value;
  let s = document.getElementById("senha").value;

  let user = usuarios.find(x => x.login === u && x.senha === s);
  if(!user){
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("logado", JSON.stringify(user));

  if(user.tipo === "admin"){
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "vendedor.html";
  }
}
