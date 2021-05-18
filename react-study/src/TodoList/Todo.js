import react from 'react';
import {useState} from "react";

function TodoList() {
    const [desc, setDesc] = useState('');
    const [currentId, setCurrentId] = useState(1);
    const [todoList, setTodoList] = useState([]);

    function onAdd() {
        const todo = {id: currentId, desc};
        setCurrentId(currentId + 1);
        setTodoList([...todoList, todo]);
    }

    function onDelete(e) {
        const id = Number(e.target.dataset.id);
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    }

    function onSaveToServer() {
        //todoList 전송
    }

    return (
        <div>
            <h3>TodoList</h3>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button id={todo.id} onClick={onDelete}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={desc}
                onChange={e => setDesc(e.target.value)}/>
            <button onClick={onAdd}>Add</button>
            <button onClick={onSaveToServer}>Save</button>
        </div>
    );
}

export default TodoList;