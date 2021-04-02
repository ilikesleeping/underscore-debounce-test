var i = 0;

function value() {
    return i;
}

function increment() {
    return ++i;
}

function reset() {
    i = 0;
}

module.exports = {
    increment,
    reset,
    value,
}