const accordeon = document.querySelector('.main__acc');
const accordeonHead = document.querySelector('.main__acc-head');
const content = document.querySelector('.main__acc-content')

accordeonHead.addEventListener('click', () => {
  if (accordeon.classList.contains('main__acc--active')) {
    accordeon.classList.toggle('main__acc--active')
    content.style.maxHeight = '0px'
  }
  else {
    accordeon.classList.toggle('main__acc--active')
    content.style.maxHeight = content.scrollHeight + 'px'
  }
})