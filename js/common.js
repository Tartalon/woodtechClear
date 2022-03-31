document.addEventListener("DOMContentLoaded", () => {
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
});
