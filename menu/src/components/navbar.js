import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
<i class="fa-solid fa-frog"></i>

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
  return (
    <>
   
   <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Tiana's Place <i className='fa-solid fa-user-chef'></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/Breakfast' className='nav-links' onClick={closeMobileMenu}>
                    Breakfast
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Lunch' className='nav-links' onClick={closeMobileMenu}>
                    Lunch
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Dinner' className='nav-links' onClick={closeMobileMenu}>
                    Dinner
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Dessert' className='nav-links' onClick={closeMobileMenu}>
                    Dessert
                </Link>
               
           
           
            </li>
        </ul>
    
        </div>
    </nav>
    
    </>
    
  )
}
export default Navbar