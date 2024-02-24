const btnVoltarAoTopo = document.getElementById("voltar-ao-topo")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && window.innerWidth > 550	) {
    btnVoltarAoTopo.style.display = "block"
  } else {
    btnVoltarAoTopo.style.display = "none"
  }
})

btnVoltarAoTopo.addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: "smooth" })
})
