import iconIndustry from '../assets/images/icon_industry.png'
import middleImage from '../assets/images/Rectangle.png'
const WhyChooseUs = () => {
    return (
        <div>
            <div className="mx-20 my-10">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-[#00A3F7]">WHY CHOOSE US</p>
        <p className="text-4xl font-bold text-center">
          We Are Here to Grow Your Business Exponentially
        </p>
        <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
      </div>

      {/* Content Rows */}
      <div className="my-6 flex lg:flex-row flex-col gap-4 items-center justify-center">
        {/* Left Column */}
        <div className="mx-2 flex flex-col gap-4">
          <div className="w-[380px]">
            <img src={iconIndustry} alt="Best in Industry" />
            <p className="text-lg font-bold">Best In Industry</p>
            <p>
              "Best in Industry" is a term used to describe a company, product,
              service, or individual that is considered the top performer or
              leader within a particular industry or sector.
            </p>
          </div>
          <div className="w-[380px]">
            <img src={iconIndustry} alt="Client-Centric" />
            <p className="text-lg font-bold">Client-Centric Approach</p>
            <p>
              Your success is our priority. We work closely with you to deliver
              customized solutions that drive results.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div>
          <img src={middleImage} alt="Middle Visual" />
        </div>

        {/* Right Column */}
        <div className="mx-2 flex flex-col gap-4">
          <div className="w-[380px]">
            <img src={iconIndustry} alt="Professional Staff" />
            <p className="text-lg font-bold">Proffesonal Staff</p>
            <p>
              Professional staff typically refers to individuals who work in a
              professional capacity within an organization or industry. These
              individuals are often highly skilled or educated.
            </p>
          </div>
          <div className="w-[380px]">
            <img src={iconIndustry} alt="24/7 Support" />
            <p className="text-lg font-bold">24/7 Support</p>
            <p>
              "24/7 support" refers to a customer service or technical support
              system that is available around the clock, 24 hours a day, 7 days
              a week.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default WhyChooseUs;