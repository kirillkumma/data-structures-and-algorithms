const Utils = require("./Utils");
const Sorts = require("./Sorts");

function compareWithNativeSort(matrix, sort) {
  console.log("Initial matrix: ", matrix);
  const start = Date.now();
  const sortedMatrix = sort(matrix);
  const end = Date.now();
  
  const startNative = Date.now();
  Sorts.nativeSort(matrix);
  const endNative = Date.now();

  console.log("Sorted matrix: ", sortedMatrix);
  console.log(`User's sort: ${end - start} ms`);
  console.log(`Native sort: ${endNative - startNative} ms`);
}

const sort = process.argv[2];
const m = parseInt(process.argv[3]);
const n = parseInt(process.argv[4]);
const minLimit = parseInt(process.argv[5]);
const maxLimit = parseInt(process.argv[6]);

const matrix = Utils.generateMatrix(m, n, minLimit, maxLimit);

switch (sort) {
  case "selection":
    console.log("\n<--- Selection sort --->");
    compareWithNativeSort(matrix, Sorts.selectionSort);
    break;
  case "insertion":
    console.log("\n<--- Insertion sort --->");
    compareWithNativeSort(matrix, Sorts.insertionSort);
    break; 
  case "bubble":
    console.log("\n<--- Bubble sort --->");
    compareWithNativeSort(matrix, Sorts.bubbleSort);
    break;
  case "shell":
    console.log("\n<--- Shell sort --->");
    compareWithNativeSort(matrix, Sorts.shellSort);
    break;
  case "quick":
    console.log("\n<--- Quick sort --->");
    compareWithNativeSort(matrix, Sorts.quickSort);
    break;
  case "heap":
    console.log("\n<--- Heap sort --->");
    compareWithNativeSort(matrix, Sorts.heapSort);
    break;
  default:
    throw new Error("Sort's name must be provided. For example: yarn lab1 quick");
}