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
    { id:'home', local: 'home.html',  icone: '🏠', label: 'Início' },
    { id: 'meu-pet', local: './Tutor/meuPet.html',    icone: '🐶', label: 'Meu Pet' },
    { id: 'castracaoT', local: 'castracaoT', icone: '✂️', label: 'Solicitar Castração' },
    { id: 'resgateT', local: 'resgateT',   icone: '🚨', label: 'Solicitar Resgate' },
  ],
  candidato: [
    { id:'home', local: 'dashboard',  icone: '🏠', label: 'Início' },
    { id: 'adocao',  local: 'adocao',     icone: '❤️', label: 'Adotar Animal' },
    { id: 'minha-adocao', local: 'minha-adocao', icone: '📋', label: 'Minha Solicitação' },
    { id: 'denuncia', local: 'denuncia', icone: '📣', label: 'Denúncia Maus-tratos' },
  ],
  ong: [
    { id:'home', local: 'dashboard',  icone: '🏠', label: 'Início' },
    { id: 'animais-ong', local: 'animais-ong', icone: '🐾', label: 'Animais Cadastrados' },
    { id: 'resgates-ong', local: 'resgates-ong', icone: '🚑', label: 'Resgates' },
    { id: 'relatorio-ong', local: 'relatorio-ong', icone: '📊', label: 'Relatório' },
  ],
  prefeitura: [
    { id:'home', local: 'dashboard',   icone: '🏠', label: 'Painel Geral' },
    { id: 'gestao-animais', local: 'gestao-animais', icone: '🐾', label: 'Gestão de Animais' },
    { id: 'gestao-adocoes', local: 'gestao-adocoes', icone: '❤️', label: 'Adoções' },
    { id: 'gestao-castracao', local: 'gestao-castracao', icone: '✂️', label: 'Castrações' },
    { id: 'gestao-denuncias', local: 'gestao-denuncias', icone: '📣', label: 'Denúncias' },
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
