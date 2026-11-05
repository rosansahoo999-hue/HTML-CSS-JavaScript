import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css"

const Todoitems = ({ todoItems, onDeleteClick }) => {
    return (
        <div className={styles.itemsContainer}>
          {todoItems.map((item) => (
            <Todoitem 
            key={item.name} 
            todoDate={item.dueDate} 
            todoName={item.name} 
            onDeleteClick={onDeleteClick} />
         ))}
        </div>
    );
};
export default Todoitems;
