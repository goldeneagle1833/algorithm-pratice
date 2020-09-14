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

  // function countingFibonacci() {
  //   for (let i = 2; i <= 33; i++) {
  //     fibNum = firstnum + secondNum;
  //     firstnum = secondNum;
  //     secondNum = fibNum;

  //     arrFib.push(fibNum);
  //   }
  // }
  // countingFibonacci();


  // console.log(arrFib);

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
//1711551-cb8PSIO2EwpDmDJi2a1FgUlctGuhsCgRRmAYV7LJ
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
let largeNum =
  "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172471218839987979087922749219016997208880937766572733300105336788122023542180975125454059475224352584907711670556013604839586446706324415722155397536978179778461740649551492908625693219784686224828397224137565705605749026140797296865241453510047482166370484403199890008895243450658541227588666881164271714799244429282308634656748139191231628245861786645835912456652947654568284891288314260769004224219022671055626321111109370544217506941658960408071984038509624554443629812309878799272442849091888458015616609791913387549920052406368991256071760605886116467109405077541002256983155200055935729725";

function numberSizeSum(numInput, size) {
  let thrteenSum = [0];

  for (let i = 0; i < numInput.length - size; i++) {
    //loop1
    let reduceArry = [];

    // grabs the string at 13 length
    // substr method was giving me the biggest problem because i thought he secound agruement was the postion not just the length
    let size13 = numInput.substr(i, size);
    console.log(size13);

    // splits the num string into differnt strings
    let split13 = size13.split("");
    console.log(split13, "split");

    // turns strings into a number
    for (let i = 0; i < 13; i++) {
      let split13Number = parseInt(split13[i]);
      console.log(split13Number);
      // add nums to array to be reduced
      reduceArry.push(split13Number);
    }
    console.log(reduceArry);

    //reduces the array into one num
    let reduceArrySum = reduceArry.reduce(function (a, b) {
      return a * b;
    });
    console.log(reduceArrySum);
    // pushs answer to array to if the number is larger than the array
    if (reduceArrySum > thrteenSum[0]) {
      thrteenSum.pop();
      thrteenSum.push(reduceArrySum);
      console.log("pushed");
    }

    console.log(thrteenSum);
    //clears all arrays execpt thirteenSum
  }

  71765313306249192;
  6717653133062491;
  167176531330624;
  31671765313306;
  7316717653133;
  /////////////////////////
  //////////////loop2
  ////////////////////////
  // let reduceArryloop2 = []
  //i = 0
  //      // grabs the string at 13 length
  //      let size13loop2 = largeNumSum.substr((i+1), (i + 14));
  //      console.log(size13loop2);

  //      // splits the num string into differnt strings
  //      let split13loop2 = size13loop2.split("");
  //      console.log(split13loop2, "split");

  //      // turns strings into a number
  //      for (let i = 0; i < 13; i++) {
  //        let split13Numberloop2 = parseInt(split13loop2[i]);
  //        console.log(split13Numberloop2);
  //        // add nums to array to be reduced
  //        reduceArryloop2.push(split13Numberloop2);
  //      }
  //      console.log(reduceArryloop2);

  //      //reduces the array into one num
  //      let reduceArrySumloop2 = reduceArryloop2.reduce(function (a, b) {
  //        return a * b;
  //      });
  //  console.log(reduceArrySumloop2)
  //      // pushs answer to array to if the number is larger than the array
  //      if (reduceArrySumloop2 > thrteenSum[0]) {
  //        thrteenSum.pop();
  //        thrteenSum.push(reduceArrySumloop2);
  //      }

  //      console.log(thrteenSum);
  //      //clears all arrays execpt thirteenSum
}

//numberSizeSum(largeNum, 13);

function smallestMultiple() {
  let multi = [];

  for (let i = 20; i < 10000000000; i += 20) {
    console.log(i);
    if (
      i % 2 === 0 &&
      i % 3 === 0 &&
      i % 4 === 0 &&
      i % 5 === 0 &&
      i % 6 === 0 &&
      i % 7 === 0 &&
      i % 8 === 0 &&
      i % 9 === 0 &&
      i % 10 === 0 &&
      i % 11 === 0 &&
      i % 12 === 0 &&
      i % 13 === 0 &&
      i % 14 === 0 &&
      i % 15 === 0 &&
      i % 16 === 0 &&
      i % 17 === 0 &&
      i % 18 === 0 &&
      i % 19 === 0 &&
      i % 20 === 0
    ) {
      multi.push(i);
    }
    if (multi[0] > 0) {
      return;
    }
  }

  console.log(multi);
}

