window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a){
        for(let i=a; i<tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });    

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });  

    let dot = document.querySelectorAll('.dot'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        sliderItem = document.querySelectorAll('.slider-item');

    let j = 0;

    function hideSliderItem(c){
        for(let i=c; i<sliderItem.length; i++){
            sliderItem[i].style.display = 'none';
        }
    }

    hideSliderItem(1);

    nextBtn.addEventListener('click', function(){
        if(j >= sliderItem.length-1){
            dot[j].classList.remove('dot-active');
            j = 0;
            dot[j].classList.add('dot-active'); 
        }
        else{
            dot[j].classList.remove('dot-active');
            j++;
            dot[j].classList.add('dot-active');    
        }  
        hideSliderItem(0);    
        sliderItem[j].style.display = 'flex';
        sliderItem[j].style.height = '573.5px';
    });

    prevBtn.addEventListener('click', function(){
        if(j < 1){
            dot[j].classList.remove('dot-active');
            j = sliderItem.length - 1;
            dot[j].classList.add('dot-active'); 
        }
        else{
            dot[j].classList.remove('dot-active');
            j--;
            dot[j].classList.add('dot-active'); 
        }
        hideSliderItem(0);
        sliderItem[j].style.display = 'flex';
        sliderItem[j].style.height = '573.5px';
    });

    let deadline = '2019-03-01';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/1000/60/60);

        return{
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }    
    }
    setClock('timer', deadline);

    //calc
    let people = document.getElementsByClassName('counter-block-input')[0],
        days = document.getElementsByClassName('counter-block-input')[1],
        base = document.getElementById('select'),
        total = document.getElementById('total');

    let ttl = 0,
        sumD = 0,
        sumP = 0;
    
    total.textContent = 0;
    
    people.addEventListener('change', function(){
        sumP = +this.value;
        ttl = (sumP + sumD) * 4000;
        if(days.value == ''){
            total.textContent = 0;
        }
        else{
            total.textContent = ttl;
        }
    });

    days.addEventListener('change', function(){
        sumD = +this.value;
        ttl = (sumP + sumD) * 4000;
        if(people.value == ''){
            total.textContent = 0;
        }
        else{
            total.textContent = ttl;
        }
    });

    base.addEventListener('change', function(){
        if(people.value == '' || days.value == ''){
            total.textContent = 0;
        }
        else{
            let t = ttl;
            total.textContent = t * this.options[this.selectedIndex].value;
        }
    });
});