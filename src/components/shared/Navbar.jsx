import Image from 'next/image';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-6'>
            <div> </div>
            <ul className='flex justify-center items-center gap-4 text-gray-500'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            <div className='flex justify-center items-center gap-1'>
                <Image src={userAvatar} width={40} height={40} alt='userAvatar'></Image>
                <button >
                    <NavLink href={"/login"}>Login</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;