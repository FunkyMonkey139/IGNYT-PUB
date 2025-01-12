import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loggedIn, setLogin] = useState(false);

  useEffect(() => {
    setLogin(localStorage.getItem('login'));
    const cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            IGNYT
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to='/support'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/Cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

          </ul>
          {/* <ul style={{ listStyleType: 'none' }}>
            <li>
              {loggedIn ? <>
                <li className='nav-item log'>
                  <button
                    onClick={() => { localStorage.clear(); setLogin(false); }}
                    className='btn--outline' >
                    Logout
                  </button>
                </li></> :
                <Link className='btn--outline' to="/login" onClick={closeMobileMenu}>
                  Login
                </Link>}
            </li>
          </ul> */}

        </div>
      </nav>
    </>
  );
}

export default Navbar;