import {useState, useEffect} from 'react';
import {FaEye} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import axios from 'axios';

function Todolist() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className='wrapper'>
        <div className='row title'>
          <ul>
            <li>Image</li>
            <li>Name</li>
            <li>Adresse IP</li>
            <li>Action</li>
          </ul>
        </div>

        <div className='row-fadeIn-wrapper'>
          <ul>
            {Array.isArray(todos) && todos.length > 0 ? (
              <ul>
                {todos.map((todo, index) => (
                  <>
                    <div className='row fadeIn art'>
                      <li>
                        <img src='https://media.istockphoto.com/id/1409878886/photo/close-up-photo-of-man-hands-writing-notes-in-a-notebook-during-lecture-at-college.jpg?s=1024x1024&w=is&k=20&c=znsbWp7c2qZQ4XO6wgxnoT9q_WDUbmE-rnVgHHWFHoc=' />
                      </li>
                      <li key={index}>
                        {todo.name} - {todo.address}
                        <button onClick={() => handleDeleteTodo(index)}>
                          Delete
                        </button>
                      </li>
                    </div>
                  </>
                ))}

                <li className='action_btn'>
                  <a href='#'>
                    <FaEye />
                  </a>
                  <a href='#'>
                    <FaTrash />
                  </a>
                </li>
              </ul>
            ) : (
              <p>No todos to display.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todolist;

// import {useState, useEffect} from 'react';
// import axios from 'axios';

// function Todolist() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const response = await axios.get('/api/todos');
//         setTodos(response.data);
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       }
//     };

//     fetchTodos();
//   }, []);

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       {Array.isArray(todos) && todos.length > 0 ? (
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               {todo.name} - {todo.address}
//               <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No todos to display.</p>
//       )}
//     </div>
//   );
// }

// export default Todolist;
