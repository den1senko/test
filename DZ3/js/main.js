let money, time;

function start(){
    money = prompt("Ваш бюджет на месяц?", '');
    while(isNaN(money) || money == "" || money == null){
        money = prompt("Ваш бюджет на месяц?", '');
    }    
    time = prompt("Введите дату в формате YYYY-MM-DD", '');    
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

//chooseOptExpenses();

function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        let s = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = s;       
    }
}

function chooseExpenses(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
        }
        else{
            i--;
        }
    }
}

function detectDayBudget(){
    appData.moneyPerDay = appData.budget/30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel(){
    if(appData.moneyPerDay<100){
        console.log("Минимальный уровень достатка");
    }
    else if(appData.moneyPerDay>99 && appData.moneyPerDay<2000){
        console.log("Средний уровень достатка");
    }
    else if(appData.moneyPerDay>1999){
        console.log("Высокий уровень достатка");
    }
}

console.log(appData);
