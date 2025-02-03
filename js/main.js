const tSwiper = new Swiper(".title-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const cSwiper = new Swiper(".cards-swiper", {
  slidesPerView: 8,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const sSwiper = new Swiper(".sertif-swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const pSwiper = new Swiper(".part-swiper", {
  slidesPerView: 5,
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};
const observer = new IntersectionObserver(handleIntersect, options);

const hiddenElements = document.querySelectorAll(".hiden-left");
hiddenElements.forEach((element) => {
  observer.observe(element);
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".serti-view-btn").forEach((image) => {
  image.addEventListener("click", function () {
    modal.classList.remove("hide");
    modal.classList.add("show");
    modalImg.src = this.src;
  });
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
    modal.classList.add("hide");
  }
});
