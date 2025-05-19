import serviceIcon from "../assets/images/cybersecurity.png";
const OurService = () => {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Digital Marketing refers to the practice of promoting brands, products, and services using online channels, strategies, and technologies to attract, engage, and convert audiences.",
      img: serviceIcon,
      bgColor: "#EAF9FF",
      textColor: "text-black",
    },
    {
      title: "Graphic Design",
      description:
        "Graphic Design is the process of creating visual content using typography, imagery, colors, and layout techniques to communicate messages, enhance branding, and engage audiences effectively.",
      img: serviceIcon,
      bgColor: "#EAF9FF",
      textColor: "text-black",
    },
    {
      title: "Web Development",
      description:
        "Web development is the process of creating and maintaining websites or web applications for the internet. It involves a combination of skills and technologies to design, build, and manage websites.",
      img: serviceIcon,
      bgColor: "#EAF9FF",
      textColor: "text-black",
    },
    {
      title: "App Development",
      description:
        "App development refers to the process of creating software applications, often designed to run on mobile devices like smartphones and tablets, but it can also refer to applications for desktop computers or web-based platforms.",
      img: serviceIcon,
      bgColor: "#EAF9FF",
      textColor: "text-black",
    },
    {
      title: "SEO Optimization",
      description:
        "SEO (Search Engine Optimization) is the process of improving the visibility and ranking of a website or web page in search engine results. This is done to increase organic (non-paid) traffic to a website.",
      img: serviceIcon,
      bgColor: "#EAF9FF",
      textColor: "text-black",
    },
    {
      title: "Call Us For Quote",
      description:
        "I'm just a text-based AI and I'm unable to make phone calls. However, if you're looking to request a quote from a specific business or service, you should find their contact information on their website or in any materials they've provided.",
      phone: "+8801823854012",
      bgColor: "#00A3F7",
      textColor: "text-white",
    },
  ];
  return (
    <div className="mx-20 my-10">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-[#00A3F7]">OUR SERVICES</p>
        <p className="text-4xl font-bold text-center">
          Custom IT Solutions for Your Successful Business
        </p>
        <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center my-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-[380px] h-[300px] rounded flex flex-col items-center justify-center gap-4 p-4 text-center`}
            style={{ backgroundColor: service.bgColor }}
          >
            {service.img && <img src={service.img} alt={service.title} />}
            <p className={`text-lg font-bold ${service.textColor}`}>
              {service.title}
            </p>
            <p className={`${service.textColor}`}>{service.description}</p>
            {service.phone && (
              <p className={`text-3xl font-bold ${service.textColor}`}>
                {service.phone}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
