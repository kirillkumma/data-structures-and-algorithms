let mat = [
  [3, 3, 5, 6],
  [2, 2, 1, 8],
  [1, 1, 1, 2],
  [2, 2, 1, 8],
];

let rowLen = mat[0].length;
let columnLen = mat.length;

mat.forEach(e => {
  console.log(e);
});
console.log("\n");

let buff = [];
let triangleDia = Math.min(rowLen, columnLen) - 1;
let countMainDia = Math.abs(rowLen - columnLen) + 1;
let lenMainDia = Math.min(rowLen, columnLen);

for (let i = 0; i < triangleDia; i++) {
  for (let j = 0; j < i + 1; j++) {
    buff.push(mat[j][rowLen - 1 - i + j]);
  }

  buff.sort((a, b) => {
    return a - b;
  });

  for (let j = 0; j < i + 1; j++) {
    mat[j][rowLen - 1 - i + j] = buff[j];
  }

  buff = [];
}

for (let i = 0; i < countMainDia; i++) {
  if (rowLen > columnLen) {
    for (let j = 0; j < lenMainDia; j++) {
      buff.push(mat[j][j + i]);
    }

    buff.sort((a, b) => {
      return a - b;
    });

    for (let j = 0; j < lenMainDia; j++) {
      mat[j][j + i] = buff[j];
    }

    buff = [];
  } else {
    for (let j = 0; j < lenMainDia; j++) {
      buff.push(mat[j + i][j]);
    }

    buff.sort((a, b) => {
      return a - b;
    });

    for (let j = 0; j < lenMainDia; j++) {
      mat[j + i][j] = buff[j];
    }

    buff = [];
  }
}

for (let i = 0; i < triangleDia; i++) {
  for (let j = 0; j < i + 1; j++) {
    buff.push(mat[columnLen - 1 - i + j][j]);
  }

  buff.sort((a, b) => {
    return a - b;
  });

  for (let j = 0; j < i + 1; j++) {
    mat[columnLen - 1 - i + j][j] = buff[j];
  }

  buff = [];
}

mat.forEach(e => {
  console.log(e);
});
