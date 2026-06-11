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
  ong: [
    { id:'home', local: '../home.html',  icone: '&#x1F3E0', label: 'Início' },
    { id: 'animais-ong', local: './animaiscadastrados.html', icone: '&#x1F436;', label: 'Animais Cadastrados' },
    { id: 'gestao-castracao', local: './castracoes.html', icone: '&#x1FA7A;', label: 'Castrações' },
    { id: 'gestao-denuncias', local: './denuncias.html', icone: '&#x1F6A8;', label: 'Denúncias' },
    { id: 'resgates-ong', local: './resgates.html', icone: '&#128657;', label: 'Resgates' },
    { id: 'relatorio-ong', local: './relatorio.html', icone: '&#128202;', label: 'Relatório' },
  ],
  prefeitura: [
    { id:'home', local: '../home.html',  icone: '&#x1F3E0', label: 'Início' },
    { id: 'animais-ong', local: './animaiscadastrados.html', icone: '&#x1F436;', label: 'Animais Cadastrados' },
    { id: 'gestao-castracao', local: './castracoes.html', icone: '&#x1FA7A;', label: 'Castrações' },
    { id: 'gestao-denuncias', local: './denuncias.html', icone: '&#x1F6A8;', label: 'Denúncias' },
    { id: 'resgates-ong', local: './resgates.html', icone: '&#128657;', label: 'Resgates' },
    { id: 'relatorio-ong', local: './relatorio.html', icone: '&#128202;', label: 'Relatório' },
  ]
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

/* PARTE REFERENCIA */
function atualizar() {
  alert('Cadastro atualizado');
}

function excluir() {
  alert('Cadastro removido');
}