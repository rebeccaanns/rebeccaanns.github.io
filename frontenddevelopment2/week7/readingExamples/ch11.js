function collatz(n, sequence=[n]){
    if (n === 1) {
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0){
        n = n/2;
    }
    else {
        n = 3*n + 1;
    }

    return collatz(n, [...sequence,n]);
}