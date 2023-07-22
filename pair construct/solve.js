function cons(a, b) {
    function pair(f) {
        return f(a, b);
    }
    return pair;
}

function car(pair) {
    function getFirstElement(a, b) {
        return a;
    }
    return pair(getFirstElement);
}

function cdr(pair) {
    function getLastElement(a, b) {
        return b;
    }
    return pair(getLastElement);
}

let myPair = cons(3, 4);

console.log("car:", car(myPair)); // Output: 3
console.log("cdr:", cdr(myPair)); // Output: 4
