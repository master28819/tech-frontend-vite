import React from 'react';

const Navbar = () => {
  return (
    <header className="shadow-md font-poppins transition-colors bg-gray-100 dark:bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Tech2Xplore
        </div>

        <ul className="hidden md:flex space-x-6 list-none">
          {['Home', 'About', 'Contact'].map(item => (
            <li
              key={item}
              className="font-medium cursor-pointer text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
