import { useState } from "react";
import { Button } from "./button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white flex items-center justify-between px-8 py-4 shadow-md relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/tesla-brand-logo-symbol-name-black-design-usa-car-vector-46155475.avif"
            alt="Tesla Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Button item={`Fleet`} />
          <Button item={`Analytics`} />
          <Button item={`Sustainability`} />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Hamburger icon */}
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Sidebar - initially hidden */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col space-y-6 p-8">
          <Button item={`Fleet`} />
          <Button item={`Analytics`} />
          <Button item={`Sustainability`} />
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 text-red-400 font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
