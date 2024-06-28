function reloadpag() {
  res.innerHTML = "";
}
var username = document.getElementById("user");
var password = document.querySelector("input#pass");
var res = document.getElementById("res");
res.style.color = "red";
function login() {
  if (username.value.length == 0) {
    res.innerHTML = "Nome de usuario invalido";
  } else if (password.value.length == 0) {
    res.innerHTML = "Senha invalida";
  } else if(username.value == "adm" && password.value == "adm123") {
    location.href = "pagina2/main.html";
  }else{
    res.innerHTML = "Usuario ou senha errados"
  }
}
