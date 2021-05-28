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
    
}