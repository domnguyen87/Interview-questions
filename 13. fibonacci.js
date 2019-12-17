//Print out the n-th entry in the fibonacci series
//The fibonacci series is an ordering of numbers where
//each number is the sum of the preceeding two
//
//Example: [0,1,1,2,3,5,8,13,21,34]
//fib(4)=== 3
//

//Iterative Solution: Linear runtime
function fib(n) {
    const result = [0, 1]

    for (let i = 2; i <= n; i++) {
        const a = results[i - 1]
        const b = results[i - 2]

        results.push(a + b);
    }

    return result[n]
}

//Recursive Solution **IMPORTANT**
function fib(n) {
    if (n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

//Solution above is an exponential run time, take a long time to run
//Question interviewer might ask : Is there to improve the runtime?
//Answer
//Memoization: Store the arguments of each fx call along with the result
//If the function is called again with the same arguments, return the precomputed
//results, rather than running the fx again

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
    };
}

function slowfib(n) {
    if (n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowfib);