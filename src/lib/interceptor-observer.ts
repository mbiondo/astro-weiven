const navigation = document.getElementById('navigation')
const sections = [...document.querySelectorAll('section')]

const handleObserver = (entries: IntersectionObserverEntry[]) => {
  if (navigation === null) return
  entries.forEach((entry) => {
    const { id } = entry.target
    if (!id) return

    const navItem = navigation.querySelector(`[href="#${id}"`)

    if (!navItem) return

    navItem.classList.remove('active')

    if (!entry.isIntersecting) return

    navItem.classList.add('active')
  })
}

const observer = new IntersectionObserver(handleObserver, {
  rootMargin: '-15% 0% -85% 0%',
  root: document,
})

sections.forEach((section) => observer.observe(section))
