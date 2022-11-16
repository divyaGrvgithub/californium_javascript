// 1. Print all even numbers in first 50 natural numbers
// 2. print all odd numbers in natural numbers from 20 to 50
// 3. print all numbers that are divisible by 5
// 	[12, 45, 67, 89, 90, 34, 35, 55]
// 4. Print all numbers of this array
// 	 [[1,2], [3,4], [5,6], [7,8]]
// 5. Print all prime numbers occurring in 1st 50 natural numbers

// ============== solution 1 ============== //
for (let number = 1; number <= 50; number++) {
    console.log(number);
}

// ============== solution 2 ============== //

for (let number = 20; number <= 50; number++) {
    if (number % 2 !== 0) {
        console.log(number);
    }
}

// ============== solution 2 alternate ============== //

for (let number = 20; number < 51; number++) {
    if (number % 2 === 0) {
        continue;
    }

    console.log(number);
}

// ============== solution 3 ============== //
const arr = [12, 45, 67, 89, 90, 34, 35, 55];

for (let index = 0; index < arr.length; index++) {
    const arrayElement = arr[index];

    if (arrayElement % 5 === 0) {
        console.log(arrayElement);
    }
}

// ============== solution 4 ============== //
const array = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];

for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    const innerArray = array[outerIndex];

    for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
        const innerArrayElement = innerArray[innerIndex];
        console.log(innerArrayElement);
    }
}

// ============== solution 5 ============== //

for (let number = 1; number <= 50; number++) {
    if (number === 1) {
        continue;
    }

    let isPrimeNumber = true;
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber) {
        console.log(number);
    }
}