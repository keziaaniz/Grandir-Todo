import '../styles/NewTodo.css';

const Button = ({ color, text, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: color }} className="dark:md:hover:bg-fuchsia-600">{text}</button>
}

export default Button;
