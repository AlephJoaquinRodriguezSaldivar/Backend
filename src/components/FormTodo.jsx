import React, { useState } from "react";

const FormTodo = props  => {
    const [description, setDescription] = useState("");
    const {addItem} = props;

    const handleSubmit = e => { /*Para que no actualice ya que no estamos guardando en DB o Cookes */
        e.preventDefault();
        console.log(description)

        addItem({
            done: false,
            id: (new Date()).toString(),
            description
        });

        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="button pink"
                        disabled={description ? "": "disabled"} /*? operador ternario, permite crear validaciones Resultado para True: False*/
                    >   Agregar tarea
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormTodo;