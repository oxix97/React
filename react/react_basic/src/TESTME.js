import * as ReactDOM from "react-dom";

function test(){
    const text = "Test ME !!"
    const element = <h1>Hello, world</h1>;
    // eslint-disable-next-line no-undef
    ReactDOM.render(element, document.getElementById('root'));
    return (
        <div>
            <h3>{text} </h3>
        </div>
    )
}
export default test;