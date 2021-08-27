const bar = document.querySelector('#bar');
const modalWrapper = document.querySelector('.modal__wrapper');

bar.addEventListener('click', () =>{
    modalWrapper.classList.toggle('modal-activ')
})