import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const itemMenus = <>
        <li><Link href={'/'}><a>Home</a></Link></li>
        <li><Link href={'/portfolio'}><a>Our Portfolio</a></Link></li>
        <li><Link href={'/team'}><a>Our Team</a></Link></li>
        <li><Link href={'/dashboard'}><a>Dashboard</a></Link></li>
        <li><Link href={'/contact'}><a>Contact Us</a></Link></li>
        <li><Link href={'/register/login'}><button className='btn btn-primary text-white lg:ml-5'>Login</button></Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-secondary px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {itemMenus}
                        </ul>
                    </div>
                    <a>
                        <Image src="/logos/logo.png" width={150} height={47} alt="logo" />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-lg">
                        {itemMenus}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;