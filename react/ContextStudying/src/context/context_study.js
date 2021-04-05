import React from "react";

class MyClass extends React.Component {
    static contextType = MyContext;
    render() {
        let value = this.context;
        /* context 값을 이용한 렌더링 */
    }
    componentDidMount() {
        let value = this.context;
        /* MyContext의 값을 이용한 코드 */
    }
    componentDidUpdate() {
        let value = this.context;
        /* ... */
    }
    componentWillUnmount() {
        let value = this.context;
        /* ... */
    }
}
MyClass.contextType = MyContext;