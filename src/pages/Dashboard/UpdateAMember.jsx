import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateAMember = () => {
  const navigate = useNavigate();
  const { _id, name, role, image } = useLoaderData();

  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosSecure.put(`/team/${_id}`, data, {
        withCredentials: true,
      });
      console.log("Service Updated :", response.data);
      toast.success(`${data.name}'s info Updated Successfully`);
      navigate("/dashboard/team-management");
    } catch (error) {
      console.error("Error updating service:", error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold">{`Update ${name}'s Information `}</h2>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            defaultValue={name}
            {...register("name", { required: "Name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <textarea
          defaultValue={role}
            {...register("role", {
              required: "role is required",
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            defaultValue={image}
            {...register("image")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateAMember;
