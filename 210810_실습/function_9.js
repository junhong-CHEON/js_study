function something(x, y, callback) {
    // x와 y의 연산 결과를 파라미터로 전달받은 callback에게 다시 전달하여 리턴값을 받아 처리함
    var result = callback(x, y);
    console.log(x + "와 " + y + "의 연산 결과는 " + result);
}

// 콜백함수로 사용될 함수 정의하기
function plus(a, b) { return a+b; }
function minus(a, b) { return a-b; }
function times(a, b) { return a*b; }
function div(a, b) { return a/b; }
function f(a, b) { return a*a + b; }

// 콜백함수 사용하기
something(3, 2, plus);
something(3, 2, minus);
something(3, 2, times);
something(3, 2, div);
something(3, 2, f);