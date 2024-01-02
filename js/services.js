export function logger(msg) {
  console.log(msg) // !DEBUG
}

export function printAppTitle() {
  if (document.title) {
    console.log(document.title)
  } else {
    console.error('title tag not found')
  }  
}

export function setCopyRightYear() {
  const currentYear = new Date().getFullYear()
  const yearElement = document.querySelector('.year')
  yearElement.setAttribute('datetime', currentYear)
  yearElement.innerText = currentYear
}