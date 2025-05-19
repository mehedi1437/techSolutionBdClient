import { useState } from "react";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import logoImg from "../assets/images/fav.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  return (
    <div>
      <div className="sticky top-0 z-20 bg-transparent">
        <div className="flex justify-around items-center h-16 border bg-white z-50">
          {/* Logo and mobile drawer */}
          <div className="flex justify-around items-center gap-2">
            {/* Drawer toggle button (mobile) */}
            <div className="lg:hidden block">
              <button onClick={toggleDrawer} className="cursor-pointer text-xl">
                <FaBars />
              </button>

              {/* Drawer menu */}
              {isDrawerOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
                  <div className="bg-base-200 text-base-content w-64 h-full p-4 text-xl fixed top-0 left-0">
                    <button
                      onClick={toggleDrawer}
                      className="flex justify-end w-full text-right mb-4"
                    >
                      <FaTimes />
                    </button>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <Link to="/" className="hover:text-[#00A3F7]">
                          Home
                        </Link>
                      </li>
                      <li>
                        <a href="/about" className="hover:text-[#00A3F7]">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/service" className="hover:text-[#00A3F7]">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/blog" className="hover:text-[#00A3F7]">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="/price" className="hover:text-[#00A3F7]">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="hover:text-[#00A3F7]">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Logo */}
            <div className="h-9 w-9 rounded bg-[#061E42] flex items-center justify-center">
              <img src={logoImg} alt="Tech Solution BD" className="h-8" />
            </div>
            <p className="md:block hidden">Tech Solution BD</p>
          </div>

          {/* Desktop Navigation */}
          <div>
            <ul className="lg:flex gap-4 hidden">
              <li>
                <a href="/" className="hover:text-[#00A3F7]">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#00A3F7]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-[#00A3F7]">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#00A3F7]">
                  Blog
                </a>
              </li>
              <li>
                <a href="/price" className="hover:text-[#00A3F7]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#00A3F7]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Search + CTA button */}
          <div className="flex gap-4 items-center">
            <FaMagnifyingGlass className="text-[#00A3F7]" />
            <button className="py-2 px-6 rounded bg-[#00A3F7] text-white">
              Lets Talk us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
