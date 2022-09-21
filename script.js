// Opção de mudar o tema da página.
function mudarCor () {
    var corpo = document.getElementById('corpo');
    corpo.classList.add('black');
}

function removeCor () {
    var corpo = document.getElementById('corpo');
    corpo.classList.remove('black');
    corpo.classList.remove("autoContraste");
}

function autoContraste() {
    var corpo = document.getElementById('corpo');
    corpo.classList.add('autoContraste');
}
/****************fim****************/

// function teste () {
//     var cap1 =  document.getElementById("saida") ;
//     cap1.innerHTML = " <p>bchdbidbvdbvdhvdbvusevbsivbsdjvbdvbidjvbsduvjbdsivbesv</p>  <button>Sim</button>  <button>Não</button>";
// }
// teste();
