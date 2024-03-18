import { useState } from "react";
import Link from "../Link/Link";

import { RiMenuSearchFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {

    const [open , setOpen ] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];




    return (
        <nav className="text-black p-6">

        <div onClick={() => setOpen(!open)} className=" md:hidden">
            {
                open ? <AiOutlineClose className="text-2xl" ></AiOutlineClose> : <RiMenuSearchFill className="text-2xl" />
            }
        
        </div>
           <ul className={`md:flex absolute md:static duration-1000 bg-gray-400  px-6 ${
            open ? 'top-12' : '-top-60'
           }`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;