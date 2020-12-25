import React from 'react';


function ToDoForm({value, handleSubmit, handleChange}) {

  return (
    <form onSubmit={handleSubmit}>
        <input 
        id='form' 
        type='text' 
        value={value} 
        onChange={handleChange}
        >

        </input>
    </form>
  );
}

export default ToDoForm