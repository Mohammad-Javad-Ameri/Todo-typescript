export interface Todo{
    id: string;
    todo: string;
    isDone: boolean;
}

export interface Todos{
   todos: Todo[];
   setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}