import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    {/* <Link to="/" className="text-xl font-bold">
                        My App
                    </Link> */}
                    <a href="/">Home</a>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/login">Login</a>

                            {/* <Link to="/login" className="hover:text-gray-300">
                                Login
                            </Link> */}
                        </li>
                        <li>
                            <a href="/register">Register</a>

                            {/* <Link to="/register" className="hover:text-gray-300">
                                Register
                            </Link> */}
                        </li>
                        <li>
                            <a href="/courses">Courses</a>

                            {/* <Link to="/courses" className="hover:text-gray-300">
                                Courses
                            </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
