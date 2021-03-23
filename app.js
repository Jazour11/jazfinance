
function compoundCalc(){
	const initialInvestment = document.getElementById('begprin').value;
	const lengthOfTime = document.getElementById('time').value;
	const interestRate = document.getElementById('eis').value / 100;

	// Annual Calculation:
	
	const annualc1 = 1 + (interestRate/1);
	const annualc2 = Math.pow(annualc1, lengthOfTime);
	const annualCompoundInterest = annualc2 * initialInvestment;

	// Annual Calculation End:

	// Monthly Calculation:

	const monthlyC1 = 1 + (interestRate/12);
	const monthlyC2 = Math.pow(monthlyC1, 12 );
	const monthlyC3 = Math.pow(monthlyC2, lengthOfTime);
	const monthlyCompoundInterest = monthlyC3 * initialInvestment;

	
	// Monthly Calculation End:

		
	// Daily Calculation :
	const dailyC1 = 1 + (interestRate/365);
	const dailyC2 = Math.pow(dailyC1,365);
	const dailyC3 = Math.pow(dailyC2, lengthOfTime);
	const dailyCompoundInterest = dailyC3 * initialInvestment;

	// Daily Calculation End:

	document.getElementById('cpmAnn').innerHTML = "$" + Math.round(annualCompoundInterest);
	document.getElementById('cpmMon').innerHTML = "$" + Math.round(monthlyCompoundInterest);
	document.getElementById('cpmDai').innerHTML = "$" + Math.round(dailyCompoundInterest);

	
	}
	
	// Compound Interest Calc End:


	function computeNum(){
		const num1 = document.getElementById('num1').value;
		const num2 = document.getElementById('num2').value;
		const num3 = document.getElementById('num3').value;
		const num4 = document.getElementById('num4').value;
		const num5 = document.getElementById('num5').value;
		const num6 = document.getElementById('num6').value;
		const num7 = document.getElementById('num7').value;
		const num8 = document.getElementById('num8').value;
		const num9 = document.getElementById('num9').value;
		const num10 = document.getElementById('num10').value;
	
		const sum = (+num1 + +num2 + +num3  + +num4  + +num5  + +num6  + +num7  + +num8  + +num9  + +num10)
	
	
		standardEf = "$" + Math.round(sum) * 6
		conserveEf = "$" + Math.round(sum) * 12
		
	
		document.getElementById('equals').innerHTML = standardEf;
		document.getElementById('consequals').innerHTML = conserveEf;
	}
		// Emergency Fund Calculator End:
	
		// Compound Interest Calc:

// Payment Calculator:
function computeLoan(){
	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}
	// Payment Calculator End:

	// Emergency Fund Calculator:

