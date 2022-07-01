import React from 'react';
import Button from './Button';
import "../index.css";
import '../styles/NewTodo.css';

const NewTodo = ({ showForm, changeTextAndColor }) => {
    return (
        <header className="header">
            <h2 className="title">Lista de tarefas</h2>
            <Button onClick={showForm} color={changeTextAndColor ? '#65350F' : '#A28F9D'} text={changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}

export default NewTodo;
