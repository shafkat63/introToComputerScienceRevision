const array = [1, 2, 3, 4, 5, 6, 7, 8, 33, 44, 45, 46];

const binarySearch = (arr, value) => {
	let min = 0;
	let max = arr.length - 1;
	console.log("Array Length:" + max);

	let mid;
	let element;
	while (min <= max) {
		mid = Math.floor((min + max) / 2);

		element = arr[mid];

		if (arr[mid] < value) {
			min = mid + 1;
		} else if (arr[mid] > value) {
			max = mid - 1;
		} else {
			return mid;
		}
	}
	return 0;
};
const target = 44;
const index = binarySearch(array, target);

if (index !== -1) {
	console.log(`Element ${target} found at index ${index}`);
} else {
	console.log(`Element ${target} not found in the array`);
}
