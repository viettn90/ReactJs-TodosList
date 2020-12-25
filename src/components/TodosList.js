import Todo from './Todo'

const TodosList = ({todosList}) => {

    return (
        <div>
            {todosList.map((todo, index) => {
                    return (
                    <Todo 
                        key={index.toString()}
                        todo={todo}
                    />
                    )
                })
            }
            
        </div>
    );
}

export default TodosList;