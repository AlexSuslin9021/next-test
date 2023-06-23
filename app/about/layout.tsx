import React, {ReactNode} from 'react';
import Link from "next/link";

type Props={
    children: ReactNode
}
const AboutLayout:React.FC<Props> = ({children}) => {
    return (
        <div>
            <h2> About us</h2>
            <ul>
                <li><Link href={'/about/contact'}> Contacts </Link></li>
                <li><Link href={'/about/team'}> Team </Link></li>
            </ul>
            {children}
        </div>
    );
};

export default AboutLayout;