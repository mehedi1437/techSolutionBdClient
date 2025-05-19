import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";
import logo from "../assets/images/fav.png";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* Top Section */}
        <div className="h-auto bg-[#061E42] flex lg:flex-row flex-col gap-8 lg:pb-0 pb-10 px-10 items-center justify-around text-white">
          {/* Company Info */}
          <div className="bg-[#00A3F7] p-10 h-[400px] w-[350px] flex flex-col justify-around">
            <div className="flex gap-4 items-center">
              <div className="h-9 w-9 rounded bg-[#061E42] flex items-center justify-center">
                <img src={logo} alt="Tech Solution BD" className="h-8" />
              </div>
              <p>Tech Solution BD</p>
            </div>
            <p>
              I'd be happy to provide you with information about an IT company.
              However, I would need more specific details or the name of the
              company you have in mind to provide you with accurate information.
            </p>

            <div className="flex justify-center">
              <form className="flex">
                <input
                  type="email"
                  name="email"
                  className="py-4 px-2 bg-white text-[#04142B]"
                  placeholder="Enter Your Email"
                />
                <button
                  type="submit"
                  className="py-4 px-2 text-white bg-[#04142B]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between text-center lg:text-left">
            <p className="text-lg underline underline-offset-8 decoration-[#00A3F7] decoration-4">
              Get to Touch
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-2">
                <FaLocationDot /> Aftabnagar Merul Badda, Dhaka,1212
              </li>
              <li className="flex items-center gap-2">
                <FaPhone /> +8801823854012
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> info@techsolutionbd.com
              </li>
            </ul>
            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
              <a href="#">
                <FaFacebook className="p-2 bg-[#00A3F7] rounded text-white text-xl" />
              </a>
              <a href="#">
                <FaInstagram className="p-2 bg-[#00A3F7] rounded text-white text-xl" />
              </a>
              <a href="#">
                <FaYoutube className="p-2 bg-[#00A3F7] rounded text-white text-xl" />
              </a>
              <a href="#">
                <FaLinkedinIn className="p-2 bg-[#00A3F7] rounded text-white text-xl" />
              </a>
              <a href="#">
                <FaXTwitter className="p-2 bg-[#00A3F7] rounded text-white text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg underline underline-offset-8 decoration-[#00A3F7] decoration-4">
              Quick Links
            </p>
            <ul className="mt-6 space-y-2">
              <li>
                <a href="index.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Home
                </a>
              </li>
              <li>
                <a href="aboutus.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> About Us
                </a>
              </li>
              <li>
                <a href="service.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Our
                  Services
                </a>
              </li>
              <li>
                <a href="price.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Pricing
                </a>
              </li>
              <li>
                <a href="blog.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Latest Blog
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <p className="text-lg underline underline-offset-8 decoration-[#00A3F7] decoration-4">
              Popular Links
            </p>
            <ul className="mt-6 space-y-2">
              <li>
                <a href="index.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Home
                </a>
              </li>
              <li>
                <a href="aboutus.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> About Us
                </a>
              </li>
              <li>
                <a href="service.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Our
                  Services
                </a>
              </li>
              <li>
                <a href="price.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Pricing
                </a>
              </li>
              <li>
                <a href="blog.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Latest Blog
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <FaArrowRight className="inline text-[#00A3F7]" /> Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-14 bg-[#04142B] flex flex-col items-center justify-center text-white text-center text-sm px-2">
          <p>
            &copy; Tech Solution BD | 2025, All Rights Reserved! | Designed By{" "}
            <a
              href="https://www.facebook.com/abdullah.fahim.507"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:underline-offset-2"
            >
              Md Abdullah Al Fahim
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
