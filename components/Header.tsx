import React from 'react';
import Link from "next/link";
import Navigation from "@/components/Navigation";

const Header = () => {
    const navigate=[
        {href:'/', label:'Home'},
        {href:'/blog', label:'Blog'},
        {href:'/about', label:'About'},
    ]

    return (
        <header className={'header'} >
            <Navigation navLinks={navigate}/>
        </header>
    );
};

export default Header;