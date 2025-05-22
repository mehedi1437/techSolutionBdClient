import { useForm } from "react-hook-form";
import useDashboardControl from "../../hooks/useDashboardControl";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TeamManagement = () => {
  const { teamMembers, teamRefetch } = useDashboardControl();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosSecure.post("/team", data);
      console.log("Team Member added:", response.data);
      reset(); // clear form
      toast.success("Team Member Added Successfully");
      teamRefetch();
    } catch (error) {
      console.error("Error adding Team member:", error.message);
      toast.error(error.message);
    }
  };
  // ! Handle Delete User
  // ? Handle Delete User
  const handleDeleteUser = (team) => {
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
        axiosSecure.delete(`/team/${team._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            teamRefetch();
            toast.success(
              `${team.name} is successfully deleted from the database`
            );
          }
        });
      }
    });
  };
  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold">Add New Member</h2>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <textarea
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

      {/* Edit and delete YOur team member */}
      <h1 className="text-3xl text-center mt-4">Manage Your team </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-items-center my-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col h-[350px] bg-[#EAF9FF]  w-[300px] rounded my-6 shadow-md mb-12"
          >
            <div className="h-[200px] shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="h-[200px] w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-10">
              <p className="text-2xl text-[#00A3F7] font-bold">{member.name}</p>
              <p className="text-slate-700">{member.role}</p>
            </div>
            <div className="flex justify-around mt-8">
              <Link to={`/dashboard/update-member/${member._id}`}>
                <button className="btn bg-[#00A3F7] text-white">Edit</button>
              </Link>
              <button
                onClick={() => handleDeleteUser(member)}
                className="btn bg-[#00A3F7] text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;
