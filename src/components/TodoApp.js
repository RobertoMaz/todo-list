import { useState } from "react"
import Todo from "./Todo";
import "./TodoApp.css";

export default function TodoApp(){
    const [title, setTitle] = useState("Jorge");
    const [todos, setTodos] = useState([]);
    function handleChange(e) {
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        setTodos([...todos, newTodo]);
    }

    function handleUpdate(id, value){
        const temporal = [...todos];
        const item = temporal.find((el) => el.id === id);
        item.title = value;
        setTodos(temporal);
        setTitle("");
    }


    function handleDelete(id){
        const temporal = todos.filter(el => el.id !== id );
        setTodos(temporal);
    }

    return(
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title}></input>
                <input onClick={handleSubmit} type="submit" value="Create ToDo" className="buttonCreate"></input>
            </form>
            <div className="todosContainer">
                {
                    todos.map(el => (<Todo key={el.id} item={el} onUpdate={handleUpdate} onDelete={handleDelete}/>))
                }
            </div>
        </div>
    );
}

