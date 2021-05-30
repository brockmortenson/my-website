import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <div className='Header'>
            <div>
                <h1>BROCK MORTENSON</h1>
                <div>
                    <input className='toggler' type='checkbox' />
                    <div className='hamburger'><div></div></div>
                </div>
            </div>
            <nav>
                <div>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><p>HOME</p></Link>
                    <Link to='/Skills' style={{ textDecoration: 'none', color: 'black' }}><p>SKILLS</p></Link>
                    <Link to='/Experience' style={{ textDecoration: 'none', color: 'black' }}><p>EXPERIENCE</p></Link>
                    <Link to='/Projects' style={{ textDecoration: 'none', color: 'black' }}><p>PROJECTS</p></Link>
                    <Link to='/Resume' style={{ textDecoration: 'none', color: 'black' }}><p>RESUME</p></Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;