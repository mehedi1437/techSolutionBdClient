import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDashboardControl = () => {
  // !service data
  const axiosSecure = useAxiosSecure();
  const { data: services = [], refetch: serviceRefetch } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/service`);
      console.log(data);
      return data;
    },
  });

  // Pricing data
  const { data: pricingPlans = [], refetch: priceRefetch } = useQuery({
    queryKey: ["price"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/price`);
      console.log(data);
      return data;
    },
  });

  //  Team members  data
  const { data: teamMembers = [], refetch: teamRefetch } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/teams`);
      console.log(data);
      return data;
    },
  });

  return {
    services,
    serviceRefetch,
    pricingPlans,
    priceRefetch,
    teamMembers,
    teamRefetch,
  };
};

export default useDashboardControl;
