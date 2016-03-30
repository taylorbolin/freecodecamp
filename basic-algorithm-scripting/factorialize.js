// Return the factorial of the provided integer.
function factorialize(num) {
	var startingNum = num;
	if (num === 0) {
		return 1;
	} else {
		for (var i = num - 1; i > 0; i--) {
			startingNum *= i;
		}
		return startingNum;
	}
}

factorialize(5);