import { FaPhone, FaReply } from "react-icons/fa6";
const RequestAQuoteSection = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-2 my-10 flex lg:flex-row flex-col gap-6">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 items-center">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-[#00A3F7]">REQUEST A QUOTE</p>
            <p className="text-4xl font-bold text-center">
              Need A Free Quote? Please Feel Free to Contact Us
            </p>
            <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
          </div>

          {/* Highlights */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <FaReply className="text-[#00A3F7]" />
              <p>Reply within 24 hours</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#00A3F7]" />
              <p>24 hours telephone support</p>
            </div>
          </div>

          {/* Description */}
          <div className="text-sm text-center lg:text-left">
            <p>
              I'd be happy to provide you with a free quote! However, I would
              need more information about what you need a quote for. Please
              provide details about the product or service you're interested in,
              any specific requirements, and any other relevant information, so
              I can assist you in generating an accurate quote.
            </p>
          </div>

          {/* Phone CTA */}
          <div className="flex gap-2 items-center justify-center w-52">
            <div className="h-10 w-10 bg-[#00A3F7] flex items-center justify-center">
              <FaPhone className="text-lg text-white" />
            </div>
            <div className="text-xs">
              <p>Call to ask any question</p>
              <p className="text-[#00A3F7]">+8801823854012</p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 w-full bg-[#00A3F7] p-6 rounded">
          <form
            id="usrform"
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // You can add form submission logic here
              alert("Quote submitted!");
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-[#EAF9FF] w-full p-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-[#EAF9FF] w-full p-4"
              required
            />

            <select
              id="service"
              name="service"
              className="bg-[#EAF9FF] p-4 w-full"
              required
            >
              <option value="">Select a service</option>
              <option value="digitalmarketing">Digital Marketing</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="canva">Canva Premium</option>
              <option value="social">Social Media Marketing</option>
            </select>

            <textarea
              name="comment"
              placeholder="Enter message here..."
              className="bg-[#EAF9FF] w-full p-4 text-slate-400"
              rows="4"
            ></textarea>

            <input
              type="submit"
              value="Send Now!"
              className="bg-[#061E42] text-white p-4 w-full hover:bg-[#364b6b] cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestAQuoteSection;
