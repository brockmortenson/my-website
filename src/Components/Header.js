import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <div className='Header'>
            <h1>BROCK MORTENSON</h1>
            <nav>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><p>HOME</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}><p>SKILLS</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}><p>EXPERIENCE</p></Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}><p>PROJECTS</p></Link>
                <Link to='/Resume' style={{ textDecoration: 'none', color: 'black' }}><p>RESUME</p></Link>
            </nav>
        </div>
    )
}

export default Header;