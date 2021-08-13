var myJson = {}; // 빈 객체

for (var i=0; i<10; i++) {
    var key = "value" + i;
    myJson[key] = i * 100;
}
console.log(myJson);