
/* */
function createFoodCard(food) {
  let foodCard = `<div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${food.imagem}" class="card-img-top" alt="${food.nome}">
            <div class="card-body">
                <h5 class="card-title">${food.nome}</h5>
                <p class="card-text">
                    ${food.descricao}
                </p>
            </div>
        </div>
    </div>`;
  return foodCard;
}

function addFoodsCard() {
  for (let food of foods) {
    addFoodCard(food);

  }
}

function addFoodCard(food) {
  let foodCard = createFoodCard(food);
  let cardDeck = document.getElementById("card-deck");
  cardDeck.insertAdjacentHTML("beforeend", foodCard);

}


document.getElementById("addbutton").onclick = (event) => {
  var fd = new FormData();
  fd.append('nome', document.getElementById('nome').value);
  fd.append('imagem', document.getElementById('imagem').value);
  fd.append('descricao', document.getElementById('descricao').value);
  fd.append('preco', document.getElementById('preco').value);

  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var item = JSON.parse(this.responseText);
    }


  }
  request.open("POST", '/api');
  request.send(fd);

}
