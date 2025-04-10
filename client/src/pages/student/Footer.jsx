import React from "react";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";

function Footer() {
    return (
        <>
            <hr />
            <footer className="py-12">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className=" flex flex-col items-center justify-center">
                        <div className="flex space-x-4 text-slate-900">
                            <a><FaFacebookSquare size={24} className="hover:scale-125 transition-all duration-100 ease-in" /> </a>
                            <a><FaGithubSquare size={24} className="hover:scale-125 transition-all duration-100 ease-in" /> </a>
                            <a><FaLinkedin size={24} className="hover:scale-125 transition-all duration-100 ease-in" /> </a>
                            <a><FaInstagramSquare size={24} className="hover:scale-125 transition-all duration-100 ease-in" /></a>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                            <p className="text-sm text-slate-950">
                                &copy; 2025 Suraj Maurya. All Right Reserved.
                            </p>
                            <p className="text-sm text-slate-950">Supportive Partner ❤️ Muskan </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;