//smallestMultiple();

let divisibleSumPairsArr = [1, 2, 3, 4, 5, 6];
let divisibleSumPairsK = 5;
function divisibleSumPairs(arr, k) {
  sumDivArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sumDiv = [];

      if ((arr[i] + arr[j]) % k === 0) {
        //console.log(arr[i] + arr[j]);
        sumDiv.push(arr[i], arr[j]);
      }
      
        if (i > j &&
          !sumDivArr.includes([arr[i], arr[j]]) ||
          sumDivArr.includes(arr[j], [arr[i]])
        ) {
          sumDivArr.push(sumDiv);
          //console.log(sumDivArr);
        }
      
    }
  }
  console.log(sumDivArr);
}

divisibleSumPairs(divisibleSumPairsArr, divisibleSumPairsK);
// below is a classmates thought process 
// the a > j in her logic was able to fix my fucnction divisible sum pairs from loging duplicte outcomes 
const sumPairs = (n, k) => {
  //let arr = [];
  let arr2 = [];
      let sum = 0;
       for (a = 1; a < n + 1; a++) {
   // arr.push(a);
       for (j = 1; j < n + 1; j++) {
      if (a > j && (a + j) % k === 0) {
        sum += 1;
        arr2.push([a, j]);
      }
        }
  }
  console.log(sum);
  console.log(arr2);
};
//sumPairs(6, 3)
//[([2, 1], [4, 2], [5, 1], [5, 4], [6, 3])];

///////////////////////////////////////////////////////////////////////
// below is my slow algo but it works

let primesArr = [];
function addingPrime(num) {
  for (let counter = 2; counter <= num; counter++) {
    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      primesArr.push(counter);
      console.log(counter);
    }

    function reducer(a, b) {
      return a + b;
    }
  }

  console.log(primesArr.reduce(reducer));
}
//addingPrime(10);

// below it the the better and faster way

var eratosthenes = function (n) {
  // Eratosthenes algorithm to find all primes under n
  var array = [],
    upperLimit = Math.sqrt(n),
    output = [];

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
};

//console.log(eratosthenes(2000000).reduce(reducer))

//////////////////////////////////////////////////////////////////////////

// largest product in grid

// i feel like the grid array is a decent idea for a foundation
// the issue is defining the diag and up down my logic is defining something that doesnt exist
// with the up or diag get to then end of the array its going out of the 20x20 grid

const grid = [
  [
    08,
    02,
    22,
    97,
    38,
    15,
    00,
    40,
    00,
    75,
    04,
    05,
    07,
    78,
    52,
    12,
    50,
    77,
    91,
    08,
  ],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    04,
    56,
    62,
    00,
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    03,
    49,
    13,
    36,
    65,
  ],
  [
    52,
    70,
    95,
    23,
    04,
    60,
    11,
    42,
    69,
    24,
    68,
    56,
    01,
    32,
    56,
    71,
    37,
    02,
    36,
    91,
  ],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80,
  ],
  [
    24,
    47,
    32,
    60,
    99,
    03,
    45,
    02,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50,
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70,
  ],
  [
    67,
    26,
    20,
    68,
    02,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    08,
    40,
    91,
    66,
    49,
    94,
    21,
  ],
  [
    24,
    55,
    58,
    05,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72,
  ],
  [
    21,
    36,
    23,
    09,
    75,
    00,
    76,
    44,
    20,
    45,
    35,
    14,
    00,
    61,
    33,
    97,
    34,
    31,
    33,
    95,
  ],
  [
    78,
    17,
    53,
    28,
    22,
    75,
    31,
    67,
    15,
    94,
    03,
    80,
    04,
    62,
    16,
    14,
    09,
    53,
    56,
    92,
  ],
  [
    16,
    39,
    05,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    00,
    17,
    54,
    24,
    36,
    29,
    85,
    57,
  ],
  [
    86,
    56,
    00,
    48,
    35,
    71,
    89,
    07,
    05,
    44,
    44,
    37,
    44,
    60,
    21,
    58,
    51,
    54,
    17,
    58,
  ],
  [
    19,
    80,
    81,
    68,
    05,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    04,
    89,
    55,
    40,
  ],
  [
    04,
    52,
    08,
    83,
    97,
    35,
    99,
    16,
    07,
    97,
    57,
    32,
    16,
    26,
    26,
    79,
    33,
    27,
    98,
    66,
  ],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    03,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69,
  ],
  [
    04,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    08,
    46,
    29,
    32,
    40,
    62,
    76,
    36,
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    04,
    36,
    16,
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    01,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    05,
    54,
  ],
  [
    01,
    70,
    54,
    71,
    83,
    51,
    54,
    69,
    16,
    92,
    33,
    48,
    61,
    43,
    52,
    01,
    89,
    19,
    67,
    48,
  ],
];

