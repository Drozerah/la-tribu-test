export function initResponsiveMenu() {

  const btn = document.querySelector('#menu-toggler')
  const nav = document.querySelector('nav')

  // handle click event
  btn.addEventListener('click', (e) => {
    const currentTarget = e.currentTarget
    // toogle class 
    currentTarget.classList.toggle('menu-toggler--opened')
    // toogle aria attribute
    const expanded = currentTarget.getAttribute('aria-expanded') === 'true'
    currentTarget.setAttribute('aria-expanded', String(!expanded))
    // add active class
    nav.classList.toggle('active')
  })

  // handle window resize event
  window.addEventListener("resize", () => {
    const menuToogler = document.querySelector('.menu-toggler--opened')
    const panel = document.querySelector('.active')
    // reset #menu-toggler state
    if (menuToogler) {
      menuToogler.classList.remove('menu-toggler--opened')
      menuToogler.setAttribute('aria-expanded',"false")
      panel.classList.remove('active')
    }
  })
}

export function ordering () {
  const orderingBtn = document.querySelector('.btn-cta')
  orderingBtn.addEventListener('click', (e) => {
    alert('Ordering not implemented yet')
  })
}

export function setCopyRightYear() {
  const currentYear = new Date().getFullYear()
  const yearElement = document.querySelector('.year')
  yearElement.setAttribute('datetime', currentYear)
  yearElement.innerText = currentYear
}