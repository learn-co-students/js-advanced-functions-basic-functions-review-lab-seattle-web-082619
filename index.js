function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective (flair="*") {
  return function(value="special") {
    return `You are ${flair}${value}${flair}!`
  }
}

let Calculator = new Object()

Calculator.add = function() {
  return 1 + 3;
}

Calculator.subtract = function() {
  return 1 - 3;
}

Calculator.multiply = function() {
  return 1 * 3;
}

Calculator.divide = function() {
  return 10 / 5;
}

function actionApplyer(integer, fnArray) {
  let num = integer
  let answer;
  if (fnArray.length === 0) {
    return integer;
  }
  else {
    for (let fn of fnArray) {
      answer = fn(num)
      num = answer
    }
  }
  return answer
}

  // arrayOfTransforms = [
  //   function(a){ return a * 2 },
  //   function(a){ return a + 1000},
  //   function(a){ return a % 7 }
  // ]
