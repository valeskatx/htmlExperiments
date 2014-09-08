// Create a function to calculate the mortgage payment
// P = L[c(1 + c)^n]/[(1 + c)^n - 1]
var mortgage = function (loanAmount, interestRate, years){
	interestRate = interestRate/100/12;//c
	var months = 12 * years;//n
	var payment = loanAmount * ((interestRate * Math.pow(1 + interestRate, months))/ (Math.pow(1 + interestRate, months)-1))
    // round out to cents
	return payment.toFixed(2);
};

$(document).ready(function() {
	$("input[type='button']").on("click", function() {
	  var loanAmount = $("#la").val();

	  var interestRate = $("#ir").val();

	  var years = $("#lt").val();

	  var payment = mortgage (loanAmount, interestRate, years);
	    
	  $("#mp").html(payment); 
	});
});