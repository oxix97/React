function Hello(name) {
    if (typeof name === 'string') {
        return <h1>Hello, {name}</h1>
    }
    return <h1>Who r u ?</h1>
}

function Names(names) {
    const list = [];
    for (let i = 0; i < names.length; i++) {
        list.push(<li>names[i]</li>)
    }
    return <ul>{list}</ul>
}

function wrap(component) {
    return <div>{component}</div>
}

export default Names;

wrap(<h1>Hello ~~</h1>);