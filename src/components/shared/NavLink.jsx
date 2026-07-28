'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href, children, className}) => {
    const pathname = usePathname();
    // console.log(pathname, 'pathnameee');

    const isActive = href === pathname
    
    return (
        <Link href={href} className={`${isActive ? "border bg-purple-700 text-white p-2" : ""} ${className}`}>
            {children}
        </Link>
    );
};

export default NavLink;