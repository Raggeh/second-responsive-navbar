import React from "react";
import Logo from "../Assests/logo - Copy.jpg";

const Navbar = () => {
  return (
    <header className="bg-blue-600">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img src={Logo} alt="" className="w-16 rounded-full" />
        </div>

        <div className="md:static absolute   md:min-h-fit min-h-[60vh] bg-white md:bg-blue-600   left-0 top-[12.2%] md:w-auto w-full flex items-center px-5">
          <ul className="md:text-white flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-700" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="hover:text-gray-700" href="/Course" cl>
                Courses
              </a>
            </li>

            <li>
              <a className="hover:text-gray-700" href="/Practice">
                Practice
              </a>
            </li>

            <li>
              <a className="hover:text-gray-700" href="/Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="border-2 px-4 py-2 rounded-full text-white ">
            {" "}
            Get Started{" "}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
