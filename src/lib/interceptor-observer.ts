const navigation = document.getElementById("navigation")
const sections = [...document.querySelectorAll("section")]

const spyItem = (entries: IntersectionObserverEntry[]) => {
	entries.forEach((entry) => {
		const { id } = entry.target
		if (navigation === null) return
		const spy = navigation.querySelector(`[href="#${id}"`)

		if (!spy) return

		spy.classList.remove("active")

		if (!entry.isIntersecting) return

		spy.classList.add("active")
	})
}

const observer = new IntersectionObserver(spyItem, {
	rootMargin: "-10% 0% -90% 0%",
	root: document,
})

sections.forEach((section) => observer.observe(section))
