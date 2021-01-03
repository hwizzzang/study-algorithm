// 1. 스택 만들기
function Stack() {
    var items = [];

    this.push = function (e) {
        items.push(e);
    };

    this.pop = function () {
        return items.pop();
    };

    thie.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

    this.clear = function () {
        items = [];
    };

    this.print = function () {
        console.log(items.toString());
    };
}

// 2. 10진수에서 2진수로 변환
function devideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';

    // 나눗셈 몫이 0이 아닐 때까지
    while (decNumber > 0) {
        // 나머지를 스택에 밀어 넣음
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        // decNumber는 스스로를 2로 나눈 몫으로 업데이트 함
        decNumber = Math.floor(decNumber / 2);
    }

    // 스택이 텅 빌 때까지 원소를 pop 메소드로 꺼내어 문자열로 연결
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(divideBy2(233));

// 2-1. 2진법 외의 진법으로 변환(제수를 인자로 받음)
function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}
