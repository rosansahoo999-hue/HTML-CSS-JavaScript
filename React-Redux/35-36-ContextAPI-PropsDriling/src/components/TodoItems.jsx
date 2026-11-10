import { useContext } from "react";
import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

const Todoitems = () => {
    const { todoItems } = useContext(TodoItemsContext);
    
    return (
        <div className={styles.itemsContainer}>
          {todoItems.map((item) => (
            <Todoitem 
            key={item.name} 
            todoDate={item.dueDate} 
            todoName={item.name}/>
         ))}
        </div>
    );
};
export default Todoitems;
