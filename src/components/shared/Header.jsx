import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
import { jersey10Charted } from '@/app/layout';

const Header = () => {
    return (
        <div className="text-center py-8 space-y-2">
            <Image src={logo} width={400} height={100} alt='Logo' className='mx-auto'></Image>
            <div className={`${jersey10Charted.className} `}>
                <p >Journalism Without Fear or Favour     </p>
            <p>Date: {format(new Date(), "EEEE, MMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;