function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper = '*') {
  return function(adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`
  }
}

let Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

function actionApplyer(start, fnList) {
  for(let cb of fnList) {
    start = cb(start);
  }
  return start;
}