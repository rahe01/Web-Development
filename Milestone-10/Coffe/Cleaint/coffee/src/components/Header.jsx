import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-3xl font-bold underline' : 'text-3xl font-bold'}>Home</NavLink>
            <Link to={'/singin'}>singin</Link>
      <Link to={'/singup'}>singup</Link>
        </div>
    );
};

export default Header;