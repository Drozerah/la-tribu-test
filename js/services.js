export function initResponsiveMenu() {
  const btn = document.querySelector('#menu-toggler')
  const nav = document.querySelector('nav')
  btn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('menu-toggler--opened')
    nav.classList.toggle('active')
  })
  // remove class 
  window.addEventListener("resize", () => {
    const meneToogler = document.querySelector('.menu-toggler--opened')
    if (meneToogler) {
      meneToogler.classList.remove('menu-toggler--opened')
    }
  })
}

export function setCopyRightYear() {
  const currentYear = new Date().getFullYear()
  const yearElement = document.querySelector('.year')
  yearElement.setAttribute('datetime', currentYear)
  yearElement.innerText = currentYear
}