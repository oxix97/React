import './index.css';

function MainPage(){
    return (
        <div>
            <div id = "header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt="icons"/>

                </div>
            </div>

            <div id = "body">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="banner1.png"/>
                    <img src="images/banners/banner2.png" alt="banner2.png"/>
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    <div className= "product-card">
                        <img src="images/products/basketball1.jpeg" alt="notebook1" className="product-img"/>
                    <div className="product-contents">
                        <span className = "product-name">
                            농구공
                        </span>
                        <span className ="product-price">
                            30,000원
                        </span>
                    </div>
                    <div className={"product-seller"}>
                        <img src="images/icons/avatar.png" alt="" className="product-avater"/>
                        <span>스티브 잡스</span>
                    </div>
                    </div>
                </div>
            </div>

            <div id = "footer">

            </div>

        </div>
    );
}

export default MainPage;