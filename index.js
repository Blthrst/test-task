//TASK 1
function sayComputers(num) {
  const ends = new Map();

  ends.set("plural", "ов");
  ends.set("fromTwoToFour", "а");

  strNum = num.toString();
  lastTwoChars = strNum.substring(strNum.length - 2, strNum.length);

  if (num === 0 || lastTwoChars[1] === "0")
    return `${num} компьютер${ends.get("plural")}`;

  if (num === 1 || lastTwoChars[1] === "1") return `${num} компьютер`;

  if (
    (num >= 5 && num <= 19) ||
    (Number(lastTwoChars) >= 5 && Number(lastTwoChars) <= 19) ||
    (Number(lastTwoChars[1]) >5 && Number(lastTwoChars[1]) <= 9)
  ) {
    return `${num} компьютер${ends.get("plural")}`;
  }

  if ((num >= 2 && num <= 4) || (Number(lastTwoChars[1]) >= 2 && Number(lastTwoChars[1]) <= 4)) {
    return `${num} компьютер${ends.get("fromTwoToFour")}`;
  }
}

console.log(sayComputers(2150)); // 2150 компьютеров
console.log(sayComputers(61)); // 61 компьютер
console.log(sayComputers(2214)); // 2214 компьютеров
console.log(sayComputers(22)); // 22 компьютера

//=============================================

//TASK 2
function findGeneralDividers(arr) {
    const result = []
    for (const num of arr) {
        const temp = []

        for (let i = 0; i < num; i++) {
            if (num % i === 0 && i !== 1) {
                temp.push(i)
            }
        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < temp.length; j++) {
                if (!(arr[i] % temp[j] === 0)) {
                    temp.splice(j, 1)
                }
            }
        }

        for (const restNum of temp) {
            if (!result.includes(restNum)) result.push(restNum)
        }
        temp.length = 0
    }

    return result
}

console.log(findGeneralDividers([42, 12, 18])) // [2, 3, 6]
console.log(findGeneralDividers([2, 4, 8])) // [2]
console.log(findGeneralDividers([27, 77, 122])) // []
console.log(findGeneralDividers([121, 121, 121])) // [11]

//================================================

//TASK 3
function findPrimes(min, max) {
  const result = new Set();

  for (let i = min; i <= max; i++) {
    for (let j = 2; j < i; j++) {
      if (
        i % 5 !== 0 &&
        i % 9 !== 0 &&
        i % 6 !== 0 &&
        i % 7 !== 0 &&
        i % 8 !== 0 &&
        i % 2 !== 0 &&
        i % 3 !== 0
      )
        result.add(i);
    }
  }

  return Array.from(result);
}

console.log(findPrimes(11, 20)); // [11, 13, 17, 19 ]

//===========================================

//TASK 4
function MultiplyTable(num) {
  const result = [];

  let temp = [];

  for (let i = 0; i <= num; i++) {

    if (i === 0) {

      const topLine = [];
      topLine.push(" ");
      for (let j = 1; j <= num; j++) {
        topLine.push(j);
      }
      result.push(topLine)

    } else {
        temp.push(result[0][i])
      for (let j = 1; j <= num; j++) {
        temp.push(i * j);
      }

      result.push(temp);
      temp = [];
    }
  }

  const unitedArrays = result.map(elem => {
    return elem.join(" ")
  })

  return unitedArrays.join("\n")
}

console.log(MultiplyTable(5));
