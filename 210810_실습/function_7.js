// say_hello라는 이름을 갖는 일반적인 함수의 사용과 호출
function say_hello(msg) {
    console.log("say_hello(%s)", msg);
}

say_hello("Hello Node!!!");

// 함수는 Object 타입으로 변수의 일종이므로 변수에 함수를 대입 가능.
const say = say_hello;

// 함수가 대입된 변수는 그 자체가 함수의 역할을 한다.
say("안녕하세요. 노드!!!");