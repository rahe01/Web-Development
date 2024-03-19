import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Nav bar</h2>
            <nav>

                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact us</Link>
                <NavLink to='/users'>Users</NavLink>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;