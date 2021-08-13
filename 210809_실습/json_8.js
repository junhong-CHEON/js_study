var foo = {
    name: "자바스크립트",
    age: 19
};

// 존재하지 않는 값에 대한 출력 --> undefined
console.log(foo.email);

// 존재하지 않는 값을 활용한 연산 (age를 aga로 오타가 났다고 가정)
// --> undefined + 1 --> 숫자가 아님
var nextAge = foo.aga + 1;

// 연산을 수행할 수 없으므로 연산 결과는 NaN (Not a Number)라는 특수값이 된다.
console.log(nextAge);

foo.email = "javascript@helloworld.com";
console.log(foo);