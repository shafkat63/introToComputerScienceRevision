// This is better one 

// const fibonacci = (n) => {
// 	const sequence = [0, 1];
// 	for (let i = 2; i < n + 1; i++) {
// 		sequence.push(sequence[i - 2] + sequence[i - 1]);
// 	}

// 	return sequence[n];
// };

// console.log(fibonacci(6));




// function fibonacci(n) {
// 	// base case
// 	if (n === 2 || n === 1) {
// 	  return 1;
// 	} else if (n <= 0) {
// 	  return 0;
// 	}
  
// 	// recursive calls
// 	return fibonacci(n - 1) + fibonacci(n - 2);
//   }


//   console.log(fibonacci(6));


//   using for loop 

function fibonacci(n) {
	const sequence = [0, 1];
	for (let i = 2; i < n + 1; i++) {
	  sequence.push(sequence[i - 2] + sequence[i - 1]);
	}
	return sequence[n];
  }

  console.log(fibonacci(65));


  