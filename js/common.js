document.addEventListener("DOMContentLoaded", () => {
  $(".home-slider__heading").each(function () {
    let text = $(this).text().split(" ");
    let first = text.shift();
    $(this).html(`${first} <br/><span>${text.join(" ")}</span>`);
  });

  // Menu

  $(".menu-toggle").click(function () {
    toggleMenu();
  });

  $(document).click(function (e) {
    if ($(e.target).closest(".menu-container").length) return;
    closeMenu();
  });

  function toggleMenu() {
    $(".menu-toggle").toggleClass("menu-toggle_active");
    $(".top-menu").toggleClass("top-menu_active");
  }

  function closeMenu() {
    $(".menu-toggle").removeClass("menu-toggle_active");
    $(".top-menu").removeClass("top-menu_active");
  }

  // Swiper Sliders

  const homeSlider = new Swiper(".home-slider", {
    speed: 800,
    effect: "fade",
    centeredSlides: true,
    pagination: {
      el: ".home-slider__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        let indTotal = total >= 10 ? total : `0${total}`;
        let indCurrent = current >= 10 ? current : `0${current}`;
        return `<b>${indCurrent}</b><span></span> ${indTotal}`;
      },
    },
    scrollbar: {
      el: ".home-slider__scrollbar",
      draggable: true,
    },
    navigation: {
      prevEl: ".home-slider__prev",
      nextEl: ".home-slider__next",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    runCallbacksOnInit: true,
  });

  // Callback List Numbers

  $(".home-callback__list li").each(function () {
    $(this).html(
      $(this)
        .text()
        .replace(/([0-9.]+)/g, "<span>$1</span>")
    );
  });
});
