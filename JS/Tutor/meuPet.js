// pega o perfil definido na tela de login
let perfilAtivo = JSON.parse(sessionStorage.getItem("perfilAtivo"));

// define o laouyt de acordo com o perfi do usuario
document.getElementById('perfil').textContent = perfilAtivo.perfil.toUpperCase();

function abreMenu() {
  document.getElementById('menu-lateral').classList.toggle('aberto');
  construirMenu()
}

// zera o perfil e volta pro login
function sair() {
  perfilAtivo = null;
  window.location.href = "../../index.html";
}

// obejeto de cada menu de acordo com o perfil
const MENUS = {
  tutor: [
    { id: 'home', local: '../home.html', icone: '🏠', label: 'Início' },
    { id: 'meu-pet', local: 'meuPet.html', icone: '🐶', label: 'Meu Pet' },
    { id: 'castracaoT', local: 'castracaoT', icone: '✂️', label: 'Solicitar Castração' },
    { id: 'resgateT', local: 'resgateT', icone: '🚨', label: 'Solicitar Resgate' },
  ],
};

// função que cria o menu da lateral de acordo com cada perfil
function construirMenu() {
  const menu = document.getElementById('menu-lateral');
  const itens = MENUS[perfilAtivo.perfil] || [];
  menu.innerHTML = itens.map(i =>
    `<a id="${i.id}" href="${i.local}">
       <div class="icone">${i.icone}</div> ${i.label}
     </a>`
  ).join('');
}








function abrirCadastroPet() {
  document.getElementById('fundo-cadastro').classList.toggle('aberto');
  document.getElementById('menu-lateral').classList.remove('aberto');

}


function fecharCadastroPet() {
  document.getElementById('fundo-cadastro').classList.remove('aberto');
}

