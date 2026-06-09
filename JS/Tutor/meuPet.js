// pega o perfil definido na tela de login
let perfilAtivo = JSON.parse(sessionStorage.getItem("perfilAtivo"));

var PETS = [
  { p_id: 1, p_nomePet: 'Bolinha', p_especie: 'Cão', p_raca: 'Vira-lata', p_idade: '2 anos', p_sexo: 'Macho', p_peso: '8 kg', p_castrado: 'Não', p_foto: '🐶' }
];

const MENUS = {
  tutor: [
    { id: 'home', local: '../home.html', icone: '🏠', label: 'Início' },
    { id: 'meu-pet', local: 'meuPet.html', icone: '🐶', label: 'Meu Pet' },
    { id: 'castracaoT', local: 'castracaoT', icone: '✂️', label: 'Solicitar Castração' },
    { id: 'resgateT', local: 'resgateT', icone: '🚨', label: 'Solicitar Resgate' },
  ],
};



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

document.addEventListener("DOMContentLoaded", construirConteudo);

function construirConteudo() {
  const conteudo = document.getElementById('conteudo');
  const itens = PETS || [];
  const htmlCards = itens.map(i =>
    `
    <div class="card" id="${i.p_id}">
      <div class="card-topo">
          <div class="card-foto">${i.p_foto}</div>
          <div>
              <h3>${i.p_nomePet}</h3>
              <span class="tag tag-verde">${i.p_especie}</span>
              <span class="tag tag-azul">${i.p_raca}</span>
          </div>
      </div>
      <div class="cad-corpo">
          <div><label>Idade</label>
              <p>${i.p_idade}</p>
          </div>
          <div><label>Sexo</label>
              <p>${i.p_sexo}</p>
          </div>
          <div><label>Peso</label>
              <p>${i.p_peso}</p>
          </div>
          <div><label>Castrado?</label>
              <p>${i.p_castrado}</p>
          </div>
      </div>
    </div>  
    `
  ).join('');

  conteudo.innerHTML = htmlCards + `
    <button class="btn-cadastro" onclick="abrirCadastroPet()">+ Cadastrar novo pet</button>
  `;
}




function abrirCadastroPet() {
  document.getElementById('fundo-cadastro').classList.toggle('aberto');
  document.getElementById('menu-lateral').classList.remove('aberto');

}









function salvarCadastroPet() {



  var nomePet = document.getElementById('nomePet').value;
  var especie = document.getElementById('especie').value;
  var raca = document.getElementById('raca').value;
  var idade = document.getElementById('idade').value;
  var sexo = document.getElementById('sexo').value;
  var peso = document.getElementById('peso').value;
  var castrado = document.querySelector('input[name="opcao"]:checked').value;

  if (nomePet != "" && especie != "" && raca != "" && idade != "" && sexo != "" && peso != "" && castrado != "") {


    if (especie == "Cão") {
      var foto = '🐶';
    } else {
      var foto = '🐱';
    }

    const novoPet = {
      p_id: PETS.length + 1,
      p_nomePet: nomePet,
      p_especie: especie,
      p_raca: raca,
      p_idade: idade,
      p_sexo: sexo,
      p_peso: peso,
      p_castrado: castrado,
      p_foto: foto
    };

    PETS.push(novoPet);

    alert(`Novo Pet Adicionado: ${novoPet.p_nomePet}\n`);


    construirConteudo()

    fecharCadastroPet();



  } else {
    alert("Por favor preencher todos os campos para realizar o cadastro.")
  }




}


function fecharCadastroPet() {
  document.getElementById('fundo-cadastro').classList.remove('aberto');
}

