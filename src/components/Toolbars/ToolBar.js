import React from "react";
import "./toolbars.css";
import {
  MdOutlineDashboard,
  MdOutlineContacts,
  MdOutlineAccountBalance,
  MdComputer,
} from "react-icons/md";
const ToolBar = () => {
  return (
    <div>
      <ul className="sticky-toolbar nav flex-column pl-2 pr-2 pt-3  mt-4">
        <li className="nav-item mb-5">
          <MdComputer color="white" />
        </li>

        <li className="nav-item mb-5">
          <MdOutlineAccountBalance color="white" />
        </li>
        <li className="nav-item mb-5">
          <MdOutlineContacts color="white" />
        </li>
        <li className="nav-item mb-5">
          <MdOutlineDashboard color="white" />
        </li>
      </ul>
    </div>
  );
};

export default ToolBar;
