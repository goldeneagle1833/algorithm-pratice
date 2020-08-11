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

//console.log(differenceOfSums());

//10001 prime number

function prime10001() {
  let primeArr = [];

  for (let i = 1; primeArr.length < 10001; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }

  function isPrime(number) {
    if (number <= 1) return false;

    // The check for the number 2 and 3
    if (number <= 3) return true;

    if (number % 2 == 0 || number % 3 == 0) return false;

    for (let i = 5; i * i <= number; i = i + 6) {
      if (number % i == 0 || number % (i + 2) == 0) return false;
    }

    return true;
  }

  // function primeCheck(x) {
  //   for (let i = 2; i < x; i++) {
  //     if (x % i == 0) {
  //       return false;
  //     }
  //   }
  // }
  // my prime check above(in commit) is flawed not sure how to fix

  return primeArr[10000];
}

//console.log(prime10001());

function thirteenSum() {
  let largeNumSum =
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172471218839987979087922749219016997208880937766572733300105336788122023542180975125454059475224352584907711670556013604839586446706324415722155397536978179778461740649551492908625693219784686224828397224137565705605749026140797296865241453510047482166370484403199890008895243450658541227588666881164271714799244429282308634656748139191231628245861786645835912456652947654568284891288314260769004224219022671055626321111109370544217506941658960408071984038509624554443629812309878799272442849091888458015616609791913387549920052406368991256071760605886116467109405077541002256983155200055935729725";

  let thrteenSum = [0];
  let sum = [];
  console.log(largeNumSum.length);

  for (let i = 0; i < largeNumSum.length; i++) {
    for (let j = 12; j < largeNumSum.length; j++) {
      let size13 = largeNumSum.substr(i, j); // grabs the string at 13 length

      let split13 = size13.split(""); // splits the num string into differnt strings
      console.log(split13);
      for (let i = 0; i < 11; i++) {
        let numSize13 = parseInt(split13[i]); // turns strings into a number

        sum.push(numSize13);
      }

      let interSum = sum.reduce(function (a, b) {
        return a + b;
      }); //reduces the array into one num

      console.log(interSum);
      if (interSum > thrteenSum[0]) {
        console.log("something");
        thrteenSum.pop();
        thrteenSum.push(interSum);
      }
    }
  }
}

// need the sum arr to clear its self after being used to store the value of reducing of the 13 digit num

3167176531330;
thirteenSum();
