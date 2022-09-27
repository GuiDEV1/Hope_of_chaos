var name ;


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
    prologo1.innerHTML =  "<img src='arquivos/reino2.jpg'> <p>Como todo reino e seus mistérios, havia algo que rondava a imaginação e a curiosidade de seu povo: uma lenda de um suposto medalhão, de poder antigo e desconhecido. Suspeitam eles que apenas a realeza possui maiores informações desta relíquia. Porém com o espalhar da lenda, a mesma atrai os olhos de desconhecido, cobertos de ganância e ódio direcionados ao reino. </p> <button onclick='prologo2()'>Avançar</button>";
}

function prologo2() {
    let prologo2 = document.getElementById('saida');
    prologo2.innerHTML = "<img src='arquivos/prologo3.png'> <p>Em determinado dia, o reino se vê diante a uma grande ameaça. A sala onde se econtrava o medalhão foi brutalmente invadida. Dizem que essa sala era repleta de guardas rondando a relíquia, para garantir proteção. Mas todos eles foram expostos a um grande confronto com o invasor desconhecido. Supreendentemente, nenhum conseguiu resistir ao combate. A joia desejada, assim que possuida, expeliu tamanho poder que nem mesmo o invasor conseguiu suportar, Levando apenas duas partes desse objeto e deixando uma para trás. </p>  <button onclick='prologo3()'>Avançar</button>" ;
}

function prologo3 () {
  let prologo3 = document.getElementById('saida');
  prologo3.innerHTML = "<img src= 'arquivos/prologo3_1.jpg'> <p>Após acontecimento a polulação presencia estranhas mudanças em seu lar. Criaturas medievais e maquinas futurísticas passam a espalhar medo desespero a todos. O rei juntamente a outros de grande influência decidiram então criar um torneio, e que o vencedor final receberia a missão de ir em busca das peças restantes. Caso então, concluido a tafefa com glória, receberia a grande riqueza e alteração permanente de seu status. O novo herói da coroa e de seu povo.</p> <button onclick='inicio()'>Avançar</button>" ;
}
// Fim do prólogo 


// Inicio - hope of chaos 

function inicio () {
  let inicio = document.getElementById('saida');
  inicio.innerHTML = "  <button onclick='inicio1()'>Adquirir baú </button> <button onclick='fim1()'>Negar baú</button>";
}
// Primeiro final!!
function fim1 () {
   let fim1 =  document.getElementById('saida');
   fim1.innerHTML = " <h3> Caminhamos até a passagem <span class='scd'>-secreta!</span></h3> <p>O rei ordenou que saíssemos pela passagem secreta para não chamar atenção!.</p> <button onclick='fim2()'> Avançar </button>";
}

function fim2 () {
    let fim2 =  document.getElementById('saida');
    fim2.innerHTML = "<p>No meio do trajeto encontramos um urso!. <br><br> - ops não peguei o baú, um beijo e um pão de quijo pra mim :(</p> <button  onclick='morte0()'>BEM VINDO AO GIGANTE!</button>" ;
}

function morte0 () {
 let  morte_0 = document.getElementById('saida');
 morte_0.innerHTML = "<img src=''> <button  onclick='prologo()'>Recomeçar</button>";
}

// Primeiro Final

function inicio1 () {
    let inicio1 = document.getElementById('saida');
    inicio1.innerHTML = "<img src='arquivos/reino2.jpg'> <h3>Escolha-sua-<span class = 'scd'> classe:</span></h3>  <button onclick='inicio2()'>Guerreiro</button> <button>Arqueiro</button> <button>Mago</button>" ;
}

function inicio2 () {
    let inicio2 = document.getElementById('saida');
    name = prompt("Digite o nome do seu personagem!");
    inicio2.innerHTML = name +  " Conclua sua missão nosso reino depende de você!"  ;
}