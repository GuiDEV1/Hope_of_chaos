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
 // onload('<h1></h1>');  
  let inicio = document.getElementById('saida');
  inicio.innerHTML = "  <img src='cenas_cap/abrirbauSouN.png'> <button onclick='inicio1()'>Adquirir baú </button> <button onclick='fim1()'>Negar baú</button>";
}
/************      Primeiro final!!      **************/
function fim1 () {
   let fim1 =  document.getElementById('saida');
   fim1.innerHTML = " <img src='cenas_cap/null saindo.gif'> <h3> Caminhamos até a passagem <span class='scd'>-secreta!</span></h3> <p>O rei ordenou que saíssemos pela passagem secreta para não chamar atenção!.</p> <button onclick='fim2()'> Avançar </button>";
}

function fim2 () {
    let fim2 =  document.getElementById('saida');
    fim2.innerHTML = "<img src='cenas_cap/nullEentrandonacaverna.gif'><p>No meio do trajeto encontramos um urso!. <br><br> - ops não peguei o baú, um beijo e um pão de queijo pra mim :(</p> <button  onclick='morte0()'>BEM VINDO AO GIGANTE!</button>" ;
}

function morte0 () {
 let  morte_0 = document.getElementById('saida');
 morte_0.innerHTML = "<img src='cenas_cap/primeirofinal.gif'> <p class = 'gameOver'>Game over!! você esta morto!!</p> <button  onclick='inicio()'>Recomeçar</button>";
}
/******************************** Fim do primeiro final *****************/

// escolha de classe:
function inicio1 () {
    let inicio1 = document.getElementById('saida');
    inicio1.innerHTML = "<img src='cenas_cap/escolhaClasse.gif'> <h3>Escolha-sua-<span class = 'scd'> classe:</span></h3>  <button onclick='caminhoGuerreiro()'>Guerreiro</button> <button onclick='caminhoArqueiro()'>Arqueiro</button> <button onclick='caminhoMago()'>Mago</button>" ;
}

/*****************   caminho do guerreiro:    ******************/ 
function caminhoGuerreiro () {
    let inicio2 = document.getElementById('saida');
    name = prompt("Digite o nome do seu personagem!");
    inicio2.innerHTML = " <img src='cenas_cap/GuerreiroEscolhido.gif'> <p> <span class = 'nickName'>nome do seu personagem: " + name + "</span> | Rei: Conclua sua missão o reino precisa de você!, para não chamar atenção passe pela passagem secreta atrás do reino.</p>   <button onclick='sairDoReinoGuerreiro()'>Avançar</button>" ;
}

function sairDoReinoGuerreiro() {
  let sairDoReino = document.getElementById('saida');
  sairDoReino.innerHTML = "<img src='cenas_cap/sairDoReinoGue.gif'>" + `<p><span class='nickName'>${name}</span>:Saindo da arena e indo em direção a passagem secreta do reino, para pegarmos o portal para o outro núcleo</p> <button onclick='entrandoNaCavernaGuerreiro()'>Avançar</button>`;
}

function entrandoNaCavernaGuerreiro() {
   let entrandoNaCaverna = document.getElementById('saida');
   entrandoNaCaverna.innerHTML = "<img src='cenas_cap/EntramosNaCavernaGuereiro.gif'>" + `<p><span class='nickName'>${name}</span>: Entra na passagem secreta!</p> <button onclick='explorandoCavernaGuerreiro()'>Avançar</button>`;
}

function explorandoCavernaGuerreiro() {
    let explorandoCaverna = document.getElementById('saida');
    explorandoCaverna.innerHTML = "<img src='cenas_cap/ExplorandoCavernaGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: No meio da passagem secreta encontramos um urso, precisamos passar por ele para pegar o portal no fim da caverna!</p> <button onclick='MatarUrsoGuerreiro()'>Usar Espada</button>` ;
}

function MatarUrsoGuerreiro() {
    let matarUrso = document.getElementById('saida');
    matarUrso.innerHTML = "<img src='cenas_cap/AtaqueUrsoGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>:Use sua espada para atacar o urso!!</p> <button onclick='entraPortalGuerreiro()'>Avançar</button>` ;
}

function entraPortalGuerreiro() {
    let entraPortal =  document.getElementById('saida');
    entraPortal.innerHTML = "<img src='cenas_cap/entraPortalGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Avança para o proximo núcleo do reino que esta no nosso tempo atual, mas com frequente ataques de criaturas, e boatos de um necromante que possui a segunda parte do <strong>medalhão.</strong></p>   <button onclick="ChegandoNoMedievalGuerreiro()">Avançar</button>`;
}

