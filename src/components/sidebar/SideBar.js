import React, { useContext, useEffect } from "react";
import "./sideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/AppThemeContext";

function SideBar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/" className="navItem">
          {" "}
          <span className="logo">Admin dashbord</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li>
            <Link to="/" className="navItem">
              {" "}
              <DashboardIcon className="icon" />
              <span>Dashbord</span>
            </Link>
          </li>
          <p className="title">Lists</p>
          <li>
            <Link to="/users" className="navItem">
              {" "}
              <SupervisedUserCircleIcon className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="navItem">
              {" "}
              <AddBusinessIcon className="icon" />
              <span>Products</span>
            </Link>{" "}
          </li>
          <li>
            <Link to="/orders" className="navItem">
              {" "}
              <AddTaskIcon className="icon" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/delivery" className="navItem">
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </Link>
          </li>
          <p className="title">Services</p>
          <li>
            <Link to="/stats" className="navItem">
              {" "}
              <AssessmentIcon className="icon" />
              <span>Stats</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="navItem">
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </Link>
          </li>
          <p className="title">Profile</p>
          <li>
            <Link to="/settings" className="navItem">
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="logout" className="navItem">
              {" "}
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </Link>
          </li>{" "}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => {
            dispatch({ type: "LIGHT" });
          }}
        ></div>
        <div
          className="colorOptions"
          onClick={() => {
            dispatch({ type: "DARK" });
          }}
        ></div>
      </div>
    </div>
  );
}

export default SideBar;
