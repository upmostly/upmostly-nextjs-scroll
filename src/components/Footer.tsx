import { Logo } from '@/components/Logo';
import clsx from 'clsx';
import { text } from '../fonts';
import {
    FaFacebook,
    FaInstagram,
    FaLeaf,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

export function Footer() {
    return (
        <section
            className={clsx(
                'section flex w-full flex-col items-start justify-center gap-10 p-10 py-12 text-secondary md:flex-row  md:justify-between',
                text.className
            )}>
            <Logo />
            <div>
                <div className="text-xl font-bold">Contact Us</div>
                <div>
                    <div>07542 819624</div>
                    <div>email@mail.com</div>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Address</div>
                <div>
                    <div>64 Zoo Lane</div>
                    <div>Nottingham</div>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Opening Hours</div>
                <div>
                    <div>Mon - Fri: 8am - 8pm</div>
                    <div>Sat - Sun: 9am - 5pm</div>
                </div>
            </div>
        </section>
    );
}
export function FooterOld() {
    return (
        <footer
            className={clsx(
                'flex h-96 w-full flex-col items-start gap-5 p-5 py-10',
                text.className
            )}>
            <Logo />

            <FooterItem
                title="Address"
                content="1 Forest View, Blidworth, NG21 0QT"
            />
            <FooterItem title="Contact" content="contact@princesspaws.com" />
        </footer>
    );
}

function FooterItem({ title, content }: { title: string; content: string }) {
    return (
        <div className="text-primary">
            <div className="text-xl font-bold">{title}</div>
            <div className="text-xl">{content}</div>
        </div>
    );
}
