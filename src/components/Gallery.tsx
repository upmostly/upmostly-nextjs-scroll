import clsx from 'clsx';
import { text, title } from '../fonts';
import { FaGlasses, FaHeart, FaShower } from 'react-icons/fa';
import { ImageGallery } from '@/components/ImageGallery';

export function Gallery() {
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
