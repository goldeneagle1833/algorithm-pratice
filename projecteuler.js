function multiplesOf3and5() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(sum);
}

//multiplesOf3and5();

//looping
function evenFibonacciNums() {
  let firstnum = 0;
  let secondNum = 1;
  let fibNum = 1;
  let arrFib = [];
  let sum = 0;

  function countingFibonacci() {
    for (let i = 2; i <= 33; i++) {
      fibNum = firstnum + secondNum;
      firstnum = secondNum;
      secondNum = fibNum;

      arrFib.push(fibNum);
    }
  }
  countingFibonacci();

  //console.log(arrFib);

  for (let index = 0; index < arrFib.length; index++) {
    if (arrFib[index] % 2 == 0) {
      sum += arrFib[index];
    }
  }
  console.log(sum);
}
//evenFibonacciNums();

// recursive fallow along
function recursiveEvenFibonacciNums(n) {
  if (n <= 2) {
    return 1;
  } else {
    return (
      recursiveEvenFibonacciNums(n - 1) + recursiveEvenFibonacciNums(n - 2)
    );
  }
}
//console.log(recursiveEvenFibonacciNums(10));

//prime factors
function primeFactors(num) {
  function ifPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const primeNums = [];
  for (let i = 2; i <= num; i++) {
    while (ifPrime && num % i === 0) {
      if (!primeNums.includes(i)) primeNums.push(i);
      num /= i;
    }
    return primeNums;
  }
}

//console.log(primeFactors(13195))

function prime_factors(num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}
//console.log(prime_factors(600851475143));
function thirdPrime(num) {
  n = 2;
  e = num;
  while (e != 1) {
    if (e % n == 0) {
      e = e / n;
    } else {
      n = n + 1;
    }
    console.log(n);
  }
}

//thirdPrime(600851475143);
let arrSum = [];

let array = [3, 5, -4, 8, 11, 1, -1, 8];
let targetSum = 10;

let arr2 = [10, 20, -4, 8, 11, 1, -1, 8];
let target2 = 16;

function nonEmptyArr(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && arr[i] !== arr[j]) {
        arrSum.push(arr[i], arr[j]);
        console.log("pair pushed");
      } else {
        console.log("nope", arr[i], arr[j]);
      }
    }
  }
  console.log(arrSum);
  //1707781-CJpynXMbPV4Yp2Uq5gRFss9YMMH2VtvxdHpSYd8e
}

//nonEmptyArr(array, targetSum);

//nonEmptyArr(arr2, target2);

//const check = arr2.includes(10);

//console.log(check);

arrParty = ["bruce", "ty", "thomas", "de amber", "ty", "bryan"];

const party2 = (arr, name) => {
  if (arr.includes(name)) {
    return true;
  } else {
    return false;
  }
};

const party = (arr, name) => {
  if (arr.includes(name)) {
    return true;
  } else {
    return false;
  }
};

const sendEmail = (x) => {
  if (x) {
    console.log("shots");
  } else {
    console.log("send email");
  }
};

//sendEmail(party(arrParty, 'hector'))

let pound = "#";

function staircase(numsteps) {
  if (0 < numsteps && numsteps < 100) {
    for (let i = 0; i <= numsteps; i++) {
      console.log(" ".repeat(numsteps - i) + pound.repeat(i));
    }
  }
}

//staircase(99);

//sum square difference
function differenceOfSums(params) {
  function sumOfTheSquares() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
      sum += Math.pow(i, 2);
    }

    return sum;
  }

  function squareOfTheSums() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
      sum += i;
    }

    return Math.pow(sum, 2);
  }
  console.log(sumOfTheSquares(), squareOfTheSums());
  return squareOfTheSums() - sumOfTheSquares();
}

console.log(differenceOfSums());
