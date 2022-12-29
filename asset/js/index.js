var nav = document.querySelector('.header__mobile')

var modal = document.querySelector('.modal')

var list = document.querySelector('.modal__list')

var close = document.querySelector('.modal__close')
nav.onclick = function() {
    modal.style.display = 'block'
}

modal.onclick = function() {
    modal.style.display = 'none'
}

list.onclick = function(e) {
    e.stopPropagation()
}

close.onclick =function() {
    modal.style.display = 'none'
}