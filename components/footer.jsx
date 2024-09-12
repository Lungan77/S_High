
import { AiFillMail, AiFillPhone, AiFillEnvironment } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BriefcaseIcon, UserGroupIcon, GlobeAltIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
                        <p className="text-gray-400">
                            We are dedicated to providing students with a well-rounded education that prepares them for the future. Our diverse programs foster academic excellence and personal growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Programs</a></li>
                            <li><a href="#" className="hover:text-white">Admissions</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <ul>
                            <li className="flex items-center mb-2">
                                <AiFillEnvironment className="w-5 h-5 text-gray-400 mr-2" />
                                <span>123 School St, City, Country</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <AiFillPhone className="w-5 h-5 text-gray-400 mr-2" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center">
                                <AiFillMail className="w-5 h-5 text-gray-400 mr-2" />
                                <span>info@school.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className='mt-10'>
                    <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8">
                        <li className="flex items-center space-x-2">
                            <BriefcaseIcon className="w-6 h-6 text-gray-300" />
                            <a href="#our-mission" className="hover:text-gray-400 text-lg md:text-xl">
                                Our Mission
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <GlobeAltIcon className="w-6 h-6 text-gray-300" />
                            <a href="#our-values" className="hover:text-gray-400 text-lg md:text-xl">
                                Our Values
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <UserGroupIcon className="w-6 h-6 text-gray-300" />
                            <a href="#our-team" className="hover:text-gray-400 text-lg md:text-xl">
                                Our Team
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <PhoneIcon className="w-6 h-6 text-gray-300" />
                            <a href="#contact-us" className="hover:text-gray-400 text-lg md:text-xl">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Social Media Links */}
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                </div>


                {/* Footer Bottom */}
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} S-High. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
