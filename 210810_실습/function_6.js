function getTimes(x , y) {
    var z = x * y;
    return z;       // <-- 결과값 리턴
}

var a = getTimes(123, 45);
console.log(a);

var b = getTimes(123,45) + 10000;
console.log(a);

console.log( getTimes(100, 20) );