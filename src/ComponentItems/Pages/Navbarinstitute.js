import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
  const navigateLogout = () => {
    navigate('../logout');
  };
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    // const [ setButton] = useState(true);

    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }else{
    //         setButton(true);
    //     }
    // };

    // useEffect(()=>{
    //     showButton();
    // },[]);
    
    // window.addEventListener('resize',showButton);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/institute" className='navbar-logo' onClick={closeMobileMenu}>
                Sasip Institute <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'} >
                <li className='nav-item'>
                    <Link to='/createuser' className='nav-links' onClick={closeMobileMenu} >
                        Register user
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/createrooms' className='nav-links' onClick={closeMobileMenu} >
                        Create rooms
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/viewerooms' className='nav-links' onClick={closeMobileMenu} >
                    View rooms
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/viewusers' className='nav-links' onClick={closeMobileMenu} >
                    View users
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link to='/Sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >
                        View rooms
                    </Link>
                </li> */}
                
            </ul>
             
        </div>
        <Button buttonStyle='btn--outline' onClick={navigateLogout}>Log out</Button>
      </nav>
    </>
  )
}

export default Navbar
