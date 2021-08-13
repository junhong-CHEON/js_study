function foo(x, y) {
    console.log("x=%s, y=%s", x, y);

    // undefined값은 연산을 수행할 수 없으므로, 파라미터를 검사 후 처리해야 함
    var result = 0;
    if (x != undefined) { result += x; }
    if (y != undefined) { result += y; }
    console.log(" >> result=%d", result);
}

foo(100, 200);   // var x=100,y=200
foo(1000);       // var x=1000,y=undefined
foo();           // var x=undefined,y=undefined