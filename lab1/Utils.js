module.exports = {
  generateMatrix(
    m = 50, 
    n = 50, 
    minLimit = -250, 
    maxLimit = 1010
  ) {
    const matrix = new Array(m);
  
    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = [];
  
      for (let j = 0; j < n; j++) {
        matrix[i][j] = minLimit + Math.floor(
          Math.random() * (maxLimit - minLimit + 1)
        );
      }
    }
  
    return matrix;
  },

  flattenMatrix(matrix) {
    return matrix.reduce((flatArray, row) => [...flatArray, ...row], []);
  },

  getMatrixFromArray(array, m, n) {
    const matrix = new Array(m);

    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = array.slice(i * m, (i + 1) * n);
    }

    return matrix;
  },

  swap(array, first, second) {
    [array[first], array[second]] = [array[second], array[first]];
  }

  // createTournamentTree() {
  //   function _createNode(value) {
  //     return {
  //       value,
  //       left: null,
  //       right: null
  //     };
  //   }
    
  //   return {
  //     root: null,
      
  //     insert(value) {
  //       const node = _createNode(value);

  //       if (root === null) {
  //         this.root = node;

  //         return this;
  //       }

  //       let current = this.root;

  //       while (current) {
  //         if (value <= current.value) {
  //           if (current.left === null) {
  //             current.left = node;

  //             return this;
  //           }

  //           current = current.left;
  //         } else {
  //           if (current.right === null) {
  //             current.right = node;

  //             return this;
  //           }

  //           current = current.right;
  //         }
  //       }
  //     },

  //     findAndReplace() {

  //     }
  //   };
  // }
} 