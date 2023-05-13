import React, { useState } from "react";
import './TodoList.css';

export default function TodoList() {

    const [doList, setDoList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const listInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const listAdd = () => {
        const newDolist = {
            id: Date.now(),
            text: inputValue,
            isComplete: false
        };
        setDoList([...doList, newDolist]);
        setInputValue('');
    };

    const listEdit = (id, newText) => {
        const newDolist = [...doList];
        const index = newDolist.findIndex((list) => list.id === id);
        newDolist[index].text = newText;
        setDoList(newDolist);
    };

    const listDelete = (id) => {
        const newDolist = doList.filter((list) => list.id !== id);
        setDoList(newDolist);
    };

    const listComplete = (id) => {
        cd
        const newDolist = [...doList];
        const index = newDolist.findIndex((doList) => doList.id === id);
        newDolist[index].isCompleted = !newDolist[index].isCompleted;
        setDoList(newDolist);
    };

    return (
        <div className="container">
            <div>
                <h1>Lista de Tareas</h1>
                <input type="text" value={inputValue} onChange={listInputChange} />
                <button className="button" onClick={listAdd}>Agregar</button>
            </div>

            <ul className="list-cont">
                {doList.map((list) => (
                    <li className="list-container" key={list.id}>
                        <input
                            type="checkbox"
                            checked={list.isComplete}
                            onChange={() => listComplete(list.id)}
                        />

                        {list.isComplete ? (
                            <del>{list.text}</del>
                        ) : (
                            <span>{list.text}</span>
                        )}
                        <button className="button" onClick={() => listEdit(list.id, prompt("Editar Tarea: ", list.text))}>
                            Editar
                        </button>

                        <button className="button" onClick={() => listDelete(list.id)}>Borrar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}