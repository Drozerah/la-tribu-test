export function initResponsiveMenu() {
  const btn = document.querySelector('#menu-toggler')
  const nav = document.querySelector('nav')
  btn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('menu-toggler--opened')
    nav.classList.toggle('active')
  })
  // remove active mene toogler on rize
  window.addEventListener("resize", () => {
    const menuToogler = document.querySelector('.menu-toggler--opened')
    const panel = document.querySelector('.active')
    if (menuToogler) {
      menuToogler.classList.remove('menu-toggler--opened')
      panel.classList.remove('active')
    }
  })
}

export function setCopyRightYear() {
  const currentYear = new Date().getFullYear()
  const yearElement = document.querySelector('.year')
  yearElement.setAttribute('datetime', currentYear)
  yearElement.innerText = currentYear
}