import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--text)' : 'inherit', // Set text color based on active state
    backgroundColor: isActive ? 'var(--primary)' : 'transparent', // Set background color based on active state
  });
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h1 className="text-center mt-5">Dashboard</h1>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
            style={getNavLinkStyle}
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
            style={getNavLinkStyle}
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
