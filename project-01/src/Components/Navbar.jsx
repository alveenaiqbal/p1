import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <img src="https://raw.githubusercontent.com/themewagon/simple/378bac9c1dcfb93d991984088b6098d6d6e07948/images/Group2.svg"/>
          {/* <h1 className="text-2xl font-bold text-gray-800">Simple</h1> */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-600 font-bold hover:text-red-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-bold hover:text-red-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-bold hover:text-red-500"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-bold hover:text-red-500"
              >
                Testimonials
              </a>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-white hover:text-sky-500 border border-sky-500 transition">
            Contact Us
          </button>
          {/* <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-wh-700">Contact us</button> */}
          {/* <button className="md:hidden text-gray-600">☰</button>  */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
