/*
  Union Types are combined types
*/

const printId = (id: number | string) => {
  if(typeof id === 'string') {
    console.log('Your ID is: ' + id.toUpperCase());
  }else {
    console.log(id);
  }
}

printId(101);
printId('yoda');