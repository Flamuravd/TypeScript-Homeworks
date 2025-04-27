// Exercise 1

function areTheyInLove(flowerOne: number, flowerTwo: number): boolean {
  return (flowerOne % 2 === 0) !== (flowerTwo % 2 === 0);
}

console.log(areTheyInLove(4, 3));
console.log(areTheyInLove(2, 4));
console.log(areTheyInLove(3, 5));

/*  ************************************************* */


// Exercise 2

interface Person {
  name: string,
  age: number,
  gender: "male" | "female"
}

function filterByProperty(people: Person[], property: string, value: string) {
  return people.filter(person => {
    return String(person[property as keyof Person]) === value;
  });
};

const peopleArr: Person[] = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 30, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Flamur", age: 27, gender: "male" }
]; 

const genderMale = filterByProperty(peopleArr, "gender", "male");
console.log(genderMale);

const ageThirty = filterByProperty(peopleArr, "age", "30");
console.log(ageThirty);

/* ********************************************************* */


// Exercise 3 

function doubleNum(numbers: number[]): number[] {
  return numbers.map(num => num * 2);
}

const nums = [3, 5, 9, 11];
const numsDoubled = doubleNum(nums);
console.log(numsDoubled);

/* ************************************************************* */


// Exercise 4

function booleanToString(b: boolean): string {
  return b.toString();
}

console.log(booleanToString(true));
console.log(booleanToString(false));

/* ************************************************************* */


// Exercise 5

function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4]));
console.log(calculateAverage([]));

/* *****************************************************************+ */


// Exercise 6

function betterThanAverage(classScores: number[], myScore: number): boolean {
  const combinedScores = [...classScores, myScore];
  const average = combinedScores.reduce((sum, score) => sum + score, 0) / combinedScores.length;

  return myScore > average;
}

console.log(betterThanAverage([70, 80, 90], 95));

/* ********************************************************************* */


// Exercise 7

function countPositivesSumNegatives(input: number[] | null): [number, number] | [] {
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  for (const num of input) {
    if (num > 0) {
      positiveCount++;
    }
    else if (num < 0) {
      negativeSum += num;
    }
  }

  return [positiveCount, negativeSum];
}

const result = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
console.log(result);

/* *************************************************************************** */


// Exercise 8

function evenOrOdd(num: number): "Even" | "Odd" {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(9));