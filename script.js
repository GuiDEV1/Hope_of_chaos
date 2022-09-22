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


// Prologo do jogo!
function prologo() {
    let prologo = document.getElementById('saida');
    prologo.innerHTML =  "<img src='https://pixeljoint.com/files/icons/full/map_animated.gif' alt='Imagem do rteino de hope of chaos'></img> <p>O reino de <strong>Hope</strong> costumava ser um reino de celebração, paz e prosperidade. Mas seu povo mal sabia que sua tranquilidade estava prestes a ter um fim. </p>  <button onclick='prologo1()'>Avançar</button>" ;

}

function prologo1() {
    let prologo1 = document.getElementById('saida');
    prologo1.innerHTML =  "<img src='arquivos/reino2.jpg'> <p>Como todo reino e seus mistérios, havia algo que rondava a imaginação e a curiosidade de seu povo: uma lenda de um suposto medalhão, de poder antigo e descochecido. Suspeitam eles que apenas a realeza possui maiores informações desta relíquia. Porém com o espalhar da lenda, a mesma atrai os olhos de desconhecido, cobertos de ganância e ódio direcionados ao reino. </p> <button onclick='prologo2()'>Avançar</button>";
}

function prologo2() {
    let prologo3 = document.getElementById('saida');
    prologo3.innerHTML = "<img src='arquivos/xinok.jpg'> <p>Em determinado dia, o reino se vê diante a uma grande ameaça. A sala onde se econtrava o medalhão foi brutalmente invadida. Dizem que essa sala era repleta de guardas rondando a relíquia, para garantir proteção. Mas todos eles foram expostos a um grande confronto com o invasor desconhecido. Supreendentemente, nenhum conseguiu resistir ao combate. A joia desejada, assim que possuida, expeliu tamanho poder que nem mesmo o invasor conseguiu suportar, Levando apenas duas partes desse objeto e deixando uma para trás. </p>" ;
}