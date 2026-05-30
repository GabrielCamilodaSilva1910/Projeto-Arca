const perfilAtivo = JSON.parse(sessionStorage.getItem("perfilAtivo"));

// testa se ta pegando os dados corretos
window.alert(perfilAtivo.perfil + perfilAtivo.senha + 'tchau');

// define o laouyt de acordo com o perfilm do usuario
document.getElementById('header-nome').textContent    = perfilAtivo.nome;
document.getElementById('header-perfil').textContent  = perfilAtivo.perfil.toUpperCase();
document.getElementById('tela-login').classList.remove('active');
document.getElementById('shell').classList.add('active');
construirMenu();
navegarPara('dashboard');


// modificar melhor e dx só os uteis simples
function sair() {
  perfilAtivo = null;
  document.getElementById('shell').classList.remove('active');
  document.getElementById('tela-login').classList.add('active');
  document.getElementById('inp-usuario').value = '';
  document.getElementById('inp-senha').value = '';
  document.getElementById('login-alerta').classList.add('hidden');
}