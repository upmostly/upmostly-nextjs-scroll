import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export function SocialsFooter() {
    return (
        <section className="section flex w-full flex-row items-center justify-between bg-primary py-6 px-6 text-xl text-white md:px-10">
            <div className="text-base">© 2023 Princess Paws</div>
            <div className="flex flex-row gap-4">
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
            </div>
        </section>
    );
}
