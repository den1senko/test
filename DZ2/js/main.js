var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    }
    else{
        
    }
}

/*var i = 0;
while(i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Введите обязательную статью расходов в этом месяце");
    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    }
    else{
        
    }
    i++;
}

do{
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Введите обязательную статью расходов в этом месяце");
    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    }
    else{
        
    }
    i++;
}
while(i < 2);*/

appData.moneyPerDay = appData.budget/30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);


console.log(appData);
