# JSX

### JSX ?

자바 스크립트를 확장한 언어이다. 리액트를 이용해 개발을 할 때 JSX를 사용하지 않아도 되지만 일반적으로는 사용하고 있다. 자바 스크립트 확장언어란 어떤 것인가?

쉽게 말해 자바스크립트 코드 내붸 HTML 태그를 사용할 수 있게 해주는 문법이다. 어떤 코드가 최종적으로 만들어지는ㄴ HTML 코드를 파악하기 쉽게 만들어주는지 어렵지 않게 판단 할 수 있게 한다.

### 문법

#### 스코프에 React가 있어야 하낟.

JSX 태그는 React.createElement 함수를 호출하는 형태로 변환된다. 따라서 참조할 수 있는 범위 내부에 리액트가 없으면 실행할 때 오류가 발생한다.

##### ex)

~~~jsx
// React가 import 되지 않은 상태면
import React from "react";

function HelloComponent() {
    // React.ceateElement 함수를 참조할 수 없어 실행할 때 오류 발생
    return <h1>Hello, World</h1>;
}
~~~

----

#### 인라인 표현식

{}로 감싸서 function의 표현식을 JSX 내부에 삽입할 수 있다.

##### ex)

~~~jsx
const fullnames = {
    chan: 'Chan',
    jong: 'Jong',
    oxix: 'JongChan'
};

const getName = nickName => fullnames[nickName];
const element = <h1>Hello, {getName('oxix')}</h1>;
~~~

---

#### JSX 표현식으로 다루기

JSX 태그는 트랜스파일 이후 일반적인 자바스크립트 객체가 된다. 따라서 JSX를 변수에 넣거나 함수의 매개변수로 전달할 수도 있다. 따라서, 조건문과 반복문 내부에서도 사용이 가능하다.

##### ex)

~~~jsx
function Hello(name) {
    if (typeof name === 'string') {
        return <h1>Hello, {name}</h1>
    }
    return <h1>Who r u ?</h1>
}

function Names(names) {
    const list = [];
    for (let i = 0; i < names.length; i++) {
        list.push(<li>names[i]</li>)
    }
    return <ul>{list}</ul>
}

function wrap(component) {
    return <div>{component}</div>
}

wrap(<h1>Hello ~~</h1>);
~~~

#### 속성 지정

~~~jsx
// text type에 some vaule 라는 문자열 전달
const element = <input type="text" value="some value"/>
~~~

---

#### 표현식 지정

~~~jsx
const inputValue = 'some value';
const element = <input type="text" value={inputValue}/>;
~~~

---

#### 속성 이름만 지정

~~~jsx
// 밑의 코드 두 문장은 동일한 문장이다.
const element1 = <input type="checkbox" checked/>
const element2 = <input type="checkbox" checked={true}/>
~~~

---

### 자식 요소 지정

JSX는 태그 내부에 자식 요소를 지정할 수 있다.

##### ex)

~~~jsx
const heading = (
    <h1>
        Hello, <strong> JSX </strong>
    </h1>
);
~~~

----
#### 자식 요소에 변수 또는 식 포함 시키기

~~~jsx
const child = <div>{child}</div>;
const parent = <div>{parent}</div>;

const name = "JSX";
const heading = (
    <h1>hello, {name}</h1>
);
~~~

#### 자식 요소에 배열 전달

~~~jsx
const list = (
    <ul>
        {[1,2,3].map(num => <li>{num}</li>)}
    </ul>
)
~~~




