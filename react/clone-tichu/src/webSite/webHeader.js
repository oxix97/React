function head() {
    return (
        <div id="header">
            <div id="header-area">
                <div id="header-area-start">
                    <img src="images/startplayup.png" alt="logo"/>
                    <input className="search" type="search"/>
                    <input type="image" src="images/search.png" value="검색"/>
                </div>
                <div id="header-area-end">
                    <img src="images/alarm-purple.png" alt="alarm"/>
                    <img src="images/message3.png" alt="message"/>
                    <img src="images/user-purple.png" alt="user"/>
                    <img src="images/menu-purple.png" alt={"menu"}/>
                </div>
            </div>
        </div>
    );

}

export default head;