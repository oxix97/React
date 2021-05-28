import React from 'react';

class LifeCycleExample extends React.Component {
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps call');
    }
    constructor(props) {
        super(props);
        this.state={};
        console.log('constructor call');
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.setState({updated : true})
        this.forceUpdate();
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return {};
    }
    shouldComponentUpdate(){
        console.log('render call')
        return false;
    }
    render() {
        console.log('렌더 함수 호출됨')

        return null;
    }
}
export default LifeCycleExample