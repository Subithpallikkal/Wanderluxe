import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-transparent text-white ">
      <div className="absolute inset-8 flex justify-center items-center">
        {/* Centered Header Content */}
        <div className="w-1/2 md:w-2/3 lg:w-1/3 rounded-full backdrop-blur-xl shadow-lg p-3">
          <nav className="hidden md:flex justify-around">
            <a href="#" className="hover:text-yellow-300">International Packages</a>
            <a href="#" className="hover:text-yellow-300">Indian Packages</a>
            <a href="#" className="hover:text-yellow-300">Destination</a>
            <a href="#" className="hover:text-yellow-300">About</a>
            <a href="#" className="hover:text-yellow-300">Contact</a>
          </nav>
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex justify-between items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              {isOpen ? "Close Menu" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 rounded-lg mt-3 p-2">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:text-yellow-300">International Packages</a>
            <a href="#" className="hover:text-yellow-300">Indian Packages</a>
            <a href="#" className="hover:text-yellow-300">Destination</a>
            <a href="#" className="hover:text-yellow-300">About</a>
            <a href="#" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
