import React from 'react'
import { Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className='sticky top-0 z-10'>
            <nav className='bg-gray-200 text-purple-500 flex'>
                <div className="first-half w-1/2 flex justify-start">
                    <ul className='flex px-16 py-4 space-x-11'>
                        <li className='font-bold text-xl hover:text-purple-800 hover:cursor-pointer'>
                            <Link aria-current="page" to="/">eKart</Link>
                        </li>
                        <li className='font-bold text-xl hover:text-purple-800 hover:cursor-pointer'>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="second-half w-1/2 flex justify-end">
                    <ul className='flex px-16 py-4 justify-end'>
                        <li className='hover:cursor-pointer'>
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#be68f8' }}>
                                </i>
                            </Link>
                        </li>
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-xs font-medium text-white absolute top-[2px] right-[65px]">{props.cartQuant}
                        </span>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
