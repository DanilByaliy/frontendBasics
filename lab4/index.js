'use strict'

let element1 = document.getElementById("list");

element1.addEventListener('click', () => {
    element1.style.backgroundColor = '#' + (Math.random().toString(16)
     + '000000').substring(2,8).toUpperCase();
     element1.style.color = '#' + (Math.random().toString(16)
     + '000000').substring(2,8).toUpperCase()
});

let element2 = document.querySelector('.text');

element2.addEventListener('click', () => {
    element2.style.backgroundColor = '#' + (Math.random().toString(16)
     + '000000').substring(2,8).toUpperCase();
     element2.style.color = '#' + (Math.random().toString(16)
     + '000000').substring(2,8).toUpperCase()
});