import { useState } from 'react';
import '../styles/AddNewTodo.css';
import Swal from "sweetalert2";

const AddNewTodo = ({onSave}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text && !day  && !description && !deadline) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha os dados ou feche o formulário!'
            })
        } else if (!text && day  && description && deadline) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha a tarefa!'
            })
        } else if (text && !day  && description && deadline) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha o prazo!'
            })
        } else if (text && day  && !description && deadline) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Preencha a descrição da tarefa!'
                })
    
        } else if (text && day  && description && !deadline) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha a data final!'
            })
        } else {
            onSave({ text, day, description, deadline: deadline+"T00:00:00" });
        }
        setText('');
        setDay('');
        setDescription('');
        setDeadline('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-label'>
                <label>Tarefa</label>
                <input type="text" placeholder="título da tarefa" value={text} onChange={(e) => setText(e.target.value)} />
                <label>Prazo</label>
                <input type="text" placeholder="prazo" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-label'>
                <label>Descrição</label>
                <input type="text" placeholder="descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Data final</label>
                <input type="date" placeholder="data final" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </div>

            <input type="submit" className="button" value="Save Todo" />
        </form>
    )
}

export default AddNewTodo;