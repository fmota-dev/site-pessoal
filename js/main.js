// Limpar URL

window.onload = function () {
  if (window.location.search.length > 0) {
    var novaURL = window.location.href.split("?")[0]
    window.history.replaceState({}, document.title, novaURL)
  }
}
