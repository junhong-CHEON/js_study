function something(x, y, callback) {
    // x와 y의 연산 결과를 파라미터로 전달받은 callback에게 다시 전달하여 리턴값을 받아 처리함
    var result = callback(x, y);
    console.log(x + "와 " + y + "의 연산 결과는 " + result);
}

// 주어진 파라미터 범위 안에서 모든 구구단 결과값의 총 합을 리턴하는 콜백
something(2, 4, function(a, b) {
    var result = 0;
    for (let i=a; i<=b; i++) {
        for (let j=1; j<10; j++) {
            const k = i * j;
            result += k;
            console.log(i + " x " + j + " = " + k);
        }
        console.log("---------");
    }
    return result;
});