function grid4x4(grid) {
  let sum = [0];
  for (let i = 19; i < grid.length; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      const hozRightSum =
        grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
      const hozleftSum =
        grid[i][j] * grid[i][j - 1] * grid[i][j - 2] * grid[i][j - 3];

      // const backdiagonally =
      //   grid[i][j] *
      //   grid[i + 1][j + 1] *
      //   grid[i + 2][j + 1] *
      //   grid[i + 3][j + 1];
      const forwardDiagonally =
        grid[i + 3][j] *
        grid[i + 2][j + 1] *
        grid[i + 1][j + 1] *
        grid[i][j + 1];
      const up = grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
      //checking the four num right
      // if (sum[0] < hozRightSum) {
      //   sum.shift()
      //   console.log(hozRightSum)
      //   sum.push(hozRightSum);
      // }

      //checking the four left num
      // if(sum[0] < hozleftSum){
      //   sum.shift()
      //   console.log(hozleftSum)
      //   sum.push(hozleftSum)
      // }

      // if(sum[0]< backdiagonally) {
      //   sum.shift()
      //   console.log(diagonally)
      //   sum.push(diagonally)
      // }

      if (sum[0] < forwardDiagonally) {
        sum.shift();
        console.log(forwardDiagonally);
        sum.push(forwardDiagonally);
      }

      if (sum[0] < up) {
        sum.shift();
        console.log(i, i + 1, i + 2, i + 3, j);
        console.log(up);
        sum.push(up);
      }
    }
  }
  console.log(sum);
}

//grid4x4(grid);





//////////////////////////////////////////////////////////////////////////////
// factoring first go

function factoring(max) {
  factorArr = [];
  factorArr.push(max, 1);
  if (factorArr.length <= 50) {
    for (let i = 0; i <= max / 2; i++) {
      for (let j = 0; j <= i; j++) {
        if (i * j == max && !factorArr.includes(j)) {
          factorArr.push(j);
        }
        if (i * j == max && !factorArr.includes(i)) {
          factorArr.push(i);
        }
        if (factorArr.length >= 500) {
          console.log(max);
        }
      }
    }
  }
  factorArr.sort();
  console.log(factorArr);
  console.log(factorArr.length);
}

//factoring(515550);
// the proble is the same as the factoring frist time its anouther O of n^2 run time
// i need to learn a better way to check a large number set with out it becoming a nested problem
// untill then i think the functions could work just they are to long to be practical
function factoringTakeTwo(num) {
  let factorsArr = [];
  for (let i = 0; i <= num / 2; i++) {
    if (num % i == 0) {
      factorsArr.push(i);
    }
  }
  factorsArr.push(num);
  console.log(factorsArr, factorsArr.length);
  return factorsArr;
}

function factorsLength() {
  for (let i = 0; i < 99999999999999; i++) {
    if (factoringTakeTwo(i).length > 50) {
      console.log(factoringTakeTwo(i));
      console.log(i);
      console.log(factoringTakeTwo(i).length);
      return;
    }
  }
}
//console.log(factorsLength());
//console.log( factoringTakeTwo(10))
//





///////////////////////////////////////////////////////////////////
//triangle numbers Frist num with 500 divisors

