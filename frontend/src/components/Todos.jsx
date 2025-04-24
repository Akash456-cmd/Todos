

/* todos =[
    {
        title: "go to gym",
        description: "go to gym daily"

    }
]
*/


export function Todos({todos}){
//rendering elements of array one by one
    return <div>
        {todos.map(function(todo){
           return <div>
             <h1>{todo.title}</h1>
             <h2>{todo.description}</h2>
             <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
           </div>
        })}
    </div>
}