//REST PARAMETER = accept indefinite number of parameter in one function
//pack arguments into an array
let a = 1;
let b = 2;
let c = 2;
let d = 2;
let e = 2;
let f = 2;

//make macthing function of "sum"
//...numbers is an array of variable above
function sum(...numbers) {
  let total = 0;
  //iterate to access the array of ...numbers
  for(let number of numbers){
    total += number
  }
  return total;
}
console.log(sum(a, b, c, d, e, f));
//you can read more about the different between spread operator and rest parameter on google
//Thank you bro code