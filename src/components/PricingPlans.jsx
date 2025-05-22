import { FaCheck, FaXmark } from "react-icons/fa6";
import useDashboardControl from "../hooks/useDashboardControl";
import useAdmin from "../hooks/useAdmin";
import { Link } from "react-router-dom";
const PricingPlans = () => {
  const { pricingPlans } = useDashboardControl();
  const { isAdmin } = useAdmin();

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
                  <span className="text-2xl font-bold">{plan.price}</span>/per
                  month
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
                {isAdmin ? (
                   <Link to={`/dashboard/update-price/${plan._id}`}>
                    <button className="btn bg-[#00A3F7] text-white">
                      Edit
                    </button>
                  </Link>
                  
                ) : (
                 <Link
                    href="#"
                    className="h-6 w-24 bg-[#00A3F7] rounded text-white text-center hover:shadow-md hover:scale-105 transition-transform"
                  >
                    Order Now
                  </Link>
                )}
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
