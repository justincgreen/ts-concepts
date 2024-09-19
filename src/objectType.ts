const printCoord = (pt: { x: number; y: number; z?: string }) => {
  console.log(`The x coordinate value is ${pt.x}`);
  console.log(`The y coordinate value is ${pt.y}`);
  pt.z ? console.log(pt.z) : null;
}

// printCoord({x: 3, y: 7});
printCoord({x: 3, y: 7, z: 'Rocko'});