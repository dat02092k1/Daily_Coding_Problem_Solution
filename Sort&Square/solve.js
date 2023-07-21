// brute force:
let arrIp = [-9, -2, 0, 2, 3];

function square(arr) {
    let arrSquare = arr.map((item) => item*item);
    return arrSquare;
}

function sortList(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortList(square(arrIp)));
// Output: [0, 4, 4, 9, 81]
