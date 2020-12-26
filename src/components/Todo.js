import React from 'react';

function Todo({todo, deleteTodo}) {
    
    return (
        <div>
            <input type="checkbox"/>
            {todo.text}
            <button onClick={deleteTodo}>Delete</button>
            
        </div>
    );
}

export default Todo