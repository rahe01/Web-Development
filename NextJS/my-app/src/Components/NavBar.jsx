"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'


export default function NavBar() {
    const pathName = usePathname()
    const router = useRouter()
    const handler = () => {
        console.log("login")
        router.push('/services')
    }

    if(pathName.includes('/dashboard')){
        return (
         <div className='bg-orange-400'>dash lay</div>
        )
      
      }



  return (
    <div>
      <nav className='bg-green-500 flex '>
        <ul className='flex justify-center items-center px-4  space-x-5 py-5'>
            <li><Link className={pathName === '/About' ? 'text-white' : 'text-black'} href={'/About'}> About </Link></li>
            <li  > <Link className={pathName === '/services' ? 'text-white' : 'text-black'} href={'/services'}> Services</Link></li>
            <li ><Link className={pathName === '/blogs' ? 'text-white' : 'text-black'} href={'/blogs'}> Blogs</Link></li>
            <li ><Link className={pathName === '/catagories' ? 'text-white' : 'text-black'} href={'/catagories'}> Catagories</Link></li>
            <li ><Link className={pathName === '/dashboard' ? 'text-white' : 'text-black'} href={'/dashboard'}> Dash</Link></li>
        </ul>
        <button onClick={handler} className='bg-white px-4 py-2'>Login</button>
      </nav>
    </div>
  )
}
