var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
    
var firstAnswer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    secondAnswer1 = prompt("Во сколько обойдется?"),
    firstAnswer2 = prompt("Введите обязательную статью расходов в этом месяце"),
    secondAnswer2 = prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstAnswer1: secondAnswer1,
        firstAnswer2: secondAnswer2
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};

alert(appData.budget/30);


console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.income);
console.log(appData.savings);