function ChegandoNoMedievalGuerreiro() {
    let chegandoNoMedieval = document.getElementById('saida');
    chegandoNoMedieval.innerHTML = "<img src='cenas_cap/EntrandoCavernaGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Tudo em nossa volta muda. Se encontramos em uma floresta.</p> <button onclick="andandoFlorestaGuerreiro()">Avançar</button>`;
}

function andandoFlorestaGuerreiro() {
    let andandoFloresta = document.getElementById('saida');
    andandoFloresta.innerHTML = "<img src='cenas_cap/ExplorandoFlorestaGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Explora a floresta poucos passos a frente à vista um vilarejo, la seria um otimo local para buscar informações. Estamos com muita fome essa floresta habitam muitos animais, caçar seria uma otima idea. </p> <button onclick="cacarGuerreiro()">Caçar?</button>  <button onclick="irAoVilarejoGuerreiro()">Ir ao vilarejo?</button>`;
}

function cacarGuerreiro() {
   let cacar = document.getElementById('saida');
   cacar.innerHTML = "<img src='cenas_cap/caçarGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Escolheu caçar!<p/> <button onclick="EcontrandoAnimalGuerreiro()">Avançar</button>`;
}

function EcontrandoAnimalGuerreiro() {
    let encontrandoAnimal = document.getElementById('saida');
    encontrandoAnimal.innerHTML = "<img src='cenas_cap/aproximarAnimalGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Animal localizado qual a melhor estrategia? </p> <button onclick="seAproximarAnimalGuerreiro()">Se aproximar do animal?</button> <button onclick="matarAnimalGuerreiro()">Matar o animal?</button>` ;
}

// Falha e volta para a escolha do vilarejo ou caçar!
function seAproximarAnimalGuerreiro() {
  let aproximarDoAnimal = document.getElementById('saida');
  aproximarDoAnimal.innerHTML = "<img src='cenas_cap/AnimalFogeGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>:Animal escapou! :( <p/> <button onclick="andandoFlorestaGuerreiro()">Voltar para o caminho do vilarejo?</button>`;
}

// caminho true!!!
function matarAnimalGuerreiro() {
   let matarAnimal = document.getElementById('saida');
   matarAnimal.innerHTML = "<img src='cenas_cap/matarJavaliGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Você matou o javali , agora partiu fazer aquele churras!!</p> <button onclick="cozinharCarneGuerreiro()">Avançar</button>`;
}

function cozinharCarneGuerreiro() {
    let cozinharCarne = document.getElementById('saida');
    cozinharCarne.innerHTML = "<img src='cenas_cap/CozinharCarneGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Conzinha o animal e come uma parte!. </p>  <button onclick="IrAoVilarejoGuerreiroDaCaca()">Ir ao vilarejo</button>`;
}
// Fim caça. 

// Vilarejo vindo da caça!
function IrAoVilarejoGuerreiroDaCaca() {
    let irVilarejo = document.getElementById('saida');
    irVilarejo.innerHTML = "<img src='https://cdn.discordapp.com/attachments/773372240686350356/1027056706443808800/Knight.gif'>" + `<p><span class='nickName'>${name}</span>: Após essa refeição, ta na hora de ir ao vilarejo em busca de infromações. </p>  <button onclick="EntrandoVilarejoGuerreiro()">Avançar</button>`;
}

// indo ao vilarejo sem caçar!
function irAoVilarejoGuerreiro () {
     let diretoAoVilarejo = document.getElementById('saida');
     diretoAoVilarejo.innerHTML = "<img src ='https://cdn.discordapp.com/attachments/773372240686350356/1027055927200858232/indoAoVilarejoGuerreiro.gif'>" + `<p><span class='nickName'>${name}</span>: Foi em direção ao vilarejo por informações ignorando sua fome.</p>  <button onclick="EntrandoVilarejoGuerreiro()">Avançar</button>` ;
} 

// continuação vilarejo!
function EntrandoVilarejoGuerreiro() {
    let entrandoVilarejo = document.getElementById('saida');
    entrandoVilarejo.innerHTML = "<img src = 'https://cdn.discordapp.com/attachments/773372240686350356/1027061197226393610/Knight_1.gif'>" + `<p><span class='nickName'>${name}</span>: Entrou na vila, Habitantes comentam que a taberna costuma ser um lugar movimentado, talvez la haja uma pista ?. </p> <button onclick="caminhaAtabernaGuerreiro()">Ir a taberna</button>`;
}

