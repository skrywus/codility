// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    let index = null;
    const sum = [];
    const binary = N.toString(2);

    for(let i = 0; i < binary.length; i++) {
        if(binary[i] === '1') {
            if(index === null) {
                index = 0;
            } else {
                sum.push(index);
                index = 0;
            }

        } else {
            index++;
        }
    }

return sum.length ? sum.sort((a, b) => a > b ? -1 : 1)[0] : 0;
}
