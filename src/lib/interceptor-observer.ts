const navigation: HTMLElement | null = document.getElementById('navigation')
const sections: HTMLElement[] = [...document.querySelectorAll('section')]

const handleObserver = (entries: IntersectionObserverEntry[]): void => {
  if (navigation === null) return
  entries.forEach((entry) => {
    const { id } = entry.target
    if (!id) return

    const navItem: HTMLAnchorElement | null = navigation.querySelector(`[href="#${id}"`)

    if (!navItem) return

    navItem.classList.remove('active')

    if (!entry.isIntersecting) return

    navItem.classList.add('active')
  })
}

const observer: IntersectionObserver = new IntersectionObserver(handleObserver, {
  rootMargin: '-15% 0% -85% 0%',
  root: document,
})

sections.forEach((section) => observer.observe(section))
