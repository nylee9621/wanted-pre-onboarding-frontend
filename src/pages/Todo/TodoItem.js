import React, { useState } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isModifying, setIsModifying] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(todo.todo);

    const pressCheckBox = isChecked => {
        const modifiedTodo = {...todo, isCompleted: isChecked};
        updateTodo(modifiedTodo);
    }

    const pressSubmitBtn = () => {
        const modifiedTodo = {...todo, todo: currentTodo};
        updateTodo(modifiedTodo);
        setIsModifying(false);
    }

    const pressCancelBtn = () => {
        setIsModifying(false);
        setCurrentTodo(todo.todo);
    }

    return(
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={e => pressCheckBox(e.target.checked)}
                />
                {isModifying ? 
                    <input
                        data-testid="modify-input"
                        value={currentTodo}
                        onChange={e => setCurrentTodo(e.target.value)}
                    />
                :
                    <span>{todo.todo}</span>
                }
            </label>
            {isModifying ? 
                <>
                    <button data-testid="submit-button" onClick={() => pressSubmitBtn()}>제출</button>
                    <button data-testid="cancel-button" onClick={() => pressCancelBtn()}>취소</button>
                </>
            :
                <>
                    <button data-testid="modify-button" onClick={() => setIsModifying(true)}>수정</button>
                    <button data-testid="delete-button" onClick={() => deleteTodo(todo)}>삭제</button>
                </>
            }
        </li>
    )
}

export default TodoItem;