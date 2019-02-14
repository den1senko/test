let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    button = document.getElementsByTagName('button'),
    buttonDayB = document.querySelector('.count-budget-btn'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savingsBox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", ''); 
    money = prompt("Ваш бюджет на месяц?", '');
    while(isNaN(money) || money == "" || money == null){
        money = prompt("Ваш бюджет на месяц?", '');
    }      
    let timeArr = time.split('-');           
    yearValue.setAttribute('value', timeArr[0]);
    monthValue.setAttribute('value', timeArr[1]);
    dayValue.setAttribute('value', timeArr[2]);
    budgetValue.textContent = money;
    
    let a = chooseIncome.value;
        arr = a.split(", "),
        sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + parseFloat(arr[i]);
    }
    if(isNaN(sum)){
        incomeValue[0].textContent = '';
    }
    else{
        incomeValue[0].textContent = sum;
    }
    
    if(savingsBox.checked){ 
        let s = parseFloat(sum.value),
            p = parseFloat(percent.value),
            budgetM = s,
            budgetY = s,
            totalBudget = 0;        
        budgetM += budgetM*p/100;   
        for(let i = 0; i < 12; i++){  
            budgetY += budgetY*p/100;
            totalBudget += budgetY;    
            console.log(totalBudget);
        }
        monthsavingsValue[0].textContent = budgetM;
        yearsavingsValue[0].textContent = totalBudget.toFixed(2);
    }
});

button[0].addEventListener('click', function(){
    let a = parseInt(expensesItem[1].value),
        b = parseInt(expensesItem[3].value);
    expensesValue[0].textContent = a+b;
});

button[1].addEventListener('click', function(){
        let a = parseFloat(optionalexpensesItem[0].value),
            b = parseFloat(optionalexpensesItem[1].value),
            c = parseFloat(optionalexpensesItem[2].value);
        optionalexpensesValue[0].textContent = a + b + c;
});

    
buttonDayB.addEventListener('click', function(){
    let dayB = parseFloat(money/30);
    daybudgetValue.textContent = dayB; 
    if(dayB < 100){
        levelValue[0].textContent = "Минимальный";
    }
    else if(dayB > 99 && dayB <2000){
        levelValue[0].textContent = "Средний";
    }
    else if(dayB > 1999){
        levelValue[0].textContent = "Высокий";
    }   
});
