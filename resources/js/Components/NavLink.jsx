import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-xl font-medium leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 hover:text-gray-200 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out text-xl'
            }
        >
            {children}
        </Link>
    );
}
