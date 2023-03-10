import { NavBar } from '@/components/NavBar';
import clsx from 'clsx';
import { text, title } from '../fonts';
import Image from 'next/image';
import pets from '../dogandcat.png';
import { motion, Variants } from 'framer-motion';

const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        x: -500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};

const introPictureVariants: Variants = {
    hide: {
        opacity: 0,
        x: 500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};
export function Intro() {
    return (
        <div className="flex h-[36rem] w-full flex-col items-center justify-center overflow-x-clip bg-secondary text-light md:h-[90vh]">
            <NavBar />
            <main className="relative flex w-full grow items-start justify-center py-12 px-4 md:items-center md:justify-start md:px-12">
                <motion.header
                    className={clsx(
                        'z-10 flex flex-col gap-4 md:-mt-36',
                        title.className
                    )}
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introHeaderVariants}>
                    <h1 className="text-center text-5xl md:text-start md:text-8xl">
                        The Best Pet <br /> Groomers <br /> in Town
                    </h1>
                    <p className={clsx('text-3xl font-light', text.className)}>
                        For a pawfect look and feel!
                    </p>
                </motion.header>
                <motion.div
                    className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]"
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introPictureVariants}>
                    <Image src={pets} alt="Cat and dog" />
                </motion.div>
            </main>
        </div>
    );
}
