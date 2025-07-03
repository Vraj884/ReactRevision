import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [allTodo, setAllTodo] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('alltodos'));
    return saved ? saved : [];
  });

  useEffect(() => {
    localStorage.setItem('alltodos', JSON.stringify(allTodo));
  }, [allTodo]);

  const addTodo = () => {
    const newTODO = document.getElementById('newtodo');
    const value = newTODO.value.trim();
    if (value === '') return;
    setAllTodo((prev) => [...prev, { idea: value, status: false }]);
    newTODO.value = '';
  };

  const toggleStatus = (index) => {
    const updated = [...allTodo];
    updated[index].status = !updated[index].status;
    setAllTodo(updated);
  };

  const deleteTodo = (index) => {
    const updated = [...allTodo];
    updated.splice(index, 1);
    setAllTodo(updated);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <header className="text-center text-2xl font-bold text-gray-800 mb-6">
          📝 To-Do List
        </header>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            id="newtodo"
            placeholder="Enter new task..."
            className="flex-grow border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {allTodo.length > 0 ? (
            allTodo.map((todo, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 px-4 py-3 rounded shadow-sm"
              >
                <span
                  className={`flex-grow text-lg ${
                    todo.status ? 'line-through text-gray-400' : 'text-gray-800'
                  }`}
                >
                  {todo.idea}
                </span>

                <div className="flex gap-4 mt-2 sm:mt-0">
                  <input
                    type="checkbox"
                    checked={todo.status}
                    onChange={() => toggleStatus(index)}
                    className="w-5 h-5 accent-blue-500"
                  />
                  <button
                    onClick={() => deleteTodo(index)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
