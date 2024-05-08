import AOS from "aos"

const aosInit = () => {
	AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 50 })
}

aosInit()

document.addEventListener("astro:after-swap", aosInit)
