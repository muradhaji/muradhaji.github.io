const openMenu = () => {
  document.getElementById("mobile-menu").style.height = "100vh";
  document.getElementById("mobile-menu-inner").style.height =
    window.innerHeight + "px";
  document.getElementById("app").style.overflow = "hidden";
};

const closeMenu = () => {
  document.getElementById("mobile-menu").style.height = "0";
  document.getElementById("app").style.overflow = "auto";
};
