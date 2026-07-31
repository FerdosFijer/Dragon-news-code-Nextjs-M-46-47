"use client";

import Image from 'next/image';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { useRouter } from "next/navigation";


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user, "sessionnnn");

    const router = useRouter();

    return (
        <div className='container mx-auto flex justify-between mt-6'>
            <div> </div>
            <ul className='flex justify-center items-center gap-4 text-gray-500'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>
            {  isPending ? (<span className='loading loading-spinner loading-lg'> </span>) :
                user ? (
                <div className='flex justify-center items-center gap-1'>
                        <h2>Hello, {user?.name}</h2>
                        <Image className='rounded-full' src={user?.image || userAvatar} width={40} height={40} alt='userAvatar'></Image>
                        <button className='btn bg-purple-500 text-white' onClick={async() => { await authClient.signOut(); router.push("/")}}> Logout</button>
                </div>
                ) : (
                    <div className='flex justify-center items-center gap-1'>
                    <Image className='rounded-full' src={ userAvatar} width={40} height={40} alt='userAvatar'></Image>
                    <button className='btn bg-purple-500 text-white' >
                    <NavLink href={"/login"}>Login</NavLink>
                  </button>
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;