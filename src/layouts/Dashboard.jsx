import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="lg:grid grid-cols-4 gap-4">
        {/* Sidebar */}
        <aside className="bg-gray-800 col-span-1 lg:h-screen p-8 fixed ">
          <ul className="mt-10 space-y-4 text-white font-mono text-lg font-bold ">
            <li>
              <Link to="/dashboard/">Dashboard Home</Link>
            </li>
            <li>
              <Link to="/dashboard/service-management">Service Management</Link>
            </li>
            <li>
              <Link to="/dashboard/price-management">Price Management</Link>
            </li>
            <li>
              <Link to="/dashboard/team-management">Team Management</Link>
            </li>
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/view-profile">View and Edit Profile</Link>
            </li>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="col-start-2 col-span-3 bg-white p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
