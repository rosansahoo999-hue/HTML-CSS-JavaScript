import { useContext, useRef, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
    const {addNewItem} = useContext(TodoItemsContext);
    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleButtonClicked = (event) => {
        event.preventDefault();
        addNewItem(todoName, dueDate);
        setDueDate("");
        setTodoName("");
    }

    return (
        <div className="container text-center">
            <form className="row kg-row" onSubmit={handleButtonClicked}>
                <div className="col-6">
                    <input 
                    type="text"
                    value={todoName}
                    placeholder="Enter Todo Here"
                    onChange={(e) => setTodoName(e.target.value)} 
                    />
                </div>
                <div className="col-4">
                    <input 
                    type="date"
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="col-2">
                    <button 
                    className="btn btn-success kg-button" 
                    type='submit'>
                        <BiMessageAdd />
                    </button>
                </div>
                </form>
        </div>
    )
}

export default AddTodo;