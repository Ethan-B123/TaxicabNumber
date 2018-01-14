
function cube(n) {
  return Math.pow(n, 3);
}

const cubes = {};
const cubeArr = [];
const matches = {};

function taxiSums(num) {
  let t = 1;
  let found;
  while (!found) {
    cubes[cube(t)] = t;
    cubeArr.push(cube(t));
    t++;
    found = checkPairSums(num);
  }
  found.unshift(cube(found[0][0]) + cube(found[0][1]))
  return found;
}

function checkPairSums(n) {
  const lastCube = cubeArr[cubeArr.length - 1];
  for (let i = 0; i < cubeArr.length; i++) {
    const sum = cubeArr[i] + lastCube;
    if (matches[sum]) {
      matches[sum].push([cubeArr[i], lastCube]);
    } else {
      matches[sum] = [[cubeArr[i], lastCube]];
    }
    if (matches[sum].length === n) {
      return matches[sum].map( arr => (
        [cubes[arr[0]], cubes[arr[1]]]
      ));
    }
  }
  return false;
}


const n = parseInt(process.argv[2]);
console.log(taxiSums(n));