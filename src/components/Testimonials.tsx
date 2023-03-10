import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';
import { title } from '../fonts';
import pet1 from '../images/pet1.webp';
import pet2 from '../images/pet2.webp';
import pet3 from '../images/pet3.webp';
import { WithChildrenProps } from '../types';
import { useEffect, useRef, useState } from 'react';
import {
    motion,
    MotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';

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
type TestimonialProps = WithChildrenProps & {
    className?: string;
    parallax: MotionValue<number>;
};
function Testimonial({ className, children, parallax }: TestimonialProps) {
    const [randomName, setRandomName] = useState('');
    const [randomLocation, setRandomLocation] = useState('');

    useEffect(() => {
        setRandomName(names[Math.floor(Math.random() * names.length)]);
        setRandomLocation(
            locations[Math.floor(Math.random() * locations.length)]
        );
    }, []); //To make sure the random generation only runs on the client

    return (
        <motion.div
            className={clsx(
                'text-md flex aspect-[3/4] h-96 flex-col items-center justify-between gap-8 rounded-md bg-white p-6 font-light text-secondary shadow',
                className
            )}
            style={{ y: parallax }}>
            {children}
            <div className="w-full text-start font-bold">
                {randomName}, {randomLocation}
            </div>
        </motion.div>
    );
}

export function Testimonials() {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const reverseParallax = useTransform(parallax, (v) => -v);
    useMotionValueEvent(parallax, 'change', (v) => console.log(v));
    return (
        <div
            className="flex min-h-[150vh] w-full flex-col items-center justify-center gap-12 bg-secondary px-4 py-24 md:p-24"
            ref={target}>
            <h2
                className={clsx(
                    'text-center text-4xl text-primary md:w-1/2 md:text-7xl',
                    title.className
                )}>
                What Our Happy Clients Say
            </h2>
            <div className="flex grow flex-wrap items-center items-center justify-center justify-center gap-24">
                <Testimonial className="md:mb-24" parallax={parallax}>
                    <TestimonialImage src={pet1} alt="" />
                    &quot;They do a great job making Milo look so lovely. The
                    staff are knowledgeable and friendly, always willing to give
                    help and advice. Would definitely recommend!&quot;
                </Testimonial>
                <Testimonial className="md:mt-12" parallax={reverseParallax}>
                    <TestimonialImage src={pet2} alt="" />
                    &quot;They do a great job making Milo look so lovely. The
                    staff are knowledgeable and friendly, always willing to give
                    help and advice. Would definitely recommend!&quot;
                </Testimonial>
                <Testimonial className="md:mb-12" parallax={parallax}>
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
