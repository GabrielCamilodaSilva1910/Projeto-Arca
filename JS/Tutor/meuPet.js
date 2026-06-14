let perfilAtivo = JSON.parse(sessionStorage.getItem("perfilAtivo"));


let PETS = JSON.parse(sessionStorage.getItem("PETS"));





const MENUS = {
  tutor: [
    { id: 'home', local: '../home.html', icone: '&#x1F3E0;', label: 'Início' },
    { id: 'meu-pet', local: './meuPet.html', icone: '&#x1F436;', label: 'Meu Pet' },
    { id: 'castracaoT', local: './solicitarcastracao.html', icone: '&#x1FA7A;', label: 'Solicitar Castração' },
    { id: 'resgateT', local: './solicitarresgate.html', icone: '&#x1F6A8;', label: 'Solicitar Resgate' },
    { id: 'minha-adocao', local: './minhasolicitacao.html', icone: '&#x1F4CB;', label: 'Minha Solicitação' },
    { id: 'adocao', local: './adocao.html', icone: '&#x1F43E;', label: 'Adotar Animal' },
  ],
  candidato: [
    { id: 'home', local: '../home.html', icone: '&#x1F3E0;', label: 'Início' },
    { id: 'meu-pet', local: './meuPet.html', icone: '&#x1F436;', label: 'Meu Pet' },
    { id: 'castracaoT', local: './solicitarcastracao.html', icone: '&#x1FA7A;', label: 'Solicitar Castração' },
    { id: 'resgateT', local: './solicitarresgate.html', icone: '&#x1F6A8;', label: 'Solicitar Resgate' },
    { id: 'minha-adocao', local: './minhasolicitacao.html', icone: '&#x1F4CB;', label: 'Minha Solicitação' },
    { id: 'adocao', local: './adocao.html', icone: '&#x1F43E;', label: 'Adotar Animal' },
  ],
};

var petIdSelecionado = null;



document.getElementById('perfil').textContent = perfilAtivo.perfil.toUpperCase();

function abreMenu() {
  document.getElementById('menu-lateral').classList.toggle('aberto');
  construirMenu()
}


function sair() {
  perfilAtivo = null;
  window.location.href = "../../index.html";
}



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
          <div style="display:flex; justify-content: end;">
            <button class="btn-altera" onclick="abrirAlteraPet(${i.p_id})"><img src="../../Imagens/Icones/lapis.png" alt="Botão de alterar"></button>
            <button class="btn-exclui" onclick="excluirCadastroPet(${i.p_id})"><img src="../../Imagens/Icones/lixeira.png" alt="Botão de excluir"></button>
          </div>
      <div class="card-topo">
          <div class="card-foto">${i.p_foto}</div>
          <div>
              <h3>${i.p_nomePet}</h3>
              <span class="tag tag-verde">${i.p_especie}</span>
              <span class="tag tag-azul">${i.p_raca}</span>
          </div>
      </div>
      <div class="card-corpo">
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
  document.getElementById('fundo_cadastro').classList.toggle('aberto');
  document.getElementById('menu-lateral').classList.remove('aberto');
}


function abrirAlteraPet(id) {

  petIdSelecionado = id;

  document.getElementById('fundo_altera').classList.toggle('aberto');
  document.getElementById('menu-lateral').classList.remove('aberto');


  var posicao = 0;

  while (PETS[posicao].p_id != id) {

    posicao++;
  };


  var pet = PETS[posicao];


  document.getElementById('AlteraNomePet').value = pet.p_nomePet;
  document.getElementById('AlteraEspecie').value = pet.p_especie;
  document.getElementById('AlteraRaca').value = pet.p_raca;
  document.getElementById('AlteraIdade').value = pet.p_idade;
  document.getElementById('AlteraSexo').value = pet.p_sexo;
  document.getElementById('AlteraPeso').value = pet.p_peso;

  if (pet.p_castrado == "Sim") {
    document.getElementById("AlteraSim").checked = true;
  } else {
    document.getElementById("AlteraNao").checked = true;
  }

}



function alterarCadastroPet(id) {

  var posicao = 0;

  while (PETS[posicao].p_id != id) {

    posicao++;
  };


  var nomePet = document.getElementById('AlteraNomePet').value;
  var especie = document.getElementById('AlteraEspecie').value;
  var raca = document.getElementById('AlteraRaca').value;
  var idade = document.getElementById('AlteraIdade').value;
  var sexo = document.getElementById('AlteraSexo').value;
  var peso = document.getElementById('AlteraPeso').value;
  var inputCastrado = document.querySelector('input[name="AlteraOpcao"]:checked');


  if (nomePet != "" && especie != "" && raca != "" && idade != "" && sexo != "" && peso != "" && inputCastrado != null) {

    var castrado = inputCastrado.value;

    if (especie == "Cão") {
      var foto = '&#x1F436';
    } else {
      var foto = '&#x1F431';
    }

    var Pet = {
      p_id: id,
      p_nomePet: nomePet,
      p_especie: especie,
      p_raca: raca,
      p_idade: idade,
      p_sexo: sexo,
      p_peso: peso,
      p_castrado: castrado,
      p_foto: foto
    };

    PETS[posicao] = Pet;

    sessionStorage.setItem("PETS", JSON.stringify(PETS));

    alert(`Cadastro do Pet atelterado com Sucesso.`);


    construirConteudo();

    fecharAlteraPet();

  } else {

    alert(`Por favor preencha todos os campos.`);

  }

}




function excluirCadastroPet(id) {

  var indice = PETS.findIndex(pet => pet.p_id == id);



  if (indice != -1) {


    PETS.splice(indice, 1);

    alert(`Pet removido com sucesso!`);

    sessionStorage.setItem("PETS", JSON.stringify(PETS));

    construirConteudo();

  } else {
    alert(`Erro: Pet com o ID ${id} não foi encontrado.`);
  }

}



function salvarCadastroPet() {

  var nomePet = document.getElementById('nomePet').value;
  var especie = document.getElementById('especie').value;
  var raca = document.getElementById('raca').value;
  var idade = document.getElementById('idade').value;
  var sexo = document.getElementById('sexo').value;
  var peso = document.getElementById('peso').value;
  var inputCastrado = document.querySelector('input[name="opcao"]:checked');

  if (nomePet != "" && especie != "" && raca != "" && idade != "" && sexo != "" && peso != "" && inputCastrado != null) {

    var castrado = inputCastrado.value;




    if (PETS.length > 0) {
      var ultimoId = PETS[(PETS.length - 1)].p_id;

    } else {
      var ultimoId = 0;
    }

    if (especie == "Cão") {
      var foto = '&#x1F436';
    } else {
      var foto = '&#x1F431';
    }

    var novoPet = {
      p_id: ultimoId + 1,
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

    sessionStorage.setItem("PETS", JSON.stringify(PETS));

    alert(`Novo Pet Adicionado: ${novoPet.p_nomePet}\n`);


    construirConteudo();

    fecharCadastroPet();

  } else {

    alert(`Por favor preencha todos os campos.`);

  }


}


function fecharCadastroPet() {
  document.getElementById('fundo_cadastro').classList.remove('aberto');
}

function fecharAlteraPet() {
  document.getElementById('fundo_altera').classList.remove('aberto');
}