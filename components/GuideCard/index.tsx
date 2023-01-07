import Link from 'next/link';
import React from 'react';
import cn from 'clsx';

interface GuideCardProps {
    name: string;
    to: string;
    children: React.ReactNode;
}

const GuideCard = ({ to, name, children }: GuideCardProps): JSX.Element => {
    return (
        <Link href={to}>
            <div className={cn(
                'group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-current no-underline shadow shadow-gray-100 transition-all duration-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 dark:shadow-none',
                'hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-700 dark:hover:shadow-none',
                'active:shadow-sm active:shadow-gray-200'
            )}>
                {children}
                <span className={cn(
                    'flex font-semibold align-start',
                    'gap-2 p-4 text-gray-700 dark:text-gray-300',
                    'hover:text-gray-900 dark:hover:text-gray-100'
                )}>
                    <span className="flex gap-1">
                        {name}
                    </span>
                </span>
            </div>
        </Link>
    );
};

export { GuideCard };
