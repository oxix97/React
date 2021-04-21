import './index.css';
import axios from "axios";
import React, {useEffect, useState} from 'react';

function MainPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://a25c0af4-74d9-4935-b479-c512eabf252a.mock.pstmn.io/products')
            .then(function (result) {
                const products = result.data.products;
                setProducts(products);
            })
            .catch(function (error) {
                console.error("error : ", error);
            });
    }, []);

    return (
        <div>
            {/*<Server/>*/}
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt="icons"/>
                </div>
            </div>

            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="banner1.png"/>
                    <img src="images/banners/banner2.png" alt="banner2.png"/>
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {products.map(function (products, index) {
                        return (
                            <div className="product-card">
                                <img alt="ball" className="product-img"
                                     src={products.imageUrl}/>
                                <div className="product-contents">
                                    <span className="product-name">
                                        {products.name}
                                    </span>
                                    <span className="product-price">
                                        {products.price}원
                                        </span>
                                </div>
                                <div className={"product-seller"}>
                                    <img src="images/icons/avatar.png" alt="" className="product-avater"/>
                                    <span>{products.seller}</span>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </div>

            <div id="footer">
                아무 내용 없음
            </div>

        </div>
    );
}

export default MainPage;