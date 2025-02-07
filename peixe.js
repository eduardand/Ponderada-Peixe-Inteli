var config = { //configurações básicas do jogo
    type: Phaser.AUTO, //tipo de executador que converte o código em imagem
    width: 800, //largura
    height: 600, //altura

    scene: { //define as funções que serão executadas
        preload:preload,
        create: create,
        update: update 
    }
};

var game = new Phaser.Game(config); //cria uma váriavel que armazena um "novo jogo phaser" que usa as configurações definidas em config
var tartarugaMouse; // declara a varável da tartaruga
var peixe;
var ida = true;

function preload(){ //carrega os recursos do jogo
    this.load.image("mar", "assets/bg_azul-claro.png"); //carregar o mar
    this.load.image("logo", "assets/logo-inteli_azul.png"); //carregar o logo
    this.load.image("tartaruga", "assets/peixes/tartaruga.png"); //carrega a tartaruga
    this.load.image("algas", "assets/algas.png") //carrega as algas
    this.load.image("pedra", "assets/pedra.png")

}

function create(){ //uso dos recursos definidos no preload
    this.add.image(400,300, "mar"); //adiciona o mar na tela
    this.add.image(700,600, "algas");
    this.add.image(0,500, "algas");
    this.add.image(400,550, "pedra").setScale(0.4);
    this.add.image(400,525, "logo").setScale(0.5); //adiciona o logo na tela. O setSacle realiza alterações no tamanho da imagem

    tartarugaMouse = this.add.image(400, 300, "tartaruga").setFlip(true,false); //adiciona o valor a variável tartaruga 
}

function update(){ /*define a lógica de atualização em tempo real do jogo. Depois de executar as duas primieras funções ela 
será chamada em um loop constante*/ 
    
    tartarugaMouse.x = this.input.x;
    tartarugaMouse.y = this.input.y;
}