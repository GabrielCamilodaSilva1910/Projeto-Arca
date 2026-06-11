const USUARIOS = {
  tutor: { senha: '123456', perfil: 'tutor' },
  candidato: { senha: 'cand!098', perfil: 'candidato' },
  Ong: { senha: 'ong$-135', perfil: 'ong' },
  prefeitura: { senha: 'pref@456', perfil: 'prefeitura' }
};


let perfilAtivo = null;



document.addEventListener("DOMContentLoaded", PetsSessao);



var PETS

function PetsSessao() {

  
  var Pet_sessao = sessionStorage.getItem("PETS");

  if (Pet_sessao) {


    PETS = JSON.parse(Pet_sessao);
    

  } else {

    PETS = [
      { p_id: 0, p_nomePet: 'Bolinha', p_especie: 'Cão', p_raca: 'Vira-lata', p_idade: '2 anos', p_sexo: 'Macho', p_peso: '8 kg', p_castrado: 'Não', p_foto: '&#x1F436' }
    ];
    

  };
  
  
}



function realizarLogin() {
  const usuario = document.getElementById('inp-usuario').value.trim();
  const senha = document.getElementById('inp-senha').value;
  const alerta = document.getElementById('login-alerta');
  if (USUARIOS[usuario] && USUARIOS[usuario].senha === senha) {
    perfilAtivo = USUARIOS[usuario];
    sessionStorage.setItem("perfilAtivo", JSON.stringify(perfilAtivo));
    sessionStorage.setItem("PETS", JSON.stringify(PETS));
    window.location.href = "./Telas/home.html";


  } else {
    alerta.classList.remove('esconde');
    document.getElementById('inp-senha').value = '';
  }
}



document.getElementById('inp-senha').addEventListener('keydown', e => { if (e.key === 'Enter') realizarLogin(); });
document.getElementById('inp-usuario').addEventListener('keydown', e => { if (e.key === 'Enter') realizarLogin(); });


