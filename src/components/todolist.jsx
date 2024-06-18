import {useState, useEffect} from 'react';
import {FaEye} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import axios from 'axios';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      axios
        .post('/api/todos', {name: newTodo})
        .then((response) => {
          setTodos([...todos, response.data]);
          setNewTodo('');
        })
        .catch((error) => {
          console.error('Error adding todo:', error);
        });
    }
  };

  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  const getTodoAddress = async (todoId) => {
    try {
      const response = await axios.get(`/api/address/${todoId}`);
      return response.data.address;
    } catch (error) {
      console.error(`Error fetching address for todo ${todoId}:`, error);
      return 'Unknown';
    }
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
          <div className='row fadeIn art'>
            <ul>
              <li>
                <img src='https://media.istockphoto.com/id/1409878886/photo/close-up-photo-of-man-hands-writing-notes-in-a-notebook-during-lecture-at-college.jpg?s=1024x1024&w=is&k=20&c=znsbWp7c2qZQ4XO6wgxnoT9q_WDUbmE-rnVgHHWFHoc=' />
              </li>
              {todos.map(async (todo) => {
                const address = await getTodoAddress(todo.id);
                return (
                  <li key={todo.id}>
                    <span>Name: {todo.name}</span>
                    <span>Address: {address}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </li>
                );
              })}
              <li className='action_btn'>
                <a href='#'>
                  <FaEye />
                </a>
                <a href='#'>
                  <FaTrash />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todolist;
