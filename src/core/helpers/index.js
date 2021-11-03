export function getRandomColor() {
  const r = Math.floor(Math.random() * 256).toString(16);
  const g = Math.floor(Math.random() * 256).toString(16);
  const b = Math.floor(Math.random() * 256).toString(16);
  return '0x' + r + g + b;
}

export function getRandom(maxNumber, minNumber = 0) {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

//Pythagoras formula
export function calculatePathLength(arr) {
  return Math.round(
    Math.sqrt(Math.pow(arr[0] - arr[2], 2) + Math.pow(arr[1] - arr[3], 2)),
  );
}

//Heron's formula
export function calculateTriangleArea(a, b, c) {
  const p = Math.round((a + b + c) / 2);
  return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
}

//calculate the area using the path and divide it by triangle
export function calculateAreaBySumOfTriangle(path) {
  const [startX, startY] = path;
  let area = 0;
  for (let i = 0; i < path.length - 2; i += 2) {
    const a = calculatePathLength([startX, startY, path[i], path[i + 1]]);
    const b = calculatePathLength([
      path[i],
      path[i + 1],
      path[i + 2],
      path[i + 3],
    ]);
    const c = calculatePathLength([path[i + 2], path[i + 3], startX, startY]);
    area += calculateTriangleArea(a, b, c);
  }
  return area;
}
