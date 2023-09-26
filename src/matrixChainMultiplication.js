// Given the dimension of a sequence of matrices in an array arr[], where the dimension of the ith matrix is (arr[i-1] * arr[i]), the task is to find the most efficient way to multiply these matrices together such that the total number of element multiplications is minimum.

// Examples:

// Input: arr[] = {40, 20, 30, 10, 30}
// Output: 26000
// Explanation:There are 4 matrices of dimensions 40×20, 20×30, 30×10, 10×30.
// Let the input 4 matrices be A, B, C and D.
// The minimum number of  multiplications are obtained by 
// putting parenthesis in following way (A(BC))D.
// The minimum is 20*30*10 + 40*20*10 + 40*10*30

// Input: arr[] = {1, 2, 3, 4, 3}
// Output: 30
// Explanation: There are 4 matrices of dimensions 1×2, 2×3, 3×4, 4×3. 
// Let the input 4 matrices be A, B, C and D.  
// The minimum number of multiplications are obtained by 
// putting parenthesis in following way ((AB)C)D.
// The minimum number is 1*2*3 + 1*3*4 + 1*4*3 = 30

// Input: arr[] = {10, 20, 30}
// Output: 6000  
// Explanation: There are only two matrices of dimensions 10×20 and 20×30. 
// So there  is only one way to multiply the matrices, cost of which is 10*20*30







// Javascript code to implement the
// matrix chain multiplication using recursion

// Matrix Ai has dimension p[i-1] x p[i] for i = 1..n
function MatrixChainOrder(p , i , j)
{
	if (i == j)
		return 0;

	var min = Number.MAX_VALUE;

	// Place parenthesis at different places
	// between first and last matrix,
	// recursively calculate count of multiplications
	// for each parenthesis placement
	// and return the minimum count
	var k=0;
	for (k = i; k < j; k++)
	{
		var count = MatrixChainOrder(p, i, k)
					+ MatrixChainOrder(p, k + 1, j)
					+ p[i - 1] * p[k] * p[j];

		if (count < min)
			min = count;
	}

	// Return minimum count
	return min;
}

// Driver code
var arr = [ 1, 2, 3, 4, 3 ];
var N = arr.length;

console.log(MatrixChainOrder(arr, 1, N - 1));

// document.write(
// 	"Minimum number of multiplications is "
// 	+ MatrixChainOrder(arr, 1, N - 1));


// This code contributed by shikhasingrajput




