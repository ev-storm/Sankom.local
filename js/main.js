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

// const cSwiper = new Swiper(".cards-swiper", {
//   slidesPerView: 8,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
// });

// const cSwiper = new Swiper(".cards-swiper", {
//   slidesPerView: 8,
//   spaceBetween: 10,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//     },
//   },
// });
//////////////////////////////
const cSwiper = new Swiper(".cards-swiper", {
  slidesPerView: 7, // Значение по умолчанию
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

function updateSlidesPerView() {
  if (window.innerWidth <= 600) {
    cSwiper.params.slidesPerView = 2;
  } else {
    cSwiper.params.slidesPerView = 7;
  }
  cSwiper.update();
}

updateSlidesPerView();
window.addEventListener("resize", updateSlidesPerView);

//////////////////////////////////////

const sSwiper = new Swiper(".sertif-swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

function supdateSlidesPerView() {
  if (window.innerWidth <= 600) {
    sSwiper.params.slidesPerView = 2;
  } else {
    sSwiper.params.slidesPerView = 4;
  }
  sSwiper.update();
}

supdateSlidesPerView();
window.addEventListener("resize", supdateSlidesPerView);

///////////////////////////////////

const pSwiper = new Swiper(".part-swiper", {
  slidesPerView: 5,
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
function pupdateSlidesPerView() {
  if (window.innerWidth <= 600) {
    pSwiper.params.slidesPerView = 2;
  } else {
    pSwiper.params.slidesPerView = 5;
  }
  pSwiper.update();
}

pupdateSlidesPerView();
window.addEventListener("resize", pupdateSlidesPerView);

/////////////////////////
const hiddenElements = document.querySelectorAll(".hiden-left");

function checkVisibility() {
  hiddenElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible"); // Снимаем класс, если не виден
    }
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility); // Проверка при изменении размера окна
checkVisibility(); // Начальная проверка при загрузке страницы

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//       observer.unobserve(entry.target);
//     }
//   });
// }

// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(handleIntersect, options);

// const hiddenElements = document.querySelectorAll(".hiden-left");
// hiddenElements.forEach((element) => {
//   observer.observe(element);
// });

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

//////////////////////////////////////

const form = document.querySelector(".call-back-form");

const telSelector = form.querySelector(".input-tel");
const inputmask = new Inputmask("+7 (999) 999-99-99");
inputmask.mask(telSelector);

const validation = new JustValidate(".call-back-form");

validation
  .addField(".input-name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите более 3 символов",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Введите менее 30 символов",
    },
    {
      rule: "required",
      value: true,
      errorMessage: "Введите имя",
    },
  ])
  .addField(".input-tel", [
    {
      rule: "required",
      value: true,
      errorMessage: "Телефон обязателен",
    },
    {
      rule: "function",
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Введите корректный телефон",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");

          const banСheck = document.querySelector(".ban-check");

          banСheck.classList.add("active");

          setTimeout(() => {
            banСheck.classList.remove("active");
          }, 4000);
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
  });

////////////////////////////////////
/////////////////////////////////////

const formPopup = document.querySelector(".form-popup");
const telSelectorPopup = formPopup.querySelector(".input-tel-popup");
const inputmaskPopup = new Inputmask("+7 (999) 999-99-99");
inputmaskPopup.mask(telSelectorPopup);

const validationPopup = new JustValidate(".form-popup");

validationPopup
  .addField(".input-name-popup", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите более 3 символов",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Введите менее 30 символов",
    },
    {
      rule: "required",
      value: true,
      errorMessage: "Введите имя",
    },
  ])
  .addField(".input-tel-popup", [
    {
      rule: "required",
      value: true,
      errorMessage: "Телефон обязателен",
    },
    {
      rule: "function",
      validator: function () {
        const phonePopup = telSelectorPopup.inputmask.unmaskedvalue();
        return phonePopup.length === 10;
      },
      errorMessage: "Введите корректный телефон",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");

          const banСheck = document.querySelector(".ban-check");

          banСheck.classList.add("active");

          setTimeout(() => {
            banСheck.classList.remove("active");
          }, 4000);
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
  });

////////////////////////////////////

document
  .querySelector(".btn-modal-call")
  .addEventListener("click", function () {
    document.querySelector(".modal-con").classList.remove("hide");
    document.querySelector(".modal-con").classList.add("show");
  });

document
  .querySelector(".modal-con")
  .addEventListener("click", function (event) {
    if (!event.target.closest(".modal")) {
      document.querySelector(".modal-con").classList.remove("show");
      document.querySelector(".modal-con").classList.add("hide");
    }
  });

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal-con").classList.remove("show");
  document.querySelector(".modal-con").classList.add("hide");
});

// document
//   .querySelector(".btn-modal-popup")
//   .addEventListener("click", function () {
//     document.querySelector(".modal-con").classList.remove("show");
//     document.querySelector(".modal-con").classList.add("hide");
//   });

document
  .querySelector(".btn-modal-popup")
  .addEventListener("click", function () {
    const inputs = document.querySelectorAll(".input-name-popup");
    let allFilled = true;

    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      document.querySelector(".modal-con").classList.remove("show");
      document.querySelector(".modal-con").classList.add("hide");
    }
  });

////////////////////////////////////////////////////////

const footerForm = document.querySelector(".footer-form");

const validationFooter = new JustValidate(".footer-form");

validationFooter.onSuccess((event) => {
  console.log("Validation passes and form submitted", event);

  let formData = new FormData(event.target);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Отправлено");

        const banСheck = document.querySelector(".ban-check");

        banСheck.classList.add("active");

        setTimeout(() => {
          banСheck.classList.remove("active");
        }, 4000);
      }
    }
  };

  xhr.open("POST", "mail.php", true);
  xhr.send(formData);

  event.target.reset();
});
