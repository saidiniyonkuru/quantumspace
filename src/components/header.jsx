import {useState} from 'react';
import axios from 'axios';
import '../css/App.css';
import {FaSearch} from 'react-icons/fa';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleAddTodo = async () => {
    try {
      await axios.post('/api/todos', {name, address});
      setName('');
      setAddress('');
      setShowModal(false);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <>
      <div className='header'>
        <div className='mask'>
          <div className='logo'>
            <a href='index.html'>Quantum</a>
          </div>

          <div className='wrap'>
            <div className='search'>
              <input
                type='text'
                className='searchTerm'
                placeholder='Search'
              />
              <button
                type='submit'
                className='searchButton'
              >
                <FaSearch />
              </button>
            </div>
          </div>
          <div className='list'>
            <li>
              <button
                className='aj_btn'
                onClick={() => setShowModal(true)}
              >
                Ajouter&nbsp;un&nbsp;kvm
              </button>
            </li>
          </div>
        </div>
      </div>

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span
              className='close-button'
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h2>Add a new kvm</h2>
            <label>
              Name:
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Address:
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <button onClick={handleAddTodo}>Add</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
