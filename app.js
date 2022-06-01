// Input Field
const incomeInput = document.getElementById("income-input");
const foodExpense = document.getElementById("food-expense");
const rentExpense = document.getElementById("rent-expense");
const clothExpense = document.getElementById("cloth-expense");
const savingInput = document.getElementById("saving-input");

// Error Message

const errorMessage = document.getElementById("error-message");

// total expanse
const totalExpense = document.getElementById("total-expense");
// Total balance
const totalBalance = document.getElementById("total-balance");

// Saving Amount

const savingAmountPercentage = document.getElementById("saving-amount");

const totalRemainingBalance = document.getElementById("remaining-balance");

// Button
const expanseCalculation = document.getElementById("calculation-btn");
const savingCalculation = document.getElementById("saving-btn");

expanseCalculation.addEventListener("click", function () {
	const mainIncome = parseInt(incomeInput.value);
	const foodCost = parseInt(foodExpense.value);
	const rentCost = parseInt(rentExpense.value);
	const clothCost = parseInt(clothExpense.value);

	if (isNaN(mainIncome) || mainIncome < 0) {
		let span = document.createElement("span");
		span.innerText = "Please input valid amount of money in number format";
		span.style.backgroundColor = "red";
		errorMessage.appendChild(span);
		// alert("Please input valid amount of money in number format");
	} else if (isNaN(foodCost) || foodCost < 0) {
		let span = document.createElement("span");
		span.innerText = "Please input valid amount of money in number format";
		span.style.backgroundColor = "red";
		errorMessage.appendChild(span);
	} else if (isNaN(rentCost) || rentCost < 0) {
		let span = document.createElement("span");
		span.innerText = "Please input valid amount of money in number format";
		span.style.backgroundColor = "red";
		errorMessage.appendChild(span);
	} else if (isNaN(clothCost) || clothCost < 0) {
		let span = document.createElement("span");
		span.innerText = "Please input valid amount of money in number format";
		span.style.backgroundColor = "red";
		errorMessage.appendChild(span);
	} else {
		let calculateTotalExpanse = foodCost + rentCost + clothCost;

		if (calculateTotalExpanse > mainIncome) {
			
			let span = document.createElement("span");
			span.innerText =
				"Please input valid amount of money in number format";
			span.style.backgroundColor = "red";
			errorMessage.appendChild(span);
		}

		let calculatetotalBalance = mainIncome - calculateTotalExpanse;
		totalExpense.innerText = calculateTotalExpanse;
		totalBalance.innerText = calculatetotalBalance;
	}
});

savingCalculation.addEventListener("click", function () {
	let mainIncome = parseInt(incomeInput.value);
	let savingAmount = parseInt(savingInput.value);

	if (isNaN(mainIncome) || mainIncome < 0) {
		alert("Please input valid amount of money in number format");
	} else {
		let calculateTotalExpanse =
			parseInt(foodExpense.value) +
			parseInt(rentExpense.value) +
			parseInt(clothExpense.value);

		let calculatetotalBalance = mainIncome - calculateTotalExpanse;

		const savingPersantage = (savingAmount / 100) * mainIncome;

		let remainTotalBalance = calculatetotalBalance - savingPersantage;

		// console.log(savingPersantage);
		savingAmountPercentage.innerText = savingPersantage;
		totalRemainingBalance.innerText = remainTotalBalance;
	}
});
