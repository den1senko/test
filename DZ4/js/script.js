let li = document.querySelectorAll('.menu-item'),
    ul = document.querySelector('.menu'),
    adv = document.querySelector('.adv');

let liNew = document.createElement('li');

liNew.classList.add('menu-item');
liNew.textContent = 'Пятий пункт';

document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple';

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

ul.insertBefore(li[2], li[1]);
ul.appendChild(liNew);

adv.remove();

let answer = prompt('Ваше отношение к технике apple?');

document.getElementById('prompt').textContent = answer;