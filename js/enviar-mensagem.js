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
