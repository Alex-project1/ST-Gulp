$(function () {
  //******* select language */
  const optionMenu = document.querySelector('.select-menu');
  const selectnBtn = optionMenu.querySelector('.select-btn');
  const options = optionMenu.querySelectorAll('.option');
  const sBtn_text = optionMenu.querySelector('.sBtn-text');
  const overlay = document.querySelector('.overlay');

  selectnBtn.addEventListener('click', () => {
    optionMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    optionMenu.classList.remove('active');
  });
  options.forEach((option) => {
    option.addEventListener('click', () => {
      let selectedOption = option.querySelector('.option-text').innerHTML;
      sBtn_text.innerHTML = selectedOption;
      optionMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
  //*******select language */
  //*****multiSelect *************************************** */
  const multiSelect = () => {
    const elements = document.querySelectorAll('.multi-select');
    elements.forEach((el) => {
      // console.log(el);
      const choices = new Choices(el, {
        noResultsText: 'Нічого не знайдено...',
      });
      let ariaLabel = el.getAttribute('aria-label');
      el.closest('.choices').setAttribute('aria-label', ariaLabel);
    });
  };
  multiSelect();
  //***top-select-revers */
  // const reversBtn = document.querySelector('.top-select-change');
  // const orderFormBox = document.querySelector('.order__form-box');
  // reversBtn.addEventListener('click', () => {
  //   orderFormBox.classList.toggle('reverse');
  // });

  //***top-select-revers */
  //***top checkbox */
  const sideFunction = () => {
    const sideBox = document.querySelectorAll('.side-box');
    const oneSide = document.querySelector('.one-side');
    const bothSides = document.querySelector('.both-sides');
    // console.log(oneSide, bothSides);
    sideBox.forEach((el) => {
      el.addEventListener('click', () => {
        oneSide.classList.remove('checked');
        bothSides.classList.remove('checked');
        el.querySelector('.side').classList.add('checked');
      });
    });
  };
  sideFunction();

  //***top checkbox */
  //*****multiSelect  */**************************************** */

  //****footer chexbox */
  const footerCheckbox = document.querySelector('.footer__checkbox-inner');
  const checkBox = document.querySelector('.footer__checkbox');
  footerCheckbox.addEventListener('click', () => {
    checkBox.classList.toggle('checked');
  });
  //****footer chexbox */
  //***** dataPick*/
  new AirDatepicker('#datepicker', {
    navTitles: {
      days: '<strong>yyyy</strong> <i>MMMM</i>',
      months: 'Select month of <strong>yyyy</strong>',
    },
  });
  /** Datapick */

  /**************swiper */
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: !1,
    },
    breakpoints: {
      // mobile + tablet - 320-990
      320: {
        slidesPerView: 1,
        effect: 'swiper',
        centeredSlides: false,
      },

      // desktop >= 991
      991: {
        slidesPerView: 3,
      },
    },
  });
  /**************swiper */

  //** passengers **************************************************************************/
  const pass = document.querySelector('.pass');
  const passDrop = document.querySelector('.passengers__dropdown');

  const minorsBlock = document.querySelector('.minors');

  const adultMinus = document.querySelector('.adults-minus');
  const adultPlus = document.querySelector('.adults-plus');
  const minorMinus = document.querySelector('.minors-minus');
  const minorPlus = document.querySelector('.minors-plus');

  const textAdults = document.querySelector('.text-adults');
  const textMinors = document.querySelector('.text-minors');
  const passAdults = document.querySelector('.pass-adults');
  const passMinors = document.querySelector('.pass-minors');
  const passAdultsText = document.querySelector('.pass-adults--text');
  const passMinorsText = document.querySelector('.pass-minors--text');
  let counterAdults = 1;
  let counterMinors = 0;

  //**minors */
  minorPlus.addEventListener('click', () => {
    counterMinors++;

    if (counterMinors == 1) {
      passMinorsText.innerHTML = 'Дитячий';
    } else if (counterMinors >= 2) {
      passMinorsText.innerHTML = 'Дитячих';
    }
    passMinors.innerHTML = counterMinors + ' ';
    textMinors.innerHTML = counterMinors;
    minorsBlock.classList.add('active');
  });
  minorMinus.addEventListener('click', () => {
    counterMinors--;
    if (counterMinors <= 0) {
      counterMinors = 0;
      minorsBlock.classList.remove('active');
    } else if (counterMinors == 1) {
      passMinorsText.innerHTML = 'Дитячий';
    } else if (counterMinors >= 2) {
      passMinorsText.innerHTML = 'Дитячих';
    }
    passMinors.innerHTML = counterMinors + ' ';
    textMinors.innerHTML = counterMinors;
  });
  //**adult */
  adultPlus.addEventListener('click', () => {
    counterAdults++;
    if (counterAdults == 1) {
      passAdultsText.innerHTML = 'Дорослий';
    } else if (counterAdults >= 2) {
      passAdultsText.innerHTML = 'Дорослиx';
    }
    textAdults.innerHTML = counterAdults;
    passAdults.innerHTML = counterAdults + ' ';
  });
  adultMinus.addEventListener('click', () => {
    counterAdults--;
    if (counterAdults <= 0) {
      counterAdults = 0;
      passAdultsText.innerHTML = 'Дорослиx';
    } else if (counterAdults == 1) {
      passAdultsText.innerHTML = 'Дорослий';
    } else if (counterAdults >= 2) {
      passAdultsText.innerHTML = 'Дорослиx';
    }
    textAdults.innerHTML = counterAdults;
    passAdults.innerHTML = counterAdults + ' ';
  });

  const dropActive = function () {
    passDrop.classList.toggle('active');
    overlay.classList.toggle('active');
  };
  pass.addEventListener('click', dropActive);
  overlay.addEventListener('click', () => {
    passDrop.classList.remove('active');
    overlay.classList.remove('active');
  });
  //** passengers **************************************************************************/

  //**info section *************************************************************************/
  const infoBtn = document.querySelectorAll('.info__item-btn');
  const infoText = document.querySelectorAll('.info__item-body');
  const activeBtn = document.querySelector('.active-btn');

  infoBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      infoBtn.forEach((btn) => {
        btn.classList.remove('active-btn');
      });

      infoText.forEach((text) => {
        text.classList.remove('active-text');
      });
      btn.classList.toggle('active-btn');
      btn.nextElementSibling.classList.toggle('active-text');
    });
  });
  //**info section *************************************************************************/
  /**mobile menu ***************************************************** */
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.header__menu-mobile');
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active__menu');
  });
  /**mobile menu ***************************************************** */
});
