function solution(dartResult) {
    let count = 0;
    let stack = [];
    let len = dartResult.length;

    for (let i = 0; i < len; i = i + 2) {
        let score;
        let bonus = dartResult[i + 1];

        if (i + 1 < len && dartResult[i + 1] === '0') {
            score = 10;
            i++;
        } else {
            score = parseInt(dartResult[i]);
        }

        if (bonus === 'D') {
            score *= score;
        } else if (bonus === 'T') {
            score *= score * score;
        }

        if (i + 2 < len && dartResult[i + 2] === '*') {
            score *= 2;
            if (stack.length !== 0) {
                stack[stack.length - 1] *= 2;
            }

            i++;
        } else if (i + 2 < len && dartResult[i + 2] === '#') {
            score *= -1;
            i++;
        }

        stack.push(score);
    }

    console.log(stack);

    for (let i = 0; i < stack.length; i++) {
        count += stack[i];
    }

    return count;
}
