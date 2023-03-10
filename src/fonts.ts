import {
    Fredoka_One,
    Inter,
    Poppins,
    Rubik,
    Source_Sans_Pro,
} from 'next/font/google';
export const logo = Rubik({ subsets: ['latin'] });
export const text = Source_Sans_Pro({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
});
export const title = Fredoka_One({ subsets: ['latin'], weight: '400' });
