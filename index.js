'use strict'

const btn = document.querySelectorAll('.btn')

btn.forEach(oneBTN => oneBTN.addEventListener('click', () => {
    oneBTN.style.fontSize = '25px'
}))