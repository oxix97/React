let cart = { name: "도서", price: 5000 };
let getTotal = function (cart) {
  return cart.price + "원";
};

let myCart =
  "장바구니에" +
  cart.name +
  "가 있습니다. 총 금액은 " +
  getTotal(cart) +
  " 입니다.";

function solution(numbers, hand) {
  let answer = "";
  let finger = 0;
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const center = [2, 5, 8, 0];

  numbers.map((number) => {
    if (center.includes(number)) {
      answer += "C";
    } else {
      if (left.includes(number)) {
        answer += "L";
      } else if (right.includes(number)) {
        answer += "R";
      }
    }
    finger = number;
  });

  return answer;
}

function Test() {
  const numbers1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
  const numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
  const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return <div>{}</div>;
}

export default Test;
