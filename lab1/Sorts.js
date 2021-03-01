const Utils = require("./Utils");

module.exports = {
  nativeSort(matrix) {
    const array = Utils.flattenMatrix(matrix);
    
    array.sort((first, second) => second < first ? 1 : -1);

    return Utils.getMatrixFromArray(
      array, 
      matrix.length, 
      matrix[0].length
    );
  },

  selectionSort(matrix) {
    const array = Utils.flattenMatrix(matrix);
    
    for (let i = 0; i < array.length; i++) {
      let min = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }

      if (min !== i) {
        Utils.swap(array, i, min);
      }
    }

    return Utils.getMatrixFromArray(
      array, 
      matrix.length, 
      matrix[0].length
    );
  },

  insertionSort(matrix) {
    const array = Utils.flattenMatrix(matrix);

    for (let i = 1; i < array.length; i++) {
      const key = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }

      array[j + 1] = key;
    }

    return Utils.getMatrixFromArray(
      array,
      matrix.length,
      matrix[0].length
    );
  },

  bubbleSort(matrix) {
    const array = Utils.flattenMatrix(matrix);

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          Utils.swap(array, j, j + 1);
        }
      }
    }

    return Utils.getMatrixFromArray(
      array,
      matrix.length,
      matrix[0].length
    );
  },

  shellSort(matrix) {
    const array = Utils.flattenMatrix(matrix);

    let gap = Math.floor(array.length);

    while (gap > 0) {
      for (let i = gap; i < array.length; i++) {
        const key = array[i];
        let j = i;

        while (j >= gap && array[j - gap] > key) {
          array[j] = array[j - gap];
          j -= gap;
        }

        array[j] = key;
      }

      gap = Math.floor(gap / 2);
    }

    return Utils.getMatrixFromArray(
      array,
      matrix.length,
      matrix[0].length
    );
  },

  // tournamentSort(matrix) {
  //   const array = Utils.flattenMatrix(matrix);

  //   if (array.length % 2 !== 0) array.push(Infinity);



  //   return Utils.getMatrixFromArray(
  //     array,
  //     matrix.length,
  //     matrix[0].length
  //   );
  // }

  quickSort(matrix) {
    const array = Utils.flattenMatrix(matrix);

    function _sort(array) {
      if (array.length < 2) return array;

      const pivot = array[0];
      const left = [];
      const right = [];

      for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
          left.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }

      return [..._sort(left), pivot, ..._sort(right)];
    }
    

    return Utils.getMatrixFromArray(
      _sort(array),
      matrix.length,
      matrix[0].length
    );
  },

  heapSort(matrix) {
    const array = Utils.flattenMatrix(matrix);
    const length = array.length;
    
    function _heapify(array, length, i) {
      let largest = i;
      let left = i * 2 + 1;
      let right = left + 1;

      if (left < length && array[left] > array[largest]) {
        largest = left;
      }

      if (right < length && array[right] > array[largest]) {
        largest = right;
      }

      if (largest !== i) {
        Utils.swap(array, i, largest);

        _heapify(array, length, largest);
      }

      return array;
    }

    for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
      _heapify(array, length, i);
    }

    for (let k = length - 1; k >= 0; k--) {
      Utils.swap(array, 0, k);
      _heapify(array, k, 0);
    }

    return Utils.getMatrixFromArray(
      array,
      matrix.length,
      matrix[0].length
    );
  }
}