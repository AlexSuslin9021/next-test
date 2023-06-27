'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

type NavLink={
    href:string
    label:string
}
type Props={
    navLinks:NavLink[]
}
const Navigation = ({navLinks}:Props) => {
    const pathName=usePathname()
debugger
    return (
        <>
            {navLinks.map((l)=>{
                const isActive= pathName === l.href
              return  <Link href={l.href}
                key={l.label}
                            className={isActive ? "active" :"noActive"}
                >
                {l.label}
            </Link>})}
        </>
    );
};

export default Navigation;