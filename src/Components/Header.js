import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    const [ open, setOpen ] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className='Header'>
            <div>
                <h1>BROCK MORTENSON</h1>
                <div>
                    <input className='toggler' type='checkbox' onClick={handleOpen} />
                    <div className='hamburger'><div></div></div>
                </div>
            </div>
            <nav>
                <div className='navbar'>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><p>HOME</p></Link>
                    <Link to='/Skills' style={{ textDecoration: 'none', color: 'black' }}><p>SKILLS</p></Link>
                    <Link to='/Experience' style={{ textDecoration: 'none', color: 'black' }}><p>EXPERIENCE</p></Link>
                    <Link to='/Projects' style={{ textDecoration: 'none', color: 'black' }}><p>PROJECTS</p></Link>
                    <Link to='/Resume' style={{ textDecoration: 'none', color: 'black' }}><p>RESUME</p></Link>
                </div>
                { open ?
                    <div className='toggled'>
                        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><p>HOME</p></Link>
                        <Link to='/Skills' style={{ textDecoration: 'none', color: 'black' }}><p>SKILLS</p></Link>
                        <Link to='/Experience' style={{ textDecoration: 'none', color: 'black' }}><p>EXPERIENCE</p></Link>
                        <Link to='/Projects' style={{ textDecoration: 'none', color: 'black' }}><p>PROJECTS</p></Link>
                        <Link to='/Resume' style={{ textDecoration: 'none', color: 'black' }}><p>RESUME</p></Link>
                    </div>
                    : null
                    }
            </nav>
        </div>
    )
}

export default Header;