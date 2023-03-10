import Head from 'next/head';
import clsx from 'clsx';
import { text, title } from '../fonts';
import { Footer } from '@/components/Footer';
import { SocialsFooter } from '@/components/SocialsFooter';
import { Intro } from '@/components/Intro';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';

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
