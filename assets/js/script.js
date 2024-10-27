function menuMobile() {
	const menuButton = document.querySelector('[data-menu="button"]');
	const menuList = document.querySelector('[data-menu="list"]');
	const eventos = ["click", "touchstart"];

	if (menuButton && menuList) {
		function toggleMenu(event) {
			event.preventDefault();
			if (menuList.classList.contains("active")) {
				menuList.classList.remove("active");
				menuButton.classList.remove("active", "fixed");
			} else {
				menuList.classList.add("active");
				menuButton.classList.add("active", "fixed");
				outsideClick(menuList, eventos, () => {
					menuList.classList.remove("active");
					menuButton.classList.remove("active", "fixed");
				});
			}
		}

		function closeMenu() {
			menuList.classList.remove("active");
			menuButton.classList.remove("active", "fixed");
		}

		for (const evento of eventos) {
			menuButton.addEventListener(evento, toggleMenu);
		}

		const menuLinks = menuList.querySelectorAll("a");
		for (const link of menuLinks) {
			link.addEventListener("click", closeMenu);
		}
	}
}

function outsideClick(element, events, callback) {
	const html = document.documentElement;
	const outside = "data-outside";

	if (!element.hasAttribute(outside)) {
		for (const userEvent of events) {
			setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
		}
		element.setAttribute(outside, "");
	}

	function handleOutsideClick(event) {
		if (!element.contains(event.target)) {
			element.removeAttribute(outside);
			for (const userEvent of events) {
				html.removeEventListener(userEvent, handleOutsideClick);
			}
			callback();
		}
	}
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
