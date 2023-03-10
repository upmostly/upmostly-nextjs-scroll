import clsx from 'clsx';
import { title } from '../fonts';
import { FaDog } from 'react-icons/fa';

export function Logo({ className }: { className?: string }) {
    return (
        <div
            className={clsx(
                'flex items-center justify-center gap-2 text-2xl font-semibold text-primary',
                title.className,
                className
            )}>
            <div className="text-4xl">
                <FaDog />
            </div>
            Princess Paws
        </div>
    );
}
