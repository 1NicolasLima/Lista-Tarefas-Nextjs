import {useState} from "react";
import './App.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {

  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(savedTodos);

  // const [todos, setTodos] = useState([
  //   {
  //     id:1,
  //     text: "Criar funcionalidade X no sistema",
  //     category: "Trabalho",
  //     isCompleted: false,
  //   },
  //   {
  //     id:2,
  //     text: "Ir para a academia",
  //     category: "Pessoal",
  //     isCompleted: false,
  //   },
  //   {
  //     id:3,
  //     text: "Estudar React",
  //     category: "Estudos",
  //     isCompleted: false,
  //   }
  // ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, { id: Math.floor(Math.random() * 10000), text, category, isCompleted: false }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  
  
  // const addTodo = (text, category)=>{
  //   const newTodos = [...todos,{
  //     id: Math.floor(Math.random()*10000),
  //     text,
  //     category,
  //     isCompleted: false,
  //   },
  // ];
  // setTodos(newTodos)
  // };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  
  

  // const removeTodo = (id) =>{
  //   const newTodos = [...todos]
  //   const filteredTodos = newTodos.filter((todo) =>
  //    todo.id !== id ? todo : null
  //    );
  //   setTodos(filteredTodos)
  // };

  //sugestao do chatgpt
  // const completeTodo = (id) => {
  //   const newTodos = todos.map((todo) =>
  //     todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  //   );
  //   setTodos(newTodos);
  // };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}></Search>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}></Filter>
      <div className="todo-list">
        {todos
        .filter((todo) =>
         filter === "All" 
          ? true 
          : filter === "Completed"
          ? todo.isCompleted 
          : !todo.isCompleted
        )
        .filter((todo)=>
        todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b)=>
         sort === "Asc"
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text))
        .map((todo)=>(
         <Todo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
