let cart = {name: '도서', price: 5000}
let getTotal = function (cart) {
    return cart.price + '원';
};

let myCart = '장바구니에' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + ' 입니다.';

function Test() {
    return (
        (<li>{myCart}</li>)
    )
}

export default Test;