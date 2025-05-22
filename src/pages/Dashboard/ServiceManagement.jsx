import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useDashboardControl from "../../hooks/useDashboardControl";

const ServiceManagement = () => {
  const axiosSecure = useAxiosSecure();
  const {services,serviceRefetch} = useDashboardControl();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosSecure.post("/service", data);
      console.log("Service added:", response.data);
      reset(); // clear form
      toast.success("Service Added Successfully");
      serviceRefetch()
    } catch (error) {
      console.error("Error adding service:", error.message);
      toast.error(error.message);
    }
  };
  // ! Handle Delete User
   // ? Handle Delete User 
    const handleDeleteUser =(service) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/service/${service._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            serviceRefetch();
            toast.success('Service successfully deleted from the database')
          }
        });
      }
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold">Add New Service</h2>

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
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
      <h1 className="text-3xl text-gray-700  text-center my-8">
        Manage Your Service{" "}
      </h1>
      {/* ! Here is all service to update and delete  */}
      {/* Services Grid */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center my-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-[380px] bg-[#EAF9FF] h-[330px] rounded flex flex-col items-center justify-center gap-4 p-4 text-center`}
          >
            {service.img && <img src={service.img} alt={service.title} />}
            <p className={`text-lg font-bold text-black`}>{service.title}</p>
            <p className={`${service.textColor}`}>{service.description}</p>
            <div className="flex w-full justify-around pb-4">
              <Link to={`/dashboard/update-service/${service._id}`}>
              <button className="btn bg-blue-600 text-white">Edit</button>
              </Link>
            <button onClick={() => handleDeleteUser(service)} className="btn bg-blue-600 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceManagement;
