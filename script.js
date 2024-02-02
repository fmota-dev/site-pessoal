// Menu Mobile

let btnMenu = document.getElementById("btn-menu")
let menuMobile = document.getElementById("menu-mobile")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu")
})

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu")
})

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu")
})

// Botão voltar ao topo

const btnVoltarAoTopo = document.getElementById("voltar-ao-topo")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnVoltarAoTopo.style.display = "block"
  } else {
    btnVoltarAoTopo.style.display = "none"
  }
})

btnVoltarAoTopo.addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: "smooth" })
})

// Enviar Mensagem

function enviarMensagem() {
  const mensagemUsuario = document.getElementById("mensagem").value
  if (mensagemUsuario.trim() != "") {
    const mensagemCodificada = encodeURIComponent(mensagemUsuario)
    const linkWhatsapp =
      "https://wa.me/5584988139069?text=" + mensagemCodificada
    window.open(linkWhatsapp, "_blank")
  }
}

const botaoEnviar = document.getElementById("enviar-mensagem")
botaoEnviar.addEventListener("click", enviarMensagem)
