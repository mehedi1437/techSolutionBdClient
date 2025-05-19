import { FaCheck, FaXmark } from "react-icons/fa6";
const PricingPlans = () => {
    const pricingPlans = [
  {
    title: "Basic Plan",
    subtitle: "FOR SMALL SIZE BUSINESS",
    price: "$50.00",
    features: [
      { label: "html & Css3", available: true },
      { label: "Boostrap v5", available: true },
      { label: "Responsive Layout", available: true },
      { label: "Cross-Browser Support", available: false }
    ]
  },
  {
    title: "Standard Plan",
    subtitle: "FOR SMALL SIZE BUSINESS",
    price: "$99.00",
    features: [
      { label: "html & Css3", available: true },
      { label: "Boostrap v5", available: true },
      { label: "Responsive Layout", available: true },
      { label: "Cross-Browser Support", available: false }
    ]
  },
  {
    title: "Advance Plan",
    subtitle: "FOR SMALL SIZE BUSINESS",
    price: "$199.00",
    features: [
      { label: "html & Css3", available: true },
      { label: "Boostrap v5", available: true },
      { label: "Responsive Layout", available: true },
      { label: "Cross-Browser Support", available: false }
    ]
  }
];
    return (
        <div>
            <div className="mx-20 my-10">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-[#00A3F7]">PRICING PLANS</p>
        <p className="text-4xl font-bold text-center">
          We are Offering Competitive Prices for Our Clients
        </p>
        <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
      </div>

      {/* Plans */}
      <div className="flex lg:flex-row flex-col items-center justify-center gap-4 mt-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#EAF9FF] h-[300px] w-[350px] p-4 flex flex-col justify-around rounded hover:scale-110 hover:bg-white hover:shadow-md transition-transform"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-[#00A3F7]">{plan.title}</p>
              <p className="text-xs">{plan.subtitle}</p>
              <p className="text-sm">
                <span className="text-2xl font-bold">{plan.price}</span>/per month
              </p>
            </div>

            <div>
              {plan.features.map((feature, i) => (
                <div key={i} className="flex justify-between">
                  <p>{feature.label}</p>
                  {feature.available ? (
                    <FaCheck className="text-[#00A3F7]" />
                  ) : (
                    <FaXmark className="text-[#FF0000]" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <a
                href="#"
                className="h-6 w-24 bg-[#00A3F7] rounded text-white text-center hover:shadow-md hover:scale-105 transition-transform"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default PricingPlans;