function caminhaAtabernaGuerreiro() {
    let caminhaAtaberna = document.getElementById('saida');
    caminhaAtaberna.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027067542134587422/Kinght.gif?width=799&height=606'>" + `<p><span class='nickName'>${name}</span>: Caminha até a porta da taberna observando o vilarejo. </p>  <button onclick="entraNaTabernaGuerreiro()">Entrar na taberna</button>`;
}

function entraNaTabernaGuerreiro() {
    let entraNataberna = document.getElementById('saida');
    entraNataberna.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027067759277916250/Knight_2.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Entrou na taberna , hum nusco por informações talvez o dono da taberna tenha elas ou aquele sujeito estranho la atrás ? </p>  <button onclick="tomarUmaBrejaGuerreiro()">Tomar uma breja?</button>  <button onclick="falarComDesconhecidoGuerreiroD()">Ir direto ao homem estranho</button>`;
}

function tomarUmaBrejaGuerreiro() {
    let tomarUmaBreja = document.getElementById('saida');
    tomarUmaBreja.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027068061485899786/Knight_3.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Tomamos nossa breja perguntamos ao dono sobre informações, e ele disse <strong>Dono do bar:</strong> aquele suijeito no fundo da taberna é um homem que pode te dar muitas informações.</p>  <button onclick="falarComDesconhecidoGuerreiro()">Ir ao homem misterioso</button>`;
}
/********************* Fim caminho guerreiro *************************/

// ambos vão ao homem misterioso!
function falarComDesconhecidoGuerreiro() {
 let falarComDesconhecido = document.getElementById('saida');
 falarComDesconhecido.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027075381544636476/Knight_4.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aocnteceu no seu reino quem está por trás disso ira pagar, ouvi um boatos que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p>  <button onclick="discussaoGuerreiro()">Avançar</button>`;
}

// indo direto ao darius!
function falarComDesconhecidoGuerreiroD () {
    let falarComDesconhecido = document.getElementById('saida');
    falarComDesconhecido.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027079361653919744/Knight_5.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Vai até o homem misterioso, este homem se chama <i>Darius</i> pedimos informações, ele é um dos guardiões dessas terras <strong>Darius</strong>: sinto muito o que aocnteceu no seu reino quem está por trás disso ira pagar, ouvi um boatos que um necromante foi visto com um objeto brilhoso e invocando criaturas por ai: ele se encontra no topo da montanha.</p>  <button onclick="discussaoGuerreiro()">Avançar</button>`;
}

function discussaoGuerreiro() {
   let discussaoTaberan = document.getElementById('saida');
    discussaoTaberan.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027080629390671943/A4._Knight_Look_to_Lady.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Anão meche com a moça que estava bebendo, enão sai do pé dela dizem que esse anão tem um esquadrão de saqueadores </p>  <button onclick="ajudarMulherGuerreiro()">Ajudar?</button>  <button onclick="sairDaTabernaRGuerreiro()">Sair da taberna?</button> `;
}

function sairDaTabernaRGuerreiro() {
   let sairTaberna = document.getElementById('saida');
   sairTaberna.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027087933934665758/A5A._Knight_Dont_Help.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Ignoramos e seguimos em frente afinal temos uma missão importante cada segundo importa!! </p>`;
}

function ajudarMulherGuerreiro() {
   let ajudarMulher = document.getElementById('saida');
   ajudarMulher.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027091103905759314/A5B._1_Knight_Help_Intimate_1.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>:Nocauteo o anão, ajudando a moça, como se chama? <strong> Me chamo Rona sou uma viking</strong> Obrigada pela ajuda, não queria deixar esse pobre coitado em coma, <span class='nickName'>${name}</span>: o problema que os amigos dele não gostaram muito <strong>Rona</strong>: que venham!!! </p>  <button onclick="atacarAnoesGuerreiro()">Atacar!</button>`;
}

function atacarAnoesGuerreiro() {
    let atacarAnoes = document.getElementById('saida');
    atacarAnoes.innerHTML = "<img src='https://media.discordapp.net/attachments/834862603792285717/1027095229716779028/A5B._3_Knight_Fight.gif?width=809&height=607'>" + `<p><span class='nickName'>${name}</span>: Todos foram derrotados!, <strong>Rona</strong>: Obrigado mais uma vez pela sua ajuda boa sorte na sua ventura!!</p>` ;
}


/******************************** Caminho Arqueiro *************************************/



/******************************** Fim do caminho Arqueiro **************************/



/******************************** Caminho Mago *************************************/

/******************************** Fim do caminho Mago **************************/

