function bar(x=1, y=2) {
    console.log("x=%s, y=%s", x, y);
    var result = x + y;
    console.log(" >> result=%d", result);
}

bar(100, 200);   // var x=100,y=200
bar(1000);       // var x=1000,y=2
bar();           // var x=1,y=2