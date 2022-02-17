function incomeInput(moneyIncome) {
    const inputMoney = document.getElementById(moneyIncome);
    const inputMoneytext = inputMoney.value;
    const totalMoney = parseFloat(inputMoneytext);
    return totalMoney;
}



// income and expenses calculation and calculate Button eventhandling start

document.getElementById('calculation').addEventListener('click', function () {

    const totalIncome = incomeInput('total-income');
    const foodCost = incomeInput('food-cost');
    const houseRent = incomeInput('house-rent');
    const clothesItem = incomeInput('clothes-item');
    const calculateTotalCost = foodCost + houseRent + clothesItem;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = calculateTotalCost;

    if (foodCost == '' || foodCost < 0 || houseRent == '' || houseRent < 0 || clothesItem == '' || clothesItem < 0 || totalIncome == '' || totalIncome < 0) {
        const failError = document.getElementById('error-handling');
        failError.style.display = 'block';
    }
    else {
        const failError = document.getElementById('error-handling');
        failError.style.display = 'none';
    }



    if (totalExpenses.innerText > totalIncome) {
        const failError = document.getElementById('error-money');
        failError.style.display = 'block';

    }

    else {

        const totalBalance = document.getElementById('total-balance');
        totalBalance.innerText = totalIncome - totalExpenses.innerText;
        const failError = document.getElementById('error-money');
        failError.style.display = 'none';



    }

})
// income and expenses calculation and calculate Button eventhandling END

// savings calculation and save button eventhandling start

document.getElementById('savings-btn').addEventListener('click', function () {

    const saveMoney = incomeInput('save-money');
    const totalIncome = incomeInput('total-income');
    const percentage = totalIncome * (saveMoney / 100);
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = percentage;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const savingMoney = parseFloat(totalBalanceText);

    if (savingAmount.innerText > savingMoney) {
        const errorMoneysave = document.getElementById('error-moneysave');
        errorMoneysave.style.display = 'block';
    }
    else {
        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = savingMoney - savingAmount.innerText;
        const errorMoneysave = document.getElementById('error-moneysave');
        errorMoneysave.style.display = 'none';
    }

})