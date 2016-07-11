// 1.
sum = function(num1, num2){
  return (num1 + num2);
}

// 2.
isEqual = function(arg1, arg2) {
  if (arg1 === arg2){
    return true;
  } else {
    return false;
  }
}

// 3.
discountPercentage = function(origAmount, discount) {
  if (discount > 100 || discount < 0) {
    return 'Invalid Discount';
  } else {
    return (origAmount * (discount/100));
  }
}

// 4.
stringCapitalize = function(str) {
  str = str.toLowerCase().split(' ');
  for (i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  } return str.join(' ');
}

// 5.
evenNumbers = function(num){
  if (num > 100 || num < 0) {
    console.log('Please enter a number between 1 and 100');
  } else {
    for (i = 0; i <= num; i++) {
      if (i % 2 === 0) {
      console.log(i)
      }
    }
  }
}

// 6.
isDivisible = function(arg1, arg2) {
  if (typeof arg1 === 'number' &&  typeof arg2 === 'number') {
    return true
  } else {
    return false;
  }
}

// 7. [Bonus]
oddNumbers = function(num) {
  if (num > 100 || num < 0) {
    console.log('Please enter a number between 1 and 100');
  } else if (num > 40){
    for (i=40; i<=num; i++){
      if (i % 2 === 1){
        console.log(i);
      }
    }
  } else if (num < 40){
    for (i=0;i<=40;i++){
      if (i % 2 === 1){
        console.log(i);
      }
    }
  } else {
    console.log('You picked 40. There were no instructions for that!');
  }
}
