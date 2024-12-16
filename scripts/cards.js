const foods = [
  {
    id: 1,
    time: 30,
    name: "Паста Карбонара",
    composition:
      "Состав: спагетти, бекон, яйца, пармезан, черный перец, 220гр.",
    price: 450,
  },
  {
    id: 2,
    time: 60,
    name: "Борщ",
    composition:
      "Состав: свекла, капуста, картофель, морковь, говядина, сметана, 300гр.",
    price: 350,
  },
  {
    id: 3,
    time: 120,
    name: "Суши Филадельфия",
    composition: "Состав: рис, лосось, авокадо, крем-сыр, нори, 8 роллов.",
    price: 850,
  },
  {
    id: 4,
    time: 30,
    name: "Том Ям",
    composition:
      "Состав: креветки, кокосовое молоко, лимонная трава, грибы, лайм, 250гр.",
    price: 600,
  },
  {
    id: 5,
    time: 60,
    name: "Пицца Маргарита",
    composition:
      "Состав: тесто, томатный соус, моцарелла, базилик, оливковое масло, 300гр.",
    price: 400,
  },
  {
    id: 6,
    time: 120,
    name: "Чили кон карне",
    composition:
      "Состав: говядина, фасоль, помидоры, перец чили, специи, 350гр.",
    price: 500,
  },
  {
    id: 7,
    time: 30,
    name: "Курица Тика Масала",
    composition:
      "Состав: куриное филе, йогурт, специи, томатный соус, рис, 300гр.",
    price: 700,
  },
  {
    id: 8,
    time: 60,
    name: "Ризотто с грибами",
    composition:
      "Состав: рис арборио, грибы, бульон, пармезан, белое вино, 250гр.",
    price: 550,
  },
  {
    id: 9,
    time: 120,
    name: "Бифштекс с картофельным пюре",
    composition: "Состав: говядина, картофель, сливочное масло, зелень, 400гр.",
    price: 800,
  },
  {
    id: 10,
    time: 30,
    name: "Греческий салат",
    composition:
      "Состав: помидоры, огурцы, оливки, фета, оливковое масло, зелень, 200гр.",
    price: 300,
  },
  {
    id: 11,
    time: 30,
    name: "Лосось на гриле",
    composition: "Состав: филе лосося, лимон, зелень, оливковое масло, 250гр.",
    price: 900,
  },
  {
    id: 12,
    time: 60,
    name: "Кесадилья с курицей",
    composition:
      "Состав: тортилья, куриное филе, сыр, перец, гуакамоле, 300гр.",
    price: 550,
  },
  {
    id: 13,
    time: 120,
    name: "Фахитас с говядиной",
    composition: "Состав: говядина, тортильи, перец, лук, гуакамоле, 400гр.",
    price: 750,
  },
  {
    id: 14,
    time: 30,
    name: "Куриный салат с авокадо",
    composition:
      "Состав: куриное филе, авокадо, салатные листья, помидоры, 250гр.",
    price: 450,
  },
  {
    id: 15,
    time: 60,
    name: "Пельмени с мясом",
    composition: "Состав: тесто, мясной фарш, лук, специи, 300гр.",
    price: 400,
  },
  {
    id: 16,
    time: 120,
    name: "Капрезе с моцареллой",
    composition:
      "Состав: моцарелла, помидоры, базилик, бальзамический соус, 200гр.",
    price: 500,
  },
  {
    id: 17,
    time: 30,
    name: "Креветки в чесночном соусе",
    composition: "Состав: креветки, чеснок, оливковое масло, зелень, 200гр.",
    price: 700,
  },
  {
    id: 18,
    time: 60,
    name: "Тортилья с овощами",
    composition: "Состав: яйца, картофель, лук, перец, зелень, 300гр.",
    price: 350,
  },
  {
    id: 19,
    time: 120,
    name: "Лазанья с мясом",
    composition: "Состав: паста, мясной фарш, томатный соус, сыр, 400гр.",
    price: 800,
  },
  {
    id: 20,
    time: 30,
    name: "Салат Цезарь с курицей",
    composition:
      "Состав: куриное филе, романо, пармезан, гренки, соус Цезарь, 250гр.",
    price: 600,
  },
];

function rerenderFoods(foods) {
  document.querySelector(".food").innerHTML = "";
  for (const food of foods) {
    itemMaker(food);
  }
}

function itemMaker(food) {
  const newItem = document.createElement("div");
  newItem.classList.add("food__item");
  newItem.innerHTML = `<div class="food__photo">
                <img src="../images/food${food.id}.jpg" alt="Фото еды" />
  </div>
  <div class="food__info">
      <div class="food__title">
              <div class="food__name">${food.name}</div>
              <div class="food__time">${food.time} минут</div>
          </div>
          <div class="food__description">
              ${food.composition}
          </div>
      <div class="food__price">${food.price} ₽</div>`;
  document.querySelector(".food").appendChild(newItem);
}

function searchFood() {
  const search = document.querySelector(".search").value;
  const newItems = foods.filter(
    (food) => food.name.includes(search) || food.composition.includes(search)
  );
  document.querySelector(".search").value = "";
  rerenderFoods(newItems);
}

function sortFood() {
  const newItems = [...foods];
  const typeOfSort = document.querySelector(".sortBy:checked").value;
  if (typeOfSort == "time") {
    newItems.sort((food1, food2) => food1.time - food2.time);
  } else if (typeOfSort == "price") {
    newItems.sort((food1, food2) => food1.price - food2.price);
  }
  rerenderFoods(newItems);
}

(() => {
  rerenderFoods(foods);
})();

document.querySelector(".search__button").addEventListener("click", searchFood);

document.querySelectorAll(".sortBy").forEach((radio) => {
  radio.addEventListener("change", sortFood);
});
