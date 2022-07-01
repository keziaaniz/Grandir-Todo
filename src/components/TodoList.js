import Todo from './Todo';
import "../index.css"

const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
        <>
            {todos.map((todo) => (<Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />))}
        </>
    )
}

export default TodoList;
