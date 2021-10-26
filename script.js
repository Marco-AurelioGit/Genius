let order = [];
let clickedOrder = []
let score = 0

//0 - Verde
//1 - Vermelho
//2 - Amarelo
//3 - Azul

const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const red = document.querySelector('.red')
const green = document.querySelector('.green')

//Função para criação de ordem aleatória das cores
let sorteio = () => {
    let ordemCor = Math.floor(Math.random() * 4);
    order[order.length] = ordemCor;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 400);
    setTimeout(() => {
        element.classList.remove('selected');
    },number + 400)
}

//Checa se os botões clicados são os mesmos que ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length === order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//FUnção para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
}

//Função que retorna a cor
let createColorElement = (color) => {
    if (color === 0) {
        return green;
    }
    else if (color === 1) {
        return red;
    }
    else if (color === 2) {
        return yellow
    }
    else if (color === 3) {
        return blue;
    }
}

//Função para próximo nivel do jogo
let nextLevel = () => {
    score++;
    sorteio();
}

//Função em caso de perda do jogo
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!')
    score = 0;

    nextLevel();

}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)


playGame();