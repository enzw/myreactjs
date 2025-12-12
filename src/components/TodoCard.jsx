import { useState } from "react";
import PropTypes from "prop-types";

const TodoCard = ({ title }) => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (inputValue.trim() === "") return;

        setTodos([...todos, inputValue]);
        setInputValue("");
    };

    const handleDelete = (index) => {
        const newList = todos.filter((_, i) => i !== index);
        setTodos(newList);
    };

    return (
        <div style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "300px",
            margin: "10px"
        }}>
            <h2>{title}</h2>

            <input type="text"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
                placeholder="Tambah tugas..."
                style={{
                    width: "90%",
                    padding: "8px",
                    marginBottom: "8px"
                }}
            />

            <button onClick={handleAddTodo}>Tambahkan Todo</button>

            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                            {todo}
                            <button onClick={() => handleDelete(index)}> x </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

TodoCard.propTypes = {
    title: PropTypes.string.isRequired
}

export { TodoCard }