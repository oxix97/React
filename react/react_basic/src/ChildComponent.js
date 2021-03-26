function ChildComponent(props){
    const name = props.name;
    const age = props.age;

    return <h3>나는 {name}입니다. {age}살입니다.</h3>
}

export default ChildComponent;