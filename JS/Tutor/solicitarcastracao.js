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
    { id:'home', local: '../home.html',  icone: '&#x1F3E0;', label: 'Início' },
    { id: 'meu-pet', local: './meuPet.html',    icone: '&#x1F436;', label: 'Meu Pet' },
    { id: 'castracaoT', local: './solicitarcastracao.html', icone: '&#x1FA7A;', label: 'Solicitar Castração' },
    { id: 'resgateT', local: './solicitarresgate.html',   icone: '&#x1F6A8;', label: 'Solicitar Resgate' },
    { id: 'minha-adocao', local: './minhasolicitacao.html', icone: '&#x1F4CB;', label: 'Minha Solicitação' },
    { id: 'adocao',  local: './adocao.html',     icone: '&#x1F43E;', label: 'Adotar Animal' },
  ],
  candidato: [
    { id:'home', local: '../home.html',  icone: '&#x1F3E0;', label: 'Início' },
    { id: 'meu-pet', local: './meuPet.html',    icone: '&#x1F436;', label: 'Meu Pet' },
    { id: 'castracaoT', local: './solicitarcastracao.html', icone: '&#x1FA7A;', label: 'Solicitar Castração' },
    { id: 'resgateT', local: './solicitarresgate.html',   icone: '&#x1F6A8;', label: 'Solicitar Resgate' },
    { id: 'minha-adocao', local: './minhasolicitacao.html', icone: '&#x1F4CB;', label: 'Minha Solicitação' },
    { id: 'adocao',  local: './adocao.html',     icone: '&#x1F43E;', label: 'Adotar Animal' },
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

/* PARTE REFERENCIA */
function enviar() {
  alert('Solicitação enviada! Aguarde contato.');
}
