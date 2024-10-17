import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import HeaderTop from "../headertop";
import search from "../../../assets/serch.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpenTrouma, setIsOpenTrouma] = useState(false);
  const [isOpenSupport, setIsOpenSupport] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // Get the current location

  // Close sub-menus when navigating to a new page
  useEffect(() => {
    setIsOpenTrouma(false);
    setIsOpenSupport(false);
    setIsMobileMenuOpen(false); // Close mobile menu if needed
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <HeaderTop />
      <div className="container lg:mt-5 mt-3 relative mb-0 z-[200]">
        {/* Navbar */}
        <div className="lg:min-h-[80px] border-2 border-[#E3E3E3] rounded-full flex justify-between items-center px-6 py-2 lg:py-5 bg-dullwhite">
          {/* Title/ logo */}
          <div>
            <Link to='/'>
              <h3 className="text-lg lg:text-2xl text-secondary font-bold hover:scale-[1.02]">
                Trauma Support
              </h3>
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl text-gray-800">
              {!isMobileMenuOpen? <Menu strokeWidth={2} size={32}/> : <X strokeWidth={2} size={32}/>}
            </button>
          </div>

          {/* NavMenu - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-5 text-[15px] font-medium">
              <li className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => { setIsOpenTrouma(true); setIsOpenSupport(false) }}
                >
                  Understanding Trauma
                  <span className="ml-1">{isOpenTrouma ? "▲" : "▼"}</span>
                </div>
                {isOpenTrouma && (
                  <ul className="absolute left-0 top-10 mt-2 w-60 bg-dullwhite rounded-lg font-light">
                    <li className="py-2 px-4 hover:bg-gray-100" >
                      <Link to="/understanding-trouma">Trauma Details</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/stories">Personal Stories</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/resource-library">Resources</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li onMouseEnter={() => { setIsOpenTrouma(false); setIsOpenSupport(false) }}><Link to='/find-a-therapist'>Find a therapist</Link></li>

              <li className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => { setIsOpenTrouma(false); setIsOpenSupport(true) }}
                >
                  Support Networks
                  <span className="ml-1">{isOpenSupport ? "▲" : "▼"}</span>
                </div>
                {isOpenSupport && (
                  <ul className="absolute left-0 top-10 mt-2 w-60 bg-dullwhite rounded-lg font-light">
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/resource-library/details">Detailed Resources</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/therapist-chat">Chat with Therapist</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/chat-room">Community Chat</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/stories">Personal Stories</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li onMouseEnter={() => { setIsOpenTrouma(false); setIsOpenSupport(false) }}><Link to='/about-us'>About Us</Link></li>
            </ul>
          </div>

          {/* Contact and Search - Visible only on large screens */}
          <div className="hidden lg:flex gap-1 items-center">
            <button className="bg-primary text-base text-white py-3 px-6 rounded-full hvr-scl-primary">
              <Link to={'/therapist-chat'}>Contact Us</Link>
            </button>
            <span>
              <img src={search} alt="search" className="w-[50x]" />
            </span>
          </div>
        </div>

        {/* Mobile Menu - Visible only when toggle is clicked */}
        <div
          className={`z-10 lg:hidden mt-4 bg-dullwhite p-6 rounded-lg absolute top-9 right-8 border-2 border-[#E3E3E3] w-[280px] transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none', // Ensures the menu is not clickable when closed
          }}
        >
          <ul className="flex flex-col space-y-6 text-sm font-medium">
            <li>
              <div onClick={() => setIsOpenTrouma((prev) => !prev)}>
                Understanding Trauma
                <span>{isOpenTrouma ? '▲' : '▼'}</span>
              </div>
              {isOpenTrouma && (
                <ul className="pl-4 mt-2 font-light space-y-1">
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/understanding-trouma">Trauma Details</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/stories">Personal Stories</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/resource-library">Resources</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/find-a-therapist">Find a therapist</Link>
            </li>
            <li>
              <div onClick={() => setIsOpenSupport((prev) => !prev)}>
                Support
                <span>{isOpenSupport ? '▲' : '▼'}</span>
              </div>
              {isOpenSupport && (
                <ul className="pl-4 mt-2 font-light space-y-1">
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/resource-library/details">Detailed Resources</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/therapist-chat">Chat with Therapist</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/chat-room">Community Chat</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/stories">Personal Stories</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="flex gap-3">
              <span>
                <img src={search} alt="search" />
              </span>
              <button className="bg-primary text-base text-white py-1 px-5 rounded-full w-full hvr-scl-primary">
                <Link to="/therapist-chat">Contact Us</Link>
              </button>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Navbar;
