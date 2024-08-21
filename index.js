//хэдер

const radios = document.querySelectorAll(".header__navigation-radio");
const sections = document.querySelectorAll(".section");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    sections.forEach((section) => {
      section.classList.remove("section--active");
    });
    document
      .querySelector(`#${radio.id}-section`)
      .classList.add("section--active");
  });
});

//карточки товаров

const data = [
  {
    id: 1,
    img: "./images/milk.png",
    name: "Молоко 3,2 %",
    description: "от Вадима Рошки",
    price: 95,
    volume: "0,93 л",
  },
  {
    id: 2,
    img: "./images/bread.png",
    name: "Хлеб пшеничный",
    description: "от Дарьи и Марии",
    price: 95,
    volume: "930 г",
  },
  {
    id: 3,
    img: "./images/eggs.png",
    name: "Яйца куриные",
    description: "от Евгения Рошаль",
    price: 120,
    volume: "10 шт",
  },
  {
    id: 4,
    img: "./images/butter.png",
    name: "Масло сливочное 82 %",
    description: "от Вадима Рошки",
    price: 290,
    volume: "250 г",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

data.forEach((item) => {
  swiperWrapper.innerHTML += `
          <div class="swiper-slide">
      <div class="swiper-slide__first-block">
        <img src="${item.img}" alt="" class="swiper-slide__img" />
        <div class="swiper-slide__main">
          <div class="swiper-slide__name-container">
            <p class="swiper-slide__name">${item.name}</p>
            <p class="swiper-slide__description">${item.description}</p>
          </div>
        </div>
      </div>
       <div class="swiper-slide__description_price-cart">
            <p class="swiper-slide__price">
              ${item.price} &#8381; <span>/ ${item.volume}</span>
            </p>
            <button class="swiper-slide__cart-btn">
              <span>В корзину</span
              ><img
                src="./images/shopping-cart.svg"
                alt=""
                class="cart-btn-img"
              />
              <img
                src="./images/cart-swiper.svg"
                alt=""
                class="cart-btn-img-swiper"
              />
            </button>
          </div>
          <img class="swiper-slide__rating" src="./images/Union.svg" alt="" />
    </div>
        `;
});

//swiper

let swiper;

function initSwiper() {
  if (window.innerWidth <= 1024) {
    // Инициализация Swiper только если ширина экрана <= 1024px
    swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
    });
  } else if (swiper) {
    swiper.destroy(true, true);
    swiper = undefined;
  }
}

initSwiper();
window.addEventListener("resize", function () {
  initSwiper();
});
