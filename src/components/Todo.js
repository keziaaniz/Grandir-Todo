import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css";
import '../styles/Todo.css';

const Todo = ({ todo, onDelete, onEdit }) => {
    return (
        <div>
            <div className="todo">

                <div className='todo-form-group'>
                    <div className='form-group'>
                        <div className="todo-item">
                            <h5 className="textBold">Tarefa:</h5> 
                            <p className="todoName">{todo.text}</p>
                        </div>
                        <div className="todo-item">
                            <h5 className="textBold">Prazo:</h5>
                            <p className="todoDate"> {todo.day}</p>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="todo-item">
                            <h5 className="todoDescription">Descrição:</h5>
                            <p className="todoName">{todo.description}</p>
                        </div>
                        <div className="todo-item">
                            <h5 className="todoDeadline">Data final:</h5>
                            <p className="todoDeadline"> {new Date(todo.deadline).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>    

                <div className='form-edit'>
                    <p><FaTimes onClick={() => onDelete(todo.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(todo.id)} className="editIcon" /></p>
                </div>
                
            </div>
        </div>
    )
}

export default Todo
