const USUARIOS = {
  tutor:      { senha: '123456',   perfil: 'tutor'},
  candidato:  { senha: 'cand!098', perfil: 'candidato'},
  Ong:        { senha: 'ong$-135', perfil: 'ong'},
  prefeitura: { senha: 'pref@456', perfil: 'prefeitura'}
};


let perfilAtivo = null;




function realizarLogin() {
  const usuario = document.getElementById('inp-usuario').value.trim();
  const senha = document.getElementById('inp-senha').value;
  const alerta = document.getElementById('login-alerta');
  if (USUARIOS[usuario] && USUARIOS[usuario].senha === senha) {
    perfilAtivo = USUARIOS[usuario];
    sessionStorage.setItem("perfilAtivo", JSON.stringify(perfilAtivo));
    window.location.href = "./Telas/home.html";

    
  } else {
    alerta.classList.remove('esconde');
    document.getElementById('inp-senha').value = '';
  }
}



document.getElementById('inp-senha').addEventListener('keydown', e => { if (e.key === 'Enter') realizarLogin(); });
document.getElementById('inp-usuario').addEventListener('keydown', e => { if (e.key === 'Enter') realizarLogin(); });


