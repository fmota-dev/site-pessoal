function menuMobile() {
	const btnMenu = document.getElementById("btn-menu");
	const menuMobile = document.getElementById("menu-mobile");
	const overlay = document.getElementById("overlay-menu");
	btnMenu.addEventListener("click", () => {
		menuMobile.classList.add("abrir-menu");
	});

	menuMobile.addEventListener("click", () => {
		menuMobile.classList.remove("abrir-menu");
	});

	overlay.addEventListener("click", () => {
		menuMobile.classList.remove("abrir-menu");
	});
}

function addScrollToTopButton() {
	const btnVoltarAoTopo = document.getElementById("voltar-ao-topo");

	window.addEventListener("scroll", () => {
		if (window.scrollY > 300 && window.innerWidth > 550) {
			btnVoltarAoTopo.style.display = "block";
		} else {
			btnVoltarAoTopo.style.display = "none";
		}
	});

	btnVoltarAoTopo.addEventListener("click", (event) => {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}

function enviarMensagem() {
	const mensagemUsuario = document.getElementById("mensagem").value;
	if (mensagemUsuario.trim() !== "") {
		const mensagemCodificada = encodeURIComponent(mensagemUsuario);
		const linkWhatsapp = `https://wa.me/5584988139069?text=${mensagemCodificada}`;
		window.open(linkWhatsapp, "_blank");
	}
}

function limparURL() {
	window.onload = () => {
		if (window.location.search.length > 0) {
			const novaURL = window.location.href.split("?")[0];
			window.history.replaceState({}, document.title, novaURL);
		}
	};
}

function initAnimationScroll() {
	const sections = document.querySelectorAll(".js-scroll");

	if (sections.length) {
		const windowMetade =
			window.innerWidth > 550
				? window.innerHeight * 0.6
				: window.innerHeight * 0.7;
		function animaScroll() {
			for (const section of sections) {
				const sectionTop = section.getBoundingClientRect().top;
				const isSectionVisible = sectionTop - windowMetade < 0;
				if (isSectionVisible) {
					section.classList.add("ativo");
				} else {
					section.classList.remove("ativo");
				}
			}
		}
		animaScroll();
		window.addEventListener("scroll", animaScroll);
	}
}

const botaoEnviar = document.getElementById("enviar-mensagem");
botaoEnviar.addEventListener("click", enviarMensagem);

menuMobile();
addScrollToTopButton();
limparURL();
initAnimationScroll();
