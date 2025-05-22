import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/users");
      return data;
    },
  });
  console.log(users);

  //  Handle  Make Admin
  const handleMakeAdimn = async (user) => {
    const { data } = await axiosPublic.patch(`/user/makeAdmin/${user._id}`);
    console.log(data);
    if (data.modifiedCount > 0) {
      refetch();
      toast.success(`${user.name} is  now  an Admin  `);
    }
  };
  // ? Handle Delete User 
    const handleDeleteUser =(user) => {
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
        axiosPublic.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success('User successfully deleted from the database')
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="flex justify-evenly">
          <h2 className="text-3xl ">All Users</h2>
          <h2 className="text-3xl">Total users : {users.length}</h2>
        </div>
        <div className="overflow-x-auto w-2/3 mx-auto my-8">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id} user={user}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user.userRole === "Admin" ? (
                      <span className="text-xl text-orange-500">Admin</span>
                    ) : (
                      <button onClick={() => handleMakeAdimn(user)}>
                        <FaUsers className="text-orange-500 text-2xl"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDeleteUser(user)}>
                      <FaTrashAlt className="text-red-500 text-2xl"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
