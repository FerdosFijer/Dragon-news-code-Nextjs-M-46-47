"use client"

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimming from "@/assets/swimming.png";
import classes from "@/assets/class.png";
import Playground from "@/assets/playground.png";
import bg from "@/assets/bg.png";
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const RightSidebar = () => {

    const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    }); };
    const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
        provider: "github",
    }); };

    return (
        <div>
            <h2 className='font-bold text-lg mb-2 '>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}>
                    <FaGoogle />
                    <h3>Login with Google</h3>
                </button>
                <button className='btn' onClick={handleGithubSignin}>
                    <FaGithub />
                    <h3>Login with Github</h3>
                </button>
            </div>

            <h2 className='font-bold text-lg mt-4'>Find Us On</h2>
            <div className='flex flex-col gap-2 bg-gray-100 border-2 border-gray-300 rounded-sm p-2'>
                <Link href={"/"} className='flex items-center gap-4 text-2xl ml-4 text-gray-400'>
                    <FaFacebook className=' text-blue-500' />
                    <h3>Facebook</h3>
                </Link>
                <hr className='text-gray-300'/>
                <Link href={"/"} className='flex items-center gap-4 text-2xl ml-4 text-gray-400'>
                    <FaTwitter className=' text-bllue-300' />
                    <h3>Twitter</h3>
                </Link>
                <hr className='text-gray-300'/>
                <Link href={"/"} className='flex items-center gap-4 text-2xl ml-4 text-gray-400'>
                    <FaInstagram className=' text-red-500' />
                    <h3>Instragram</h3>
                </Link>
                <hr className='text-gray-300'/>
                
            </div>

            <h2 className='font-bold text-lg mt-10'>Q-Zone</h2>
            <div className='flex flex-col gap-2 bg-gray-100 border-2 border-gray-300 rounded-sm p-2'>
                    <Image src={swimming} width={400} height={100} alt='Logo'></Image>
                    <Image src={classes} width={400} height={100} alt='Logo'></Image>
                    <Image src={Playground} width={400} height={100} alt='Logo'></Image>
            </div>
            <Image className='mt-10' src={bg} width={400} height={100} alt='Logo'></Image>
            
        </div>
    );
};

export default RightSidebar;