
var createCounter = function(n) {
    n=n-1
    return function() {
        return n = n + 1
    };
};