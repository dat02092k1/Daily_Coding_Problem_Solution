class SparseArray {
    constructor(arr, size) {
        this.size = size;
        this.sparseDict = {};
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                this.sparseDict[i] = arr[i];
            }
        }
    }

    set(i, val) {
        if (i >= 0 && i < this.size) {
            if (val === 0 && this.sparseDict.hasOwnProperty(i)) {
                delete this.sparseDict[i];
            } else if (val !== 0) {
                this.sparseDict[i] = val;
            }
        }
    }

    get(i) {
        if (i >= 0 && i < this.size) {
            return this.sparseDict[i] || 0;
        } else {
            throw new Error("Index out of range");
        }
    }
}

// Example usage
const originalArray = [0, 0, 0, 4, 0, 0, 7, 0, 0];
const size = originalArray.length;

const sparseArray = new SparseArray(originalArray, size);

console.log(sparseArray.get(3));  // Output: 4
console.log(sparseArray.get(6));  // Output: 7

sparseArray.set(3, 10);
console.log(sparseArray.get(3));  // Output: 10

sparseArray.set(6, 0);
console.log(sparseArray.get(6));  // Output: 0
