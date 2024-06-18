import '../css/App.css';
import {FaSearch} from 'react-icons/fa';

function Header() {
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
              <a
                href='add.html'
                className='aj_btn'
              >
                Ajouter&nbsp;un&nbsp;kvm
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
