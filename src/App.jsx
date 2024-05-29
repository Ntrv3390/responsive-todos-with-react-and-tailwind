import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo';

function App() {
  const[todo, setTodo] = useState({title: ''});
  const[list, setList] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    function getLocalStorageData() {
      const allTodosData = JSON.parse(localStorage.getItem('todo')) || [];
      setList(allTodosData);
    }
    getLocalStorageData();
    setLoading(false)
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault();
    const getTodos = JSON.parse(localStorage.getItem('todo')) || [];
    const finalTodo = {...todo, isActive : true};
    const addTodo = [...getTodos, finalTodo];
    localStorage.setItem('todo', JSON.stringify(addTodo));
    alert('Todo added successfully');
    setTodo({ title: '' });
    setLoading(true);
  }

  const handleChange = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value})
  }

  const deactiveTodo = (id) => {
    const currTodo = list[id];
    currTodo.isActive = !currTodo.isActive;
    setList([...list, currTodo]);
    localStorage.setItem('todo', JSON.stringify(list));
    const status = currTodo.isActive ? ' activated ' : ' deactivated '
    alert('Todo ' + id + status + ' successfully');
    setLoading(true);
  } 

  return (
    <>
      <div className='bg-rose-100 min-h-screen'>
        <h1 className='text-center text-stone-800 font-sans text-4xl font-bold pt-5 lg:pt-10'>React Todos</h1>
        <hr className='h-px mx-auto my-8 w-[20rem] lg:w-[40rem] bg-gray-400 border-0'/>
        <div className='flex justify-center items-center mt-10'>
          <form className='flex justify-center items-start flex-col'>
            <label className='text-stone-700 font-sans font-semibold mb-1' htmlFor="title">Enter title:</label>
            <input value={todo.title} className='text-stone-700 shadow-lg font-semibold rounded-lg font-sans py-3 px-6 lg:w-[34rem] w-[25rem]' onChange={handleChange} type="text" name="title" id="title" />
            <button type="submit" className='bg-purple-400 shadow-lg text-white font-sans font-semibold px-8 mt-6 py-2 rounded-lg' onClick={handleSubmit}>Add</button>
          </form>
        </div> 
        <hr className='h-px mx-auto my-8 w-[20rem] lg:w-[40rem] bg-gray-400 border-0'/>
        <div className='flex mx-[12rem] justify-center flex-wrap items-center max-w-[70rem]'>
          {
            list.map((todo, i) => (
              <Todo key={i} title={todo.title} id={i} isActive={todo.isActive} deactiveTodo={deactiveTodo} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
