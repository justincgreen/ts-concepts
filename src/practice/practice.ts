// write a function that returns a username 
const outputUser = (user: string) => {
  console.log(user);
}

//outputUser('Bob');

// write a function that returns a number 
const outputNumber = (num: number) => {
  console.log(num)
}

// outputNumber(1);

// write a function that returns an array of strings
const outputStringArray = (strArray: string[]) => {
  console.log(strArray);
}

// outputStringArray(['taco', 'bell']);

// write a function that returns an array of numbers
const outputNumberArray = (numArray: Array<number>) => {
  console.log(numArray);
}

// outputNumberArray([1,2,3]);

// Create an object interface
interface ObjShape {
  id: number;
  name: string;
}
const myObj: ObjShape = {
  id: 0,
  name: 'Hank'
}

console.log(myObj);