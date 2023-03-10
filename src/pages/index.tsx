import { NavBar } from '@/components/NavBar';
import Head from 'next/head';
import clsx from 'clsx';
import { text, title } from '../fonts';
import pets from '../dogandcat.png';
import Image, { ImageProps } from 'next/image';
import { FaGlasses, FaHeart, FaShower } from 'react-icons/fa';
import { ImageGallery } from '@/components/ImageGallery';
import { WithChildrenProps } from '../types';

import pet1 from 'images/pet1.webp';
import pet2 from 'images/pet2.webp';
import pet3 from 'images/pet3.webp';
import { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import { SocialsFooter } from '@/components/SocialsFooter';

export default function Home() {
    return (
        <div
            className={clsx(
                'flex min-h-screen w-full flex-col items-center justify-center',
                text.className
            )}>
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Intro />
            <Gallery />
            <Testimonials />
            <Footer />
            <SocialsFooter />
        </div>
    );
}

function Intro() {
    return (
        <div className="text-light flex h-[36rem] w-full flex-col items-center justify-center bg-secondary md:h-[90vh]">
            <NavBar />
            <main className="relative flex w-full grow items-start justify-center py-12 px-4 md:items-center md:justify-start md:px-12">
                <header
                    className={clsx(
                        'z-10 flex flex-col gap-4 md:-mt-36',
                        title.className
                    )}>
                    <h1 className="text-center text-5xl md:text-start md:text-8xl">
                        The Best Pet <br /> Groomers <br /> in Town
                    </h1>
                    <p className={clsx('text-3xl font-light', text.className)}>
                        For a pawfect look and feel!
                    </p>
                </header>
                <div className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]">
                    <Image src={pets} alt="Cat and dog" />
                </div>
            </main>
        </div>
    );
}

function Gallery() {
    return (
        <div
            className={clsx(
                'mt-48 flex min-h-screen w-full flex-col items-center justify-center gap-14 px-4 text-primary md:px-12',
                text.className
            )}>
            <h1
                className={clsx(
                    'text-center text-4xl md:text-8xl',
                    title.className
                )}>
                Your pet deserves <br /> to be pampered!
            </h1>
            <div className="flex flex-col gap-12 text-3xl md:flex-row">
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaShower className="text-4xl" />
                    Bath or Shower
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaGlasses className="text-4xl" />
                    Hands-On Assessment
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaHeart className="text-4xl" />
                    Safe Drying
                </div>
            </div>
            <button className="flex flex-row gap-12 rounded-full bg-primary px-8 py-4 text-2xl text-white">
                Book an Appointment
            </button>
            <ImageGallery />
        </div>
    );
}
const names = [
    'Abi',
    'Brian',
    'Carl',
    'Daniella',
    'Edward',
    'Ruby',
    'John',
    'Alan',
];
const locations = ['Nottingham', 'Manchester', 'London', 'York', 'Brighton'];

function Testimonial({
    className,
    children,
}: WithChildrenProps & { className?: string }) {
    const [randomName, setRandomName] = useState('');
    const [randomLocation, setRandomLocation] = useState('');

    useEffect(() => {
        setRandomName(names[Math.floor(Math.random() * names.length)]);
        setRandomLocation(
            locations[Math.floor(Math.random() * locations.length)]
        );
    }, []); //To make sure the random generation only runs on the client

    return (
        <div
            className={clsx(
                'text-md flex aspect-[3/4] h-96 flex-col items-center justify-between gap-8 rounded-md bg-white p-6 font-light text-secondary shadow',
                className
            )}>
            {children}
            <div className="w-full text-start font-bold">
                {randomName}, {randomLocation}
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <div className="flex min-h-[120vh] w-full flex-col items-center justify-center gap-12 bg-secondary px-4 py-24 md:p-24">
            <h2
                className={clsx(
                    'text-center text-4xl text-primary md:w-1/2 md:text-7xl',
                    title.className
                )}>
                What Our Happy Clients Say
            </h2>
            <div className="flex grow flex-wrap items-center items-center justify-center justify-center gap-24">
                <Testimonial className="md:mb-24">
                    <TestimonialImage src={pet1} alt="" />
                    &quot;They do a great job making Milo look so lovely. The
                    staff are knowledgeable and friendly, always willing to give
                    help and advice. Would definitely recommend!&quot;
                </Testimonial>
                <Testimonial className="md:mt-12">
                    <TestimonialImage src={pet2} alt="" />
                    &quot;They do a great job making Milo look so lovely. The
                    staff are knowledgeable and friendly, always willing to give
                    help and advice. Would definitely recommend!&quot;
                </Testimonial>
                <Testimonial className="md:mb-12">
                    <TestimonialImage src={pet3} alt="" />
                    &quot;They do a great job making Milo look so lovely. The
                    staff are knowledgeable and friendly, always willing to give
                    help and advice. Would definitely recommend!&quot;
                </Testimonial>
            </div>
        </div>
    );
}

function TestimonialImage({ src, alt }: ImageProps) {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="aspect-square h-28  overflow-clip rounded-full">
                <Image src={src} alt={alt} className="object-cover" />
            </div>
        </div>
    );
}
