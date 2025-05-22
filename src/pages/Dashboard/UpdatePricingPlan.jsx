import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const UpdatePricingPlan = () => {
  const initialData = useLoaderData();

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: initialData,
  });
  const { fields } = useFieldArray({
    control,
    name: "features",
  });
  const onSubmit = async (data) => {
    console.log(data);
    const dataForUpdate = {
      title: data.title,
      subtitle: data.subtitle,
      price: data.price,
      features: data.features,
    };
    console.log(dataForUpdate);
    try {
      const res = await axiosSecure.put(
        `/price/${initialData._id}`,
        dataForUpdate,
        { withCredentials: true }
      );
      console.log("Updated successfully:", res.data);
      toast.success("Plan updated successfully!");
      navigate("/price");
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-center">Update Your Pricing plan</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Title:</label>
          <input {...register("title")} className="border p-2 w-full" />
        </div>

        <div>
          <label className="block">Subtitle:</label>
          <input {...register("subtitle")} className="border p-2 w-full" />
        </div>

        <div>
          <label className="block">Price:</label>
          <input {...register("price")} className="border p-2 w-full" />
        </div>

        <div>
          <label className="block">Features:</label>
          {fields.map((item, index) => (
            <div key={item.id} className="flex items-center gap-4 mb-2">
              <input
                {...register(`features.${index}.label`)}
                className="border p-1 flex-1"
                placeholder="Feature label"
              />
              <label className="flex items-center gap-1">
                <input
                  type="checkbox"
                  {...register(`features.${index}.available`)}
                />
                Available
              </label>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Plan"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePricingPlan;
