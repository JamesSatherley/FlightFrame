import React from 'react';

const Navigation = () => {
  return (
    <nav className="py-4 bg-gray-800 text-white">
      <ul className="flex justify-center flex-col">
        <li><a href="#portfolio" className="mr-6 hover:text-gray-400">Portfolio</a></li>
        <li><a href="#contact" className="mr-6 hover:text-gray-400">Contact</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
