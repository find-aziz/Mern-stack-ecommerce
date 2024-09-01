import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--text)' : 'inherit', // Set text color based on active state
    backgroundColor: isActive ? 'var(--primary)' : 'transparent', // Set background color based on active state
  });
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h1>Admin Panel</h1>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
            style={getNavLinkStyle}
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
            style={getNavLinkStyle}
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
            style={getNavLinkStyle}
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
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

export default AdminMenu;
