function calculate() {
    var income = document.getElementById("tax-income").value;
    var percent = 0;
    if(income < 8700) {
        percent = 1.10;
    } else if (income >= 8700 && income < 35350) {
        percent = 1.15;
    }else if (income >= 35350 && income < 85650) {
        percent = 1.25;
    } else if (income >= 85650 && income < 178650) {
        percent = 1.28;
    } else if (income >= 178650 && income <= 388350) {
        percent = 1.33;
    } else if (income > 388350) {
        percent = 1.35;
    }

    var tax = income * percent;
    document.getElementById("tax-owed").value = tax.toFixed(2);
}