import { FaCheck, FaPhone } from "react-icons/fa6";
import aboutImage from '../assets/images/about.png'
const AboutUs = () => {
    return (
        <div>
            
    <div className="lg:mx-20 mx-2 my-10 flex lg:flex-row flex-col items-center justify-around gap-6">
      {/* Left content */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6 items-start">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-[#00A3F7]">About Us</p>
          <p className="text-4xl font-bold text-center">
            The Best IT Solution With 10 Years of Experience
          </p>
          <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
        </div>

        {/* Description */}
        <div className="text-sm">
          <p>
            I'd be happy to provide you with a free quote! However, I would
            need more information about what you need a quote for. Please
            provide details about the product or service you're interested in,
            any specific requirements, and any other relevant information, so I
            can assist you in generating an accurate quote.
          </p>
        </div>

        {/* Features */}
        <div className="flex lg:flex-row flex-col items-center gap-8">
          {["Client Approach", "24/7 Support", "Proffesional Staff", "Fair Prices"].map((text, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <FaCheck className="text-[#00A3F7]" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* Call info */}
        <div className="flex gap-2 items-center justify-center w-52">
          <div className="h-10 w-10 bg-[#00A3F7] flex items-center justify-center">
            <FaPhone className="text-lg text-white" />
          </div>
          <div className="text-xs">
            <p>Call to ask any question</p>
            <p className="text-[#00A3F7]">+8801823854012</p>
          </div>
        </div>

        {/* CTA button */}
        <div className="bg-[#00A3F7] p-4 rounded">
          <a href="price.html" className="text-white">
            Request A Quote
          </a>
        </div>
      </div>

      {/* Image section */}
      <div>
        <img src={aboutImage} alt="About Tech Solution BD" />
      </div>
    </div>
        </div>
    );
};

export default AboutUs;