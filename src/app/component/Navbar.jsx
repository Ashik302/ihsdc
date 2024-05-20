"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b border-gray-200 top-0 sticky">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" passHref>
                            <span className="text-xl font-bold text-gray-800 cursor-pointer">IHSDC</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" passHref>
                                <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Home</span>
                            </Link>
                            <Link href="/Courses" passHref>
                                <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Courses</span>
                            </Link>
                            <Link href="/Programs" passHref>
                                <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Programs</span>
                            </Link>
                            <Link href="/Testimonials" passHref>
                                <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Testimonials</span>
                            </Link>
                            <Link href="/ContactPage" passHref>
                                <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact us</span>
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Hamburger toggled={isOpen} toggle={toggleMenu} />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-fit">
                        <Link href="/" passHref>
                            <span className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</span>
                        </Link>
                        <Link href="/Courses" passHref>
                            <span className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Courses</span>
                        </Link>
                        <Link href="/Programs" passHref>
                            <span className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Programs</span>
                        </Link>
                        <Link href="/Testimonials" passHref>
                            <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Testimonials</span>
                        </Link>
                        <Link href="/ContactPage" passHref>
                            <span className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact us</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
