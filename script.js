// Menu Mobile

let btnMenu = document.getElementById("btn-menu");
let menuMobile = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
});

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

// Botão voltar ao topo

const btnVoltarAoTopo = document.getElementById("voltar-ao-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnVoltarAoTopo.style.display = "block";
  } else {
    btnVoltarAoTopo.style.display = "none";
  }
});

btnVoltarAoTopo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});