import useDashboardControl from "../hooks/useDashboardControl";

const OurService = () => {
  const {services} = useDashboardControl();
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
            className={`w-[380px] bg-[#EAF9FF] h-[300px] rounded flex flex-col items-center justify-center gap-4 p-4 text-center`}
          >
            {service.img && <img src={service.img} alt={service.title} />}
            <p className={`text-lg font-bold text-black`}>{service.title}</p>
            <p className={`text-black`}>{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
