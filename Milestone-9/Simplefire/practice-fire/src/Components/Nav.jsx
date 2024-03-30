import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Fireeeeeeeeee</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/login'}>Log In</Link>
          </li>
         <li><Link to={'/singup'}>Sing Up</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
