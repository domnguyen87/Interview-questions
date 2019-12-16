//Print out the n-th entry in the fibonacci series
//The fibonacci series is an ordering of numbers where
//each number is the sum of the preceeding two
//
//Example: [0,1,1,2,3,5,8,13,21,34]
//fib(4)=== 3
//

//Iterative Solution
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