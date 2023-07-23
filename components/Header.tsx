import React from 'react';
import Link from "next/link";
import Navigation from "@/components/Navigation";

const Header = () => {
    const navigate=[
        {href:'/', label:'Home'},
        {href:'/dashboard', label:'Dashboard'},
        {href:'/about', label:'About'},
    ]

    return (
        <header className={'header'} >
            <Navigation navLinks={navigate}/>
        </header>
    );
};

export default Header;


// async  function getData(){
//     const res=await fetch(`https://jsonplaceholder.typicode.com/posts`,{
//         next:{
//             revalidate:60
//         }
//     })
//     return res.json()
// }