function triangleNum() {
  triangleNumArr = [];
  let bFactors = [];
  function makingTriNums(a) {
    for (let i = 1; i < 100000; i++) {
      let b = i + a;
      a = b;

      function checkfactors(num) {
        const isEven = num % 2 === 0;
        let inc = isEven ? 1 : 2;
        let factors = [1, num];

        for (
          let curFactor = isEven ? 2 : 3;
          Math.pow(curFactor, 2) <= num;
          curFactor += inc
        ) {
          if (num % curFactor !== 0) continue;
          factors.push(curFactor);
          let compliment = num / curFactor;
          if (compliment !== curFactor) factors.push(compliment);
        }

        return factors;
      }



      console.log("this number", b)
      bFactors.push(checkfactors(b))
      console.log(bFactors)
      console.log(bFactors[0].length)

      if (bFactors[0].length > 500) {
        console.log("i am a true" , b, i);
        bFactors = []
        return;
      } else {
        
        console.log("i am a false",b);
        bFactors = []
      }

    }
  }

  makingTriNums(0);

}

//triangleNum();







///////////////////////////////////////////////////////////////////
// subsequence of array

let seqArr = [5, 1, 22, 25, 6, -1, 8, 10];
let subArr = [1, 6, -1, 10];
let subAnswer = [];

