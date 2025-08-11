document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("mobile-menu");
  const closeBtn = document.querySelector("#mobile-menu .close-btn");

  if (burger && menu && closeBtn) {
    burger.addEventListener("click", () => menu.classList.add("is-open"));
    closeBtn.addEventListener("click", () => menu.classList.remove("is-open"));
  }

  const wrapper = document.querySelector(".categories-wrapper");
  const dots = document.querySelectorAll(".dot");
  const cardEl = document.querySelector(".category-card");
  const cardWidth = cardEl ? cardEl.offsetWidth + 25 : 0;

  if (wrapper && dots.length && cardWidth) {
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        wrapper.scrollTo({ left: i * cardWidth, behavior: "smooth" });
      });
    });

    wrapper.addEventListener("scroll", () => {
      const index = Math.round(wrapper.scrollLeft / cardWidth);
      dots.forEach((d, j) => d.classList.toggle("active", j === index));
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("is-open");
      dots.forEach((dot) => (dot.style.display = "none"));
    } else {
      dots.forEach((dot) => (dot.style.display = ""));
    }
  });

  const wrap = document.querySelector(".stories-wrapper");
  const card = document.querySelector(".stories__grid .story-card");

  if (wrap && card) {
    const step = card.offsetWidth + 40;
    wrap.addEventListener("scroll", () => {
      const i = Math.round(wrap.scrollLeft / step);
      wrap.dataset.index = i;
    });
  }

  const sliderProducts = document.querySelector('[data-slider="products"]');
  const prevProducts = document.querySelector(".best .ctrl.prev");
  const nextProducts = document.querySelector(".best .ctrl.next");

  if (sliderProducts && prevProducts && nextProducts) {
    nextProducts.addEventListener("click", () => {
      sliderProducts.scrollBy({
        left: sliderProducts.clientWidth,
        behavior: "smooth",
      });
    });
    prevProducts.addEventListener("click", () => {
      sliderProducts.scrollBy({
        left: -sliderProducts.clientWidth,
        behavior: "smooth",
      });
    });
  }

  const sliderReviews = document.querySelector('[data-slider="reviews"]');
  const prevReviews = document.querySelector(".reviews .ctrl.prev");
  const nextReviews = document.querySelector(".reviews .ctrl.next");

  if (sliderReviews && prevReviews && nextReviews) {
    nextReviews.addEventListener("click", () => {
      sliderReviews.scrollBy({
        left: sliderReviews.clientWidth,
        behavior: "smooth",
      });
    });
    prevReviews.addEventListener("click", () => {
      sliderReviews.scrollBy({
        left: -sliderReviews.clientWidth,
        behavior: "smooth",
      });
    });
  }

  const instaWrap = document.querySelector(".insta__wrapper");
  const instaCard = document.querySelector(".insta__grid .insta__card");

  if (instaWrap && instaCard) {
    const step = instaCard.offsetWidth + 40;
    instaWrap.addEventListener("scroll", () => {
      const i = Math.round(instaWrap.scrollLeft / step);
      instaWrap.dataset.index = i;
    });
  }
});
