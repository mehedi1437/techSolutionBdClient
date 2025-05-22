import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateAService = () => {
  const navigate = useNavigate();
  const { _id, title, description, img } = useLoaderData();

  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosSecure.put(`/service/${_id}`, data, {
        withCredentials: true,
      });
      console.log("Service Updated :", response.data);
      toast.success("Service Updated Successfully");
      navigate("/service");
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
        <h2 className="text-2xl font-bold">Update A Service</h2>

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            defaultValue={title}
            {...register("title", { required: "Title is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            defaultValue={description}
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            {...register("img")}
            defaultValue={img}
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

export default UpdateAService;
