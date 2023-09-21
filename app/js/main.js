$(function () {
  const logInWindow = document.querySelector(".log-in");
  const restorationLink = document.querySelector(".log-in__forgot");
  const restorationBtn = document.querySelector(".restoration__btn ");
  const restorationSuccessBtn = document.querySelector(
    ".restoration__succes-btn "
  );
  const registrationWindow = document.querySelector(".registration");
  const restorationWindow = document.querySelector(".restoration");
  const newPassWindow = document.querySelector(".new-pass ");
  const restorationSuccessWindow = document.querySelector(
    ".restoration__succes"
  );
  const overlayLog = document.querySelector(".overlay-log");

  const btnCloselogInWindow = document.querySelector(".log-in__close");
  const btnCloselogOutWindow = document.querySelector(".registration__close");

  const btnCloseSuccessWindow = document.querySelector(
    ".restoration__succes-close"
  );
  const btnClosenewPAssWindow = document.querySelector(".new-pass__close");
  const btnCloseRestorationWindow = document.querySelector(
    ".restoration__close"
  );

  const btnShowlogInWindow = document.querySelector(".personal");
  const registrationLink = document.querySelector(".registration-link");
  const enterFromReg = document.querySelector(".enterFromReg");

  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".header__menu-mobile");
  const optionMenu = document.querySelector(".select-menu");
  const selectnBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");

  const overlay = document.querySelector(".overlay");

  const pass = document.querySelector(".passengers__inner");
  const passDrop = document.querySelector(".passengers__dropdown");
  const minorsBlock = document.querySelector(".minors");
  const adultMinus = document.querySelector(".adults-minus");
  const adultPlus = document.querySelector(".adults-plus");
  const minorMinus = document.querySelector(".minors-minus");
  const minorPlus = document.querySelector(".minors-plus");
  const textAdults = document.querySelector(".text-adults");
  const textMinors = document.querySelector(".text-minors");
  const passAdults = document.querySelector(".pass-adults");
  const passMinors = document.querySelector(".pass-minors");
  const passAdultsText = document.querySelector(".pass-adults--text");
  const passMinorsText = document.querySelector(".pass-minors--text");

  const infoBtn = document.querySelectorAll(".info__item-btn");
  const infoText = document.querySelectorAll(".info__item-body");

  const sideBox = document.querySelectorAll(".side-box");
  const oneSide = document.querySelector(".one-side");
  const bothSides = document.querySelector(".both-sides");

  const calendarPlaceholder = document.querySelector("#datepicker");
  const calendarMinorPlaceholder = document.querySelector("#datepicker-minor");
  const language = document.querySelector(".sBtn-text ");
  let counterAdults = 1;
  let counterMinors = 0;
  /** Настройки каледаря начало */
  const ru = {
    days: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    months: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthsShort: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    today: "Текущий месяц",
    clear: "Очистить",
    dateFormat: "dd.MM.yyyy",
    timeFormat: "HH:mm",
    firstDay: 1,
  };
  const ukr = {
    days: [
      "Неділя",
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П’ятниця",
      "Субота",
    ],
    daysShort: ["Нед", "Пнд", "Вів", "Срд", "Чтв", "Птн", "Сбт"],
    daysMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    months: [
      "Січень",
      "Лютий",
      "Березень",
      "Квітень",
      "Травень",
      "Червень",
      "Липень",
      "Серпень",
      "Вересень",
      "Жовтень",
      "Листопад",
      "Грудень",
    ],
    monthsShort: [
      "Січ",
      "Лют",
      "Бер",
      "Кві",
      "Тра",
      "Чер",
      "Лип",
      "Сер",
      "Вер",
      "Жов",
      "Лис",
      "Гру",
    ],
    today: "Сьогодні",
    clear: "Очистити",
    dateFormat: "dd.MM.yyyy",
    timeFormat: "HH:mm",
    firstDay: 1,
  };
  const eng = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Current month",
    clear: "Clear",
    dateFormat: "MM/dd/yyyy",
    timeFormat: "hh:mm aa",
    firstDay: 0,
  };
  const ruNav = {
    days: "<strong>yyyy</strong> <i>MMMM</i>",
    months: "<strong>yyyy</strong>" + "   " + "<strong>г.</strong>",
  };
  const ukrNav = {
    days: "<strong>yyyy</strong> <i>MMMM</i>",
    months: "<strong>yyyy</strong>" + "   " + "<strong>р.</strong>",
  };
  const engNav = {
    days: "<strong>yyyy</strong> <i>MMMM</i>",
    months: "<strong>yyyy</strong>" + "   " + "<strong>y.</strong>",
  };

  let lang = ukr;
  const optionCalendar = {
    navTitles: {
      days: "<strong>yyyy</strong> <i>MMMM</i>",
      months: "<strong>yyyy</strong>" + "   " + "<strong>р.</strong>",
    },
    minDate: new Date(),
    buttons: ["today", "clear"],
    locale: lang,
    multipleDatesSeparator: " | ",
    range: false,
  };
  const datepickerMinor = {
    navTitles: {
      days: "<strong>yyyy</strong> <i>MMMM</i>",
      months: "<strong>yyyy</strong>" + "   " + "<strong>р.</strong>",
    },
    locale: lang,
    buttons: ["today", "clear"],
  };

  new AirDatepicker("#datepicker", optionCalendar);
  new AirDatepicker("#datepicker-minor", datepickerMinor);
  /** Настройки каледаря конец */

  /* один -два пассажира начало */
  const sideFunction = () => {
    // console.log(oneSide, bothSides);
    sideBox.forEach((el) => {
      el.addEventListener("click", () => {
        oneSide.classList.remove("checked");
        bothSides.classList.remove("checked");
        el.querySelector(".side").classList.add("checked");
        if (bothSides.classList.contains("checked")) {
          optionCalendar.range = true;
          new AirDatepicker("#datepicker", optionCalendar);
          if (language.classList.contains("ukr")) {
            calendarPlaceholder.placeholder = "дд.мм.рррр | дд.мм.рррр";
          } else if (language.classList.contains("ru")) {
            calendarPlaceholder.placeholder = "дд.мм.гггг | дд.мм.гггг";
          } else if (language.classList.contains("eng")) {
            calendarPlaceholder.placeholder = "dd.mm.yyyy | dd.mm.yyyy";
          }
          calendarPlaceholder.value = "";
        } else {
          optionCalendar.range = false;
          if (language.classList.contains("ukr")) {
            calendarPlaceholder.placeholder = "дд.мм.рррр";
          } else if (language.classList.contains("ru")) {
            calendarPlaceholder.placeholder = "дд.мм.гггг";
          } else if (language.classList.contains("eng")) {
            calendarPlaceholder.placeholder = "dd.mm.yyyy";
          }
          calendarPlaceholder.value = "";
        }
      });
    });
  };

  /* один -два пассажира конец */
  const multiSelect = () => {
    const elements = document.querySelectorAll(".multi-select");
    elements.forEach((el) => {
      // console.log(el);
      const choices = new Choices(el, {
        noResultsText: "Нічого не знайдено...",
      });
      let ariaLabel = el.getAttribute("aria-label");
      el.closest(".choices").setAttribute("aria-label", ariaLabel);
    });
  };
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".reviews__btn-next",
      prevEl: ".reviews__btn-prev",
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: !1,
    },
    breakpoints: {
      // mobile + tablet - 320-990
      320: {
        slidesPerView: 1,
        effect: "swiper",
        centeredSlides: false,
      },

      // desktop >= 991
      991: {
        slidesPerView: 3,
      },
    },
  });

  const dropActive = function () {
    passDrop.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  const closeModalWindow = function () {
    logInWindow.classList.add("hidden");
    registrationWindow.classList.add("hidden");
    restorationWindow.classList.add("hidden");
    restorationSuccessWindow.classList.add("hidden");
    newPassWindow.classList.add("hidden");
    overlayLog.classList.add("hidden");
  };

  const showlogInWindow = function () {
    logInWindow.classList.remove("hidden");
    overlayLog.classList.remove("hidden");
    registrationWindow.classList.add("hidden");
  };
  const showRegistrationWindow = function () {
    logInWindow.classList.add("hidden");
    registrationWindow.classList.remove("hidden");
  };
  const showRestorationLink = function () {
    logInWindow.classList.add("hidden");
    restorationWindow.classList.remove("hidden");
  };
  const showrestorationSuccessWindow = function () {
    restorationSuccessWindow.classList.remove("hidden");
    overlayLog.classList.remove("hidden");
    restorationWindow.classList.add("hidden");
  };
  const showNewPassWindowWindow = function () {
    restorationSuccessWindow.classList.add("hidden");
    overlayLog.classList.remove("hidden");
    newPassWindow.classList.remove("hidden");
  };

  selectnBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  /**функция Смена языка начало */
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const optionText = option.querySelector(".option-text");
      let selectedOption = optionText.innerHTML;
      sBtn_text.innerHTML = selectedOption;
      optionMenu.classList.remove("active");
      overlay.classList.remove("active");

      oneSide.classList.remove("checked");
      bothSides.classList.remove("checked");
      oneSide.classList.add("checked");
      optionCalendar.range = false;
      if (optionText.classList.contains("ukr")) {
        lang = ukr;
        optionCalendar.navTitles = ukrNav;
        calendarPlaceholder.placeholder = "дд.мм.рррр";
        optionCalendar.locale = lang;
        language.classList.remove("ru");
        language.classList.remove("eng");
        language.classList.add("ukr");

        datepickerMinor.navTitles = ukrNav;
        datepickerMinor.locale = lang;
        calendarMinorPlaceholder.placeholder = "дд.мм.рррр";
        calendarPlaceholder.value = "";
        calendarMinorPlaceholder.value = "";

        new AirDatepicker("#datepicker", optionCalendar);
        new AirDatepicker("#datepicker-minor", datepickerMinor);
      } else if (optionText.classList.contains("ru")) {
        lang = ru;
        optionCalendar.locale = lang;
        optionCalendar.navTitles = ruNav;
        calendarPlaceholder.placeholder = "дд.мм.гггг";

        language.classList.remove("eng");
        language.classList.remove("ukr");
        language.classList.add("ru");

        datepickerMinor.locale = lang;
        datepickerMinor.navTitles = ruNav;
        calendarMinorPlaceholder.placeholder = "дд.мм.гггг";
        calendarPlaceholder.value = "";
        calendarMinorPlaceholder.value = "";

        new AirDatepicker("#datepicker-minor", datepickerMinor);
        new AirDatepicker("#datepicker", optionCalendar);
      } else if (optionText.classList.contains("eng")) {
        lang = eng;
        optionCalendar.locale = lang;
        optionCalendar.navTitles = engNav;
        calendarPlaceholder.placeholder = "dd.mm.yyyy";

        language.classList.remove("ukr");
        language.classList.remove("ru");
        language.classList.add("eng");

        datepickerMinor.locale = lang;
        datepickerMinor.navTitles = engNav;
        calendarMinorPlaceholder.placeholder = "dd.mm.yyyy";
        calendarPlaceholder.value = "";
        calendarMinorPlaceholder.value = "";

        new AirDatepicker("#datepicker-minor", datepickerMinor);
        new AirDatepicker("#datepicker", optionCalendar);
      }
    });
  });
  /** функция Смена языка конец */
  minorPlus.addEventListener("click", () => {
    counterMinors++;
    minorMinus.classList.remove("dis");

    if (counterMinors == 1) {
      passMinorsText.innerHTML = "Дитячий";
    } else if (counterMinors >= 2) {
      passMinorsText.innerHTML = "Дитячих";
    }
    passMinors.innerHTML = counterMinors + " ";
    textMinors.innerHTML = counterMinors;
    minorsBlock.classList.add("active");
  });
  minorMinus.addEventListener("click", () => {
    counterMinors--;
    if (counterMinors <= 0) {
      counterMinors = 0;
      minorsBlock.classList.remove("active");
      minorMinus.classList.add("dis");
    } else if (counterMinors == 1) {
      passMinorsText.innerHTML = "Дитячий";
    } else if (counterMinors >= 2) {
      passMinorsText.innerHTML = "Дитячих";
    }
    passMinors.innerHTML = counterMinors + " ";
    textMinors.innerHTML = counterMinors;
  });
  adultPlus.addEventListener("click", () => {
    counterAdults++;
    adultMinus.classList.remove("dis");
    if (counterAdults == 1) {
      passAdultsText.innerHTML = "Дорослий";
    } else if (counterAdults >= 2) {
      passAdultsText.innerHTML = "Дорослиx";
    }
    textAdults.innerHTML = counterAdults;
    passAdults.innerHTML = counterAdults + " ";
  });
  adultMinus.addEventListener("click", () => {
    counterAdults--;
    if (counterAdults <= 1) {
      counterAdults = 1;
      passAdultsText.innerHTML = "Дорослий";
      adultMinus.classList.add("dis");
    } else if (counterAdults >= 2) {
      passAdultsText.innerHTML = "Дорослиx";
    }
    textAdults.innerHTML = counterAdults;
    passAdults.innerHTML = counterAdults + " ";
  });

  overlay.addEventListener("click", () => {
    passDrop.classList.remove("active");
    overlay.classList.remove("active");
  });

  infoBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      infoBtn.forEach((btn) => {
        btn.classList.remove("active-btn");
      });

      infoText.forEach((text) => {
        text.classList.remove("active-text");
      });
      if (btn.classList.contains("test")) {
        btn.classList.remove("active-btn");
        btn.classList.remove("test");
        btn.nextElementSibling.classList.remove("active-text");
      } else {
        infoBtn.forEach((btn) => {
          btn.classList.remove("test");
        });
        btn.classList.add("active-btn");
        btn.classList.add("test");
        btn.nextElementSibling.classList.add("active-text");
      }
    });
  });

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active__menu");
    overlay.classList.toggle("active");
  });

  btnShowlogInWindow.addEventListener("click", showlogInWindow);
  btnCloselogOutWindow.addEventListener("click", closeModalWindow);
  btnCloselogInWindow.addEventListener("click", closeModalWindow);
  btnClosenewPAssWindow.addEventListener("click", closeModalWindow);
  btnCloseRestorationWindow.addEventListener("click", closeModalWindow);
  btnCloseSuccessWindow.addEventListener("click", closeModalWindow);
  overlayLog.addEventListener("click", closeModalWindow);
  restorationLink.addEventListener("click", showRestorationLink);
  registrationLink.addEventListener("click", showRegistrationWindow);
  enterFromReg.addEventListener("click", showlogInWindow);
  restorationBtn.addEventListener("click", showrestorationSuccessWindow);
  restorationSuccessBtn.addEventListener("click", showNewPassWindowWindow);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !logInWindow.classList.contains("hidden")) {
      closeModalWindow();
    }
  });

  pass.addEventListener("click", dropActive);

  multiSelect();

  sideFunction();

  //***Дополнительный багаж начало */
  const additionalbaggageSelect = document.querySelector(
    ".additionalbaggage__select"
  );
  const additionalbaggageDropdown = document.querySelector(
    ".additionalbaggage__dropdown"
  );
  const additionalbaggageBtnMinus = document.querySelector(
    ".additionalbaggage__btn-minus"
  );
  const additionalbaggageBtnPlus = document.querySelector(
    ".additionalbaggage__btn-plus"
  );

  const additionalbaggageInfo = document.querySelector(
    ".additionalbaggage__info-price"
  );

  const quantity = document.querySelector(".quantity");
  const summ = document.querySelector(".summ");
  const totalKg = document.querySelector(".totalKg");

  let quantityCounter = 0;
  let summCounter = 0;

  const btnPlusFunc = () => {
    quantityCounter++;
    summCounter += 40;
    summ.innerHTML = summCounter + " " + "грн";
    totalKg.innerHTML = quantityCounter + " " + "кг";
    quantity.innerHTML = quantityCounter;
    additionalbaggageBtnMinus.classList.remove("dis");
    additionalbaggageInfo.innerHTML = ` 
    <span> + ${quantityCounter} додатковий кілограм: </span> + ${summCounter} грн
    `;
  };

  const btnMinusFunc = () => {
    if (quantityCounter > 1) {
      quantityCounter--;
      summCounter -= 40;
      summ.innerHTML = summCounter + " " + "грн";
      totalKg.innerHTML = quantityCounter + " " + "кг";
      quantity.innerHTML = quantityCounter;
    } else if (quantityCounter == 1) {
      quantityCounter = 0;
      summCounter = 0;

      summ.innerHTML = summCounter + " " + "грн";
      totalKg.innerHTML = quantityCounter + " " + "кг";
      quantity.innerHTML = quantityCounter;
      additionalbaggageInfo.innerHTML = `<span>від 40 грн</span>`;
      additionalbaggageBtnMinus.classList.add("dis");
    }
    additionalbaggageInfo.innerHTML = ` 
    <span> + ${quantityCounter} додатковий кілограм: </span> + ${summCounter} грн
    `;
  };
  additionalbaggageBtnPlus.addEventListener("click", btnPlusFunc);
  additionalbaggageBtnMinus.addEventListener("click", btnMinusFunc);
  additionalbaggageSelect.addEventListener("click", () => {
    additionalbaggageSelect.classList.toggle("active");
    additionalbaggageDropdown.classList.toggle("hidden");
    overlay.classList.toggle("active");
  });
  //***Дополнительный багаж конец */

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    optionMenu.classList.remove("active");
    menuBtn.classList.remove("active");
    mobileMenu.classList.remove("active__menu");
    additionalbaggageDropdown.classList.add("hidden");
    additionalbaggageSelect.classList.remove("active");
  });

  const width = document.querySelector(
    ".additionalbaggage__select"
  ).offsetWidth;
  document.querySelector(".additionalbaggage__dropdown").style.width =
    width + "px";

  // больше инфомрации в разделе покупки билета
  const tripBuySelect = document.querySelector(".trip__buy-select--btn");
  const tripBuyBody = document.querySelector(".trip__buy-body");
  const tripBuyBodyBtn = document.querySelector(".trip__buy-body--btn");

  tripBuySelect.addEventListener("click", () => {
    tripBuyBody.classList.toggle("trip__buy-hidden");
  });
  tripBuyBodyBtn.addEventListener("click", () => {
    tripBuyBody.classList.add("trip__buy-hidden");
  });

  // новый отзыв
  const newReviersLink = document.querySelector(".reviews__link");
  const newReviersModalWindow = document.querySelector(".new-reviews__modal");
  const newReviewsText = document.querySelector(".new-reviews__text");
  const newReviewsSendBtn = document.querySelector(".new-reviews__btn");
  const newReviewsSuccessWindow = document.querySelector(
    ".new-reviews__success"
  );

  // кнопки закрытия начало
  const newReviewsClose = document.querySelector(".new-reviews__close");
  const newReviewsSuccessClose = document.querySelector(
    ".new-reviews__success-close"
  );
  const newReviewsSuccesBtn = document.querySelector(
    ".new-reviews__succes-btn"
  );

  const allButtonClose = [
    newReviewsClose,
    newReviewsSuccessClose,
    newReviewsSuccesBtn,
    overlayLog,
  ];

  const closeReviews = () => {
    newReviersModalWindow.classList.add("hidden");
    newReviewsSuccessWindow.classList.add("hidden");
    overlayLog.classList.add("hidden");
  };

  allButtonClose.forEach((btn) => {
    btn.addEventListener("click", closeReviews);
  });
  // кнопки закрытия конец

  const newRevierUser = document.createElement("div");
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  newRevierUser.classList.add("swiper-slide");

  let reviewValue = newReviewsText.value;
  let fname = "Alexandr";

  newReviersLink.addEventListener("click", () => {
    overlayLog.classList.remove("hidden");
    newReviersModalWindow.classList.remove("hidden");
  });
  newReviewsSendBtn.addEventListener("click", () => {
    reviewValue = newReviewsText.value;
    if (reviewValue.length <= 10) return;
    newRevierUser.innerHTML = `
    <div class="swiper-slide">
    <div class="reviews__item">
      <div class="reviews__item-avatar">
        <img src="./images/Avatar.png" alt="photo user" />
      </div>
      <h4 class="reviews__item-title">${fname}</h4>
      <p class="reviews__item-text">
      ${reviewValue}
      </p>
    </div>
  </div>
    `;

    swiperWrapper.prepend(newRevierUser);

    newReviersModalWindow.classList.add("hidden");
    newReviewsSuccessWindow.classList.remove("hidden");
  });

  // страница личного кабинета

  const widthInput = document.querySelector(".testinput").offsetWidth;
  document.querySelector(".photo-label").style.maxWidth = widthInput + "px";

  let pattern = /((?:.(?!\(\d+\)))+.)(?:\(\d+\))?\..+/;
  document.getElementById("photo-user").onchange = function () {
    let photoName = document.querySelector(".photoname");
    photoName.classList.add("photo-add");
    photoName.textContent = this.files[0].name.match(pattern)[1];
  };

  const personalInfoBtnOn = document.querySelector(".personal__info-btn-on");
  const personalInfoBtnOff = document.querySelector(".personal__info-btn-off");
  const personalChangeBlock = document.querySelector(".personal__change");

  const showChangeBlock = function () {
    personalInfoBtnOn.classList.add("hidden");
    personalInfoBtnOff.classList.remove("hidden");
    personalChangeBlock.classList.remove("hidden");
    const widthInput = document.querySelector(".testinput").offsetWidth;
    document.querySelector(".photo-label").style.maxWidth = widthInput + "px";
  };
  const closeChangeBlock = function () {
    personalInfoBtnOn.classList.remove("hidden");
    personalInfoBtnOff.classList.add("hidden");
    personalChangeBlock.classList.add("hidden");
  };

  personalInfoBtnOn.addEventListener("click", showChangeBlock);
  personalInfoBtnOff.addEventListener("click", closeChangeBlock);
});
