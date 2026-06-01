// pega o perfil definido na tela de login
let perfilAtivo = JSON.parse(sessionStorage.getItem("perfilAtivo"));

// define o laouyt de acordo com o perfi do usuario
document.getElementById('perfil').textContent  = perfilAtivo.perfil.toUpperCase();

function abreMenu() {
  document.getElementById('menu-lateral').classList.toggle('aberto');
  construirMenu()
}

// zera o perfil e volta pro login
function sair() {
  perfilAtivo = null;
  window.location.href = "../index.html";
}

// obejeto de cada menu de acordo com o perfil
const MENUS = {
  tutor: [
    { local: 'dashboard',  icone: '🏠', label: 'Início' },
    { local: 'meu-pet',    icone: '🐶', label: 'Meu Pet' },
    { local: 'castracaoT', icone: '✂️', label: 'Solicitar Castração' },
    { local: 'resgateT',   icone: '🚨', label: 'Solicitar Resgate' },
  ],
  candidato: [
    { local: 'dashboard',  icone: '🏠', label: 'Início' },
    { local: 'adocao',     icone: '❤️', label: 'Adotar Animal' },
    { local: 'minha-adocao', icone: '📋', label: 'Minha Solicitação' },
    { local: 'denuncia',   icone: '📣', label: 'Denúncia Maus-tratos' },
  ],
  ong: [
    { local: 'dashboard',  icone: '🏠', label: 'Início' },
    { local: 'animais-ong', icone: '🐾', label: 'Animais Cadastrados' },
    { local: 'resgates-ong', icone: '🚑', label: 'Resgates' },
    { local: 'relatorio-ong', icone: '📊', label: 'Relatório' },
  ],
  prefeitura: [
    { local: 'dashboard',   icone: '🏠', label: 'Painel Geral' },
    { local: 'gestao-animais', icone: '🐾', label: 'Gestão de Animais' },
    { local: 'gestao-adocoes', icone: '❤️', label: 'Adoções' },
    { local: 'gestao-castracao', icone: '✂️', label: 'Castrações' },
    { local: 'gestao-denuncias', icone: '📣', label: 'Denúncias' },
  ]
};

// função que cria o menu da lateral de acordo com cada perfil
function construirMenu() {
  const menu = document.getElementById('menu-lateral');
  const itens = MENUS[perfilAtivo.perfil] || [];
  menu.innerHTML = itens.map(i =>
    `<a href="${i.local}">
       <div class="icone">${i.icone}</div> ${i.label}
     </a>`
  ).join('');
}
