const inputName = document.getElementById('name');
const inputEmail = document.querySelector('#email');
const form = document.querySelector('form');
const btnMenosLanchao = document.querySelector('.btn-menos-lanchao');
const qtdLanchao = document.querySelector('#qtd-lanchao');
const btnMaisLanchao = document.querySelector('.btn-mais-lanchao');
const btnMenosLanche = document.querySelector('.btn-menos-lanche');
const qtdLanche = document.querySelector('#qtd-lanche');
const btnMaisLanche = document.querySelector('.btn-mais-lanche');
const btnMenosLanchinho = document.querySelector('.btn-menos-lanchinho');
const qtdLanchinho = document.querySelector('#qtd-lanchinho');
const btnMaisLanchinho = document.querySelector('.btn-mais-lanchinho');
const btnMenosOvo = document.querySelector('.btn-menos-ovo');
const qtdOvo = document.querySelector('#qtd-ovo');
const btnMaisOvo = document.querySelector('.btn-mais-ovo');
const btnMenosAbacaxi = document.querySelector('.btn-menos-abacaxi');
const qtdAbacaxi = document.querySelector('#qtd-abacaxi');
const btnMaisAbacaxi = document.querySelector('.btn-mais-abacaxi');

const atualizarQuantidade = (btnMenos, btnMais, qtdElementos) => {
    btnMenos.addEventListener('click', () => {
        const quantidade = parseInt(qtdElementos.innerText);
        if(quantidade > 0) {
            qtdElementos.innerText = quantidade - 1
        }
    })

    btnMais.addEventListener('click', () => {
        qtdElementos.innerText = parseInt(qtdElementos.innerText) + 1;
    })
};

atualizarQuantidade(btnMenosLanchao, btnMaisLanchao, qtdLanchao);
atualizarQuantidade(btnMenosLanche, btnMaisLanche, qtdLanche);
atualizarQuantidade(btnMenosLanchinho, btnMaisLanchinho, qtdLanchinho);
atualizarQuantidade(btnMenosOvo, btnMaisOvo, qtdOvo);
atualizarQuantidade(btnMenosAbacaxi, btnMaisAbacaxi, qtdAbacaxi);


form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    let orderInfo = {};

    orderInfo.name = inputName.value;
    orderInfo.email = inputEmail.value;

    console.log(orderInfo);
})