function subsequenceOfArray() {
  for (let i = 0; i < seqArr.length; i++) {
    if (subArr.includes(seqArr[i])) {
      subAnswer.push(seqArr[i]);

      //console.log(true)
    }
  }
  for (let i = 0; i < subArr.length; i++) {
    if (subArr[i] === subAnswer[i]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

//subsequenceOfArray();







//////////////////////////////////////////////////////////////////
// example Fibonacci numbers
let fibsss = [];
firstnum = 0;
secondNum = 1;
function countingFibonacci() {
  for (let i = 2; i <= 33; i++) {
    fibNum = firstnum + secondNum;
    firstnum = secondNum;
    secondNum = fibNum;

    fibsss.push(fibNum);
  }
}
//countingFibonacci();
//console.log(fibsss)

// define the problem
// each num is the sum of the two peceding nums starting form 0 and 1

function fib() {
  let a = b;
  let b = c;
  let c = a + b;

  console.log(c);
}

//fib();

//postion 0 with 0
// push to thier own arry
// the new postion

arr1 = [1, 2, 3, 3, 4];
arr2 = [5, 8, 9, 1, 0];


let x = [
  [1, 5, 3, 3, 4],
  [5, 8, 9, 1, 0],
];
//let y = [[9, 8, 3], [1, 1, 1]]

function convertCartesian() {
  let pointArray = [];
  //console.log(x[1])
  for (let i = 0; i < x[0].length; i++) {
    let arr = [];
    arr.push(x[0][i]);
    pointArray.push(arr);
  }

  let pointarr = [[1], [5], [3], [3], [4]];

  for (let i = 0; i < x[1].length; i++) {
    pointArray[i].push(x[1][i]);
  }

  pointarr[0].push(x[1][0]);
  pointarr[1].push(x[1][1]);
  pointarr[2].push(x[1][2]);
  pointarr[3].push(x[1][3]);
  pointarr[4].push(x[1][4]);

  console.log(pointArray);
  console.log(pointarr);
}

//convertCartesian()

///////////////////////////////////////////////////////////////
//sum of 50 digit nums 

let arrOf50DigitNums = [
37107287533902102798797998220837590246510135740250, 
46376937677490009712648124896970078050417018260538,
74324986199524741059474233309513058123726617309629,
91942213363574161572522430563301811072406154908250,
23067588207539346171171980310421047513778063246676,
89261670696623633820136378418383684178734361726757,
28112879812849979408065481931592621691275889832738,
44274228917432520321923589422876796487670272189318,
47451445736001306439091167216856844588711603153276,
70386486105843025439939619828917593665686757934951,
62176457141856560629502157223196586755079324193331,
64906352462741904929101432445813822663347944758178,
92575867718337217661963751590579239728245598838407,
58203565325359399008402633568948830189458628227828,
80181199384826282014278194139940567587151170094390,
35398664372827112653829987240784473053190104293586,
86515506006295864861532075273371959191420517255829,
71693888707715466499115593487603532921714970056938,
54370070576826684624621495650076471787294438377604,
53282654108756828443191190634694037855217779295145,
36123272525000296071075082563815656710885258350721,
45876576172410976447339110607218265236877223636045,
17423706905851860660448207621209813287860733969412,
81142660418086830619328460811191061556940512689692,
51934325451728388641918047049293215058642563049483,
62467221648435076201727918039944693004732956340691,
15732444386908125794514089057706229429197107928209,
55037687525678773091862540744969844508330393682126,
18336384825330154686196124348767681297534375946515,
80386287592878490201521685554828717201219257766954,
78182833757993103614740356856449095527097864797581,
16726320100436897842553539920931837441497806860984,
48403098129077791799088218795327364475675590848030,
87086987551392711854517078544161852424320693150332,
59959406895756536782107074926966537676326235447210,
69793950679652694742597709739166693763042633987085,
41052684708299085211399427365734116182760315001271,
65378607361501080857009149939512557028198746004375,
35829035317434717326932123578154982629742552737307,
94953759765105305946966067683156574377167401875275,
88902802571733229619176668713819931811048770190271,
25267680276078003013678680992525463401061632866526,
36270218540497705585629946580636237993140746255962,
24074486908231174977792365466257246923322810917141,
91430288197103288597806669760892938638285025333403,
34413065578016127815921815005561868836468420090470,
23053081172816430487623791969842487255036638784583,
11487696932154902810424020138335124462181441773470,
63783299490636259666498587618221225225512486764533,
67720186971698544312419572409913959008952310058822,
95548255300263520781532296796249481641953868218774,
76085327132285723110424803456124867697064507995236,
37774242535411291684276865538926205024910326572967,
23701913275725675285653248258265463092207058596522,
29798860272258331913126375147341994889534765745501,
18495701454879288984856827726077713721403798879715,
38298203783031473527721580348144513491373226651381,
34829543829199918180278916522431027392251122869539,
40957953066405232632538044100059654939159879593635,
29746152185502371307642255121183693803580388584903,
41698116222072977186158236678424689157993532961922,
62467957194401269043877107275048102390895523597457,
23189706772547915061505504953922979530901129967519,
86188088225875314529584099251203829009407770775672,
11306739708304724483816533873502340845647058077308,
82959174767140363198008187129011875491310547126581,
97623331044818386269515456334926366572897563400500,
42846280183517070527831839425882145521227251250327,
55121603546981200581762165212827652751691296897789,
32238195734329339946437501907836945765883352399886,
75506164965184775180738168837861091527357929701337,
62177842752192623401942399639168044983993173312731,
32924185707147349566916674687634660915035914677504,
99518671430235219628894890102423325116913619626622,
73267460800591547471830798392868535206946944540724,
76841822524674417161514036427982273348055556214818,
97142617910342598647204516893989422179826088076852,
87783646182799346313767754307809363333018982642090,
10848802521674670883215120185883543223812876952786,
71329612474782464538636993009049310363619763878039,
62184073572399794223406235393808339651327408011116,
66627891981488087797941876876144230030984490851411,
60661826293682836764744779239180335110989069790714,
85786944089552990653640447425576083659976645795096,
66024396409905389607120198219976047599490197230297,
64913982680032973156037120041377903785566085089252,
16730939319872750275468906903707539413042652315011,
94809377245048795150954100921645863754710598436791,
78639167021187492431995700641917969777599028300699,
15368713711936614952811305876380278410754449733078,
40789923115535562561142322423255033685442488917353,
44889911501440648020369068063960672322193204149535,
41503128880339536053299340368006977710650566631954,
81234880673210146739058568557934581403627822703280,
82616570773948327592232845941706525094512325230608,
22918802058777319719839450180888072429661980811197,
77158542502016545090413245809786882778948721859617,
72107838435069186155435662884062257473692284509516,
20849603980134001723930671666823555245252804609722,
53503534226472524250874054075591789781264330331690,
]

let asdfsum = [1,2,3]



function sumOf50DigitNums(a, b){
  return a + b 
}

console.log(arrOf50DigitNums.reduce(sumOf50DigitNums, 0))

