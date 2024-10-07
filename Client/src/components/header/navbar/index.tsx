import HeaderTop from "../headertop";
import search from "../../../assets/serch.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpenTrouma, setIsOpenTrouma] = useState(false);
  const [isOpenSupport, setIsOpenSupport] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMenuTrouma = () => {
    setIsOpenTrouma(!isOpenTrouma);
  };
  const toggleMenuSupport = () => {
    setIsOpenSupport(!isOpenSupport);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <HeaderTop />
      <div className="container lg:mt-5 mt-3 relative mb-0">
        {/* Navbar */}
        <div className="lg:min-h-[80px] border-2 border-[#E3E3E3] rounded-full flex justify-between items-center px-6 py-2 lg:py-5 bg-dullwhite">
          {/* Title/ logo */}
          <div>
           <Link to='/'>
           <h3 className="text-lg lg:text-2xl text-secondary font-bold">
              Trauma Support
            </h3>
           </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl">
              ☰ {/* Hamburger icon */}
            </button>
          </div>

          {/* NavManu - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-3 text-[13px] font-medium">
              <li className="relative">
                <button
                  onClick={toggleMenuTrouma}
                  className="flex items-center"
                >
                  Understanding Trauma
                  <span className="ml-1">{isOpenTrouma ? "▲" : "▼"}</span>
                </button>
                {isOpenTrouma && (
                  <ul className="absolute left-0 top-10 mt-2 w-60 bg-dullwhite rounded-lg font-light">
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="#">Coping Strategies</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="#">Personal Stories</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="#">Educational Resources</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>Find a therapist</li>
             
              <li className="relative">
                <button
                  onClick={toggleMenuSupport}
                  className="flex items-center"
                >
                  Support Networks
                  <span className="ml-1">{isOpenSupport ? "▲" : "▼"}</span>
                </button>



                {isOpenSupport && (
                  <ul className="absolute left-0 top-10 mt-2 w-60 bg-dullwhite rounded-lg font-light">
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="#">Events and Workshops</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="#">Crisis Resources</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="#">Community Support</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="#">Personal Stories</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>Tools and Assessments </li>
            </ul>
          </div>

          {/* Contact and Search - Visible only on large screens */}
          <div className="hidden lg:flex gap-1 items-center">
            <button className="bg-primary text-base text-white py-3 px-6 rounded-full hvr-scl-primary">
              Contact Us
            </button>
            <span>
              <img src={search} alt="search" className="w-[50x]"/>
            </span>
          </div>
        </div>

        {/* Mobile Menu - Visible only when toggle is clicked */}
        {isMobileMenuOpen && (
          <div className="z-10 lg:hidden mt-4 bg-dullwhite p-6 rounded-lg absolute top-9 right-8 border-2 border-[#E3E3E3]">
            <ul className="flex flex-col space-y-4 text-sm font-medium">
              <li>
                <button
                  onClick={toggleMenuTrouma}
                  className="flex items-center justify-between w-full"
                >
                  Understanding Trauma
                  <span>{isOpenTrouma ? "▲" : "▼"}</span>
                </button>
                {isOpenTrouma && (
                  <ul className="pl-4 mt-2 font-light">
                    <li className="py-1 hover:bg-gray-100">
                      <a href="#">Coping Strategies</a>
                    </li>
                    <li className="py-1 hover:bg-gray-100">
                      <a href="#">Personal Stories</a>
                    </li>
                    <li className="py-1 hover:bg-gray-100">
                      <a href="#">Educational Resources</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>Find a therapist</li>
              <li>Find a therapist</li>
              <li>
                <button
                  onClick={toggleMenuSupport}
                  className="flex items-center justify-between w-full"
                >
                  Support
                  <span>{isOpenSupport ? "▲" : "▼"}</span>
                </button>
                {isOpenSupport && (
                  <ul className="pl-4 mt-2 font-light">
                    <li className="py-1 hover:bg-gray-100">
                      <a href="#">Events and Workshops</a>
                    </li>
                    <li className="py-1 hover:bg-gray-100">
                      <a href="#">Crisis Resources</a>
                    </li>
                    <li className="py-1 hover:bg-gray-100">
                      <a href="#">Community Support</a>
                    </li>
                    <li className="py-1 hover:bg-gray-100">
                      <a href="#">Personal Stories</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="flex gap-3">
                <span>
                  <img src={search} alt="search" />
                </span>
                <button className="bg-primary text-base text-white py-1 px-5 rounded-full w-full hvr-scl-primary">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
