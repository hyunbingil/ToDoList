### 변수
1. 생성
2. 초기화
3. 사용

변수의 값을 안바꾸고 싶다면 const를 사용하면 된다. ~> 되도록 이거 쓰기..!

값이 바뀌어도 상관없다면 let 사용.

### 주석(comment)
// 이렇게 하면 된다잉
/* */

### 변수에 넣을 수 있는 data 종류
- string : ""
- boolean : true/false ~> 텍스트 아님.
- number
- float

## 데이터를 정렬하는 방법
### 1. Array
: [] 사용
### 2. Object
: 각 value에 이름을 줄 수 있음.
: {} 사용
ex) const nicoInfo = {name: "Nico", age: 33, gender: "Male"}
console.log(nicoInfo.gender)
~> const로 object를 정의했지만 object안의 값들 nicoInfo.gender = "female" 이런식으로 바꿀 수 있음. 그런데 nicoInfo 자체는 바꿀 수 없음.(안에 값은 바꿀수있다는 말.)
~> Array를 object안에 넣을 수 있음. 
{[]} 가능
[{name: "kimchi", fatty: flase}] 이렇게도 가능.

### 함수
function sayHello(a){
    console.log('Hello!',a);
}

sayHello(hyunbin);

### String 방식
: `(백틱)을 사용한다.
function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
}

return 값을 정의해줘야 변수를 함수로 지정해줘도 undefined가 되지 않고 잘 출력 된다.
ex) 
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayHello("Nicolas",14)
console.log(greetNicolas)
-----------------------------------------
### document.querySelector
: 노드의 첫번째 자식을 반환
~> id로 찾는다 : document.querySelector("#title");
~> class로 찾는다 : document.querySelector(".title");

## Event
: 자바스크립트는 이벤트를 다룰 함수를 만들때마다 자동적으로 함수를 객체에 붙임.
### window.addEventListener()
: window.addEventListener(,함수)
~> 이때 함수() 이렇게 적으면 바로 함수가 호출된다. 그걸 원하지 않으면 함수만 적도록!

#### if else if else
#### &&와 ||
- && : ture && true = ture 만 true
- || : false || false = false 만 false

### prompt
: 유저에게 뭘 물어볼 수 있음!

## event
: javascript dom event mdn 검색하면 나옴
- mouseenter : 마우스 들어갈때마다 ..!
- click
- resize

## contains(String)
: value가 존재 하는지 체크
## remove, add
## toggle
:if else를 간단하게!

## 함수
### setInterval(실행할 함수, 실행할 시간 간격)
: 1초 = 1000
### ternary operator(삼항연산자)
: 작은 if라고 생각하면 된다.
ex) seconds < 10 ? `0${seconds}` : seconds
        조건            참           거짓

### querySelector()
: 원하는 셀렉터는 다 가져온다. 클래스, css 방식으로... 클래스, 태그, 아이디...등
~> 찾은 첫번째 것을 가져옴.

### querySelectorall()
: 모든걸 가져온다. 클래스명에 따른 element들을 가져오는데 array로 준다.

### get element by ID, get element by tag name
: input, body, html, div, section 등. . .

-------------------------------------

### local storage
: javascript의 작은 정보를 컴퓨터에 저장하는 것
ex) 시계 = 참/거짓, 사람이름 등..!