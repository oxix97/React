import React, {Component} from 'react';

class ButtonEffect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            message : ''
        }

        this.useState ={
            number: this.state.number
        }
    }

    handleChange(e){
        this.setState({
            message : e.target.value
        })
    }

    handleClick(){
        alert(this.state.message)
        this.setState({
            message : ''
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <p>버튼 입력 회수 : {this.state.number}</p>
                <input
                    type="text"
                    name={"message"}
                    placeholder={"아무거나 입력해보세요."}
                    value={this.state.message}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default ButtonEffect;