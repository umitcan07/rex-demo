export const poisson = (lambda: number): number => {
    // Knuth's algorithm
    let k = 0;
    let p = 1;
    const L = Math.exp(-lambda);
    do {
        k++;
        p *= Math.random();
    } while (p > L);
    return k - 1;
}