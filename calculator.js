window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values ={amount: 20000, years: 5, rate: 6.3};
  const userAmount = document.getElementById("loan-amount");
 userAmount.values = values.amount;
 const userYears = document.getElementById('loan-years');
 userYears.vales = values.years;
 const userRate = document.getElementById('loan-rate');
 userRate.value = values.rate
 update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const userPayment = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(userPayment));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyBill = (values.rate/100) /12;
  const n = Math.floor(values.years*12);
  return(
    (monthlyBill*values.amount)/
    (1 - Math.pow((1 + monthlyBill), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = '$' + monthly;
}
