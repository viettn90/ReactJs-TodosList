import Todo from './Todo'

const TodosList = ({todosList, setTodosList}) => {

    // Delete todo
    const deleteTodo = (index) => {
        const newTodos = [...todosList];
        newTodos.splice(index, 1);
        setTodosList(newTodos)
    }
    return (
        <div>
            {todosList.map((todo, index) => {
                    return (
                    <Todo 
                        key={index.toString()}
                        todo={todo}
                        deleteTodo={() => deleteTodo(index)}
                        
                    />
                    )
                })
            }
            
        </div>
    );
}

export default TodosList;