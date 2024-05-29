import React from 'react'

function Todo(props) {
  const { id, title, isActive, deactiveTodo } = props;

  const deactive = () => {
    deactiveTodo(id);
  }

  return (
    <div className='bg-purple-400 shadow-xl m-5 min-w-[15rem] max-w-[15rem] min-h-36 rounded-lg text-white font-sans'>
        <h3 className={isActive ? 'px-5 mt-5 font-bold text-lg' : 'px-5 mt-5 font-bold text-lg line-through'}>{title}</h3>
        <div className='flex items-center px-5 mt-10 mb-5'>
          <h3 className="font-bold text-md">Status: </h3> <span><button className={isActive ? 'mx-2 p-2 bg-pink-300 shadow-lg text-stone-700 rounded-lg' : 'mx-2 p-2 bg-pink-100 shadow-lg text-stone-700 rounded-lg'} onClick={deactive} >{isActive ? " to-do" : " done"}</button></span>
        </div>
    </div>
  )
}

export default Todo