const inputName = document.getElementById("name");
const inputEmail = document.querySelector("#email");
const form = document.querySelector("form");
const btnMenosLanchao = document.querySelector(".btn-menos-lanchao");
const qtdLanchao = document.querySelector("#qtd-lanchao");
const btnMaisLanchao = document.querySelector(".btn-mais-lanchao");
const btnMenosLanche = document.querySelector(".btn-menos-lanche");
const qtdLanche = document.querySelector("#qtd-lanche");
const btnMaisLanche = document.querySelector(".btn-mais-lanche");
const btnMenosLanchinho = document.querySelector(".btn-menos-lanchinho");
const qtdLanchinho = document.querySelector("#qtd-lanchinho");
const btnMaisLanchinho = document.querySelector(".btn-mais-lanchinho");
const btnMenosOvo = document.querySelector(".btn-menos-ovo");
const qtdOvo = document.querySelector("#qtd-ovo");
const btnMaisOvo = document.querySelector(".btn-mais-ovo");
const btnMenosAbacaxi = document.querySelector(".btn-menos-abacaxi");
const qtdAbacaxi = document.querySelector("#qtd-abacaxi");
const btnMaisAbacaxi = document.querySelector(".btn-mais-abacaxi");
const batataFrita = document.getElementById("sim");
const comentario = document.querySelector("textarea");
const listaNotaFiscal = document.getElementById("order-list");
const nota = document.querySelector(".ticket");

const atualizarQuantidade = (btnMenos, btnMais, qtdElementos) => {
  btnMenos.addEventListener("click", () => {
    const quantidade = parseInt(qtdElementos.innerText);
    if (quantidade > 0) {
      qtdElementos.innerText = quantidade - 1;
    }
  });

  btnMais.addEventListener("click", () => {
    qtdElementos.innerText = parseInt(qtdElementos.innerText) + 1;
  });
};

atualizarQuantidade(btnMenosLanchao, btnMaisLanchao, qtdLanchao);
atualizarQuantidade(btnMenosLanche, btnMaisLanche, qtdLanche);
atualizarQuantidade(btnMenosLanchinho, btnMaisLanchinho, qtdLanchinho);
atualizarQuantidade(btnMenosOvo, btnMaisOvo, qtdOvo);
atualizarQuantidade(btnMenosAbacaxi, btnMaisAbacaxi, qtdAbacaxi);

const criaNotaFiscal = () => {
  let orderInfo = {};

  orderInfo.name = inputName.value;
  orderInfo.email = inputEmail.value;

  if (parseInt(qtdLanchao.innerText) > 0)
    orderInfo.Lanchao = qtdLanchao.innerText;
  if (parseInt(qtdLanche.innerText) > 0) orderInfo.Lanche = qtdLanche.innerText;
  if (parseInt(qtdLanchinho.innerText) > 0)
    orderInfo.Lanchinho = qtdLanchinho.innerText;
  if (parseInt(qtdOvo.innerText) > 0) orderInfo.Ovo = qtdOvo.innerText;
  if (parseInt(qtdAbacaxi.innerText) > 0)
    orderInfo.Abacaxi = qtdAbacaxi.innerText;

  const molhos = document.querySelectorAll('input[name="molho"]:checked');

  if (molhos.length > 0) orderInfo.Molhos = molhos.length;

  if (batataFrita.checked === true) orderInfo.Batata = "Sim";

  if (comentario.value !== "") orderInfo.Comentario = comentario.value;

  const itemsNotaFiscal = Object.entries(orderInfo);

  let sum = 0;

  itemsNotaFiscal.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${item[0]}: ${item[1]}`;
    listaNotaFiscal.appendChild(newLi);
    if (item[0] === "Lanchao") sum += parseInt(item[1]) * 20;
    if (item[0] === "Lanche") sum += parseInt(item[1]) * 15;
    if (item[0] === "Lanchinho") sum += parseInt(item[1]) * 10;
    if (item[0] === "Ovo") sum += parseInt(item[1]) * 1.5;
    if (item[0] === "Abacaxi") sum += parseInt(item[1]);
    if (item[0] === "Molhos") sum += molhos.length * 2;
    if (item[0] === "Batata") sum += 2;
  });

  nota.style.display = "block";
  console.log(itemsNotaFiscal);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  criaNotaFiscal();
});
