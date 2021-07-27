import React from "react";

function Js_026() {
  //연산자에 의한 자료형 변환
  // console.log('5'+1);
  // console.log('5'-1);
  // console.log('5'*2);
  // console.log('5'/2);
  //덧셈은 문자열, 숫자열을 반환하지만 , 뺄셈, 곱셈, 나눗셈은 항상 숫자형을 반환한다.

  let str = 5 + "1";
  console.log(str);
  console.log(typeof str);
  let num = +str;
  console.log(num);
  console.log(typeof num);
  return <div></div>;
}

export default Js_026;
