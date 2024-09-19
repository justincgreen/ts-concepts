// Interfaces are used to describe the shape (structure) of an object

/* Typical JS object
  const user = {
    id: 0,
    name: 'Bill'
  }
*/

// Using an interface in typescript (mind the semicolon at the end of the type versus a comma) 
interface User {
  id: number;
  name: string;
  lastName?: string; // this is an optional property
}

const user: User = {
  id: 0,
  name: 'Bob'
}