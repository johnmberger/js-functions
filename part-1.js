
sum = function(num1, num2){
  return (num1 + num2);
}
console.log(sum(1,2));

// 2.
isEqual = function(arg1, arg2) {
  if (arg1 === arg2){
    return true;
  } else {
    return false;
  }
}

console.log(isEqual('test', 'test'))

// 3.
discountPercentage = function(origAmount, discount) {
  if (discount > 100 || discount < 0) {
    return 'Invalid Discount';
  } else {
    return (origAmount * (discount/100));
  }
}

console.log(discountPercentage(125, 25));

// 4.
stringCapitalize = function(str) {
  str = str.toLowerCase().split(' ');
  for (i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  } return str.join(' ');
}

console.log(stringCapitalize('a long time ago in a galaxy far far away'));

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

evenNumbers(79);

// 6.
isDivisible = function(arg1, arg2) {
  if (arg1 % arg2 === 0 && arg2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(78, 24));

// 7. [Bonus]
oddNumbers = function(num) {
  if (typeof num !== 'number' || num % 1 !== 0) {
    console.log('Please enter an integer');
  } else if (num > 100 || num < 0) {
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

oddNumbers('potato');
