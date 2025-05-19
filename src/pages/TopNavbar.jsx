import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div>
      <div className="h-11 bg-[#061E42] text-white flex items-center">
        <div className="flex justify-around w-full">
          {/* Left info (hidden on small screens) */}
          <div className="md:flex gap-8 hidden items-center text-sm">
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt /> Aftabnagar Merul Badda, Dhaka,1212
            </p>
            <p className="flex items-center gap-1">
              <FaPhone /> +8801823854012
            </p>
            <p className="flex items-center gap-1">
              <FaEnvelope /> info@techsolutionbd.com
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 text-lg">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
