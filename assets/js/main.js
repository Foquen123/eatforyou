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


// document.querySelectorAll('.main__acc').forEach((headBtn) => {
//   headBtn.addEventListener('click', () => {
//     const headItem = headBtn.closest('.program__acc-item')
//     const content = headBtn.nextElementSibling

//     if (headItem.classList.contains('program__acc-item--active')) {
//       headItem.classList.toggle('program__acc-item--active')
//       content.style.maxHeight = '0px'
//     }
//     else {
//       // close all another
//       document.querySelectorAll('.program__acc-item').forEach((item) => {
//         item.classList.remove('program__acc-item--active')

//       })
//       document.querySelectorAll('.program__acc-content').forEach((itemContent) => {
//         itemContent.style.maxHeight = '0px'
//       })


//       headItem.classList.toggle('program__acc-item--active')
//       content.style.maxHeight = content.scrollHeight + 'px'
//     }
//   })
// })