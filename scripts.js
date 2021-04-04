const items = document.querySelector(".items");
const btnAll = document.querySelector(".all");
const btnPizza = document.querySelector(".pizza");
const btnPasta = document.querySelector(".pasta");
const btnChicken = document.querySelector(".chicken");
const inputbox = document.querySelector(".search-box");
const itemArr = document.getElementsByClassName("item");
const modal = document.querySelector(".modal");
const modelContent = document.querySelector(".modal-content");
const btnClose = document.querySelector(".close");
const all = [
  {
    id: "chicken",
    ten: "chicken-3",
    price: 25 + "$",
    img: "pic/chicken/download.jpeg",
  },
  {
    id: "chicken",
    ten: "chicken-2",
    price: 10 + "$",
    img: "pic/chicken/ck.jpeg",
  },
  {
    id: "chicken",
    ten: "chicken-3",
    price: 24 + "$",
    img: "pic/chicken/images.jpeg",
  },
  {
    id: "pasta",
    ten: "pasta-1",
    price: 30 + "$",
    img: "pic/pasta/pas.jpg",
  },
  {
    id: "pasta",
    ten: "pasta-2",
    price: 12 + "$",
    img: "pic/pasta/download.jpeg",
  },
  {
    id: "pasta",
    ten: "pasta-3",
    price: 23 + "$",
    img: "pic/pasta/pasta-la-gi-2.jpg",
  },
  {
    id: "pizza",
    ten: "pizza-1",
    price: 22 + "$",
    img: "pic/pizza/pi1.jpeg",
  },
  {
    id: "pizza",
    ten: "pizza-2",
    price: 22 + "$",
    img: "pic/pizza/pi2.jpeg",
  },
  {
    id: "pizza",
    ten: "pizza-3",
    price: 22 + "$",
    img: "pic/pizza/images.jpeg",
  },
];
function addItem(item) {
  return `<div class="item">
<div class="card-item">
<img src=${item.img} class="card-img">
<div class="card-info">
<p>${item.ten}</p>
<p>${item.price}</p>
</div>
</div>
</div>`;
}
all.forEach((item) => {
  items.insertAdjacentHTML("afterbegin", addItem(item));
  modalItems();
});
btnAll.addEventListener("click", function () {
  items.textContent = "";
  all.forEach((item) => {
    items.insertAdjacentHTML("afterbegin", addItem(item));
    modalItems();
  });
});
btnChicken.addEventListener("click", function () {
  items.textContent = "";
  const chickenfilter = all.filter((chick) => chick.id === "chicken");
  chickenfilter.forEach((item) => {
    items.insertAdjacentHTML("afterbegin", addItem(item));
    modalItems();
  });
});
btnPasta.addEventListener("click", function () {
  items.textContent = "";
  const pastafilter = all.filter((pas) => pas.id === "pasta");
  pastafilter.forEach((item) => {
    items.insertAdjacentHTML("afterbegin", addItem(item));
    modalItems();
  });
});
btnPizza.addEventListener("click", function () {
  items.textContent = "";
  const pizzafilter = all.filter((pi) => pi.id === "pizza");
  pizzafilter.forEach((item) => {
    items.insertAdjacentHTML("afterbegin", addItem(item));
    modalItems();
  });
});
inputbox.addEventListener("keyup", function () {
  items.textContent = "";
  let input = this.value.toLowerCase();
  const filterFood = all.filter((type) => type.id.startsWith(input));
  if (filterFood.length === 0) {
    items.insertAdjacentHTML(
      "afterbegin",
      `<h2 style="margin:auto;padding-top:100px">we don't have that , try again with something else</h2>`
    );
  } else {
    filterFood.forEach((item) => {
      items.insertAdjacentHTML("afterbegin", addItem(item));
      modalItems();
    });
  }
});
function modalItems() {
  let itemsArr = [...itemArr];
  itemsArr.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "block";
      const imgurl = this.querySelector("img").src;
      const imgUrl = imgurl.slice(21);
      modelContent.style.background = `url(${imgUrl})`;
      modelContent.style.backgroundRepeat = "no-repeat";
      modelContent.style.backgroundSize = "cover";
    });
  });
}
modalItems();
btnClose.addEventListener("click", function () {
  modal.style.display = "none";
});
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
