import { FaDog } from 'react-icons/fa';
import { WithChildrenProps } from '../types';
import clsx from 'clsx';
import { title } from '../fonts';
import { Logo } from '@/components/Logo';

function NavItem({ children }: WithChildrenProps) {
    return (
        <button className="rounded-full px-8 py-1 transition-all hover:bg-primary">
            {children}
        </button>
    );
}

export function NavBar() {
    return (
        <div className="text-md flex h-24 w-full items-center justify-between px-12">
            <Logo />
            <nav className="hidden gap-8 md:flex">
                <NavItem>Home</NavItem>
                <NavItem>Services</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </nav>
        </div>
    );
}
