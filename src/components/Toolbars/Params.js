import React from "react";
import "./toolbars.css";
import {
  AiOutlineIssuesClose,
} from "react-icons/ai";
import { VscOrganization } from "react-icons/vsc";
import { BiTime } from "react-icons/bi";
import {
  RiContactsLine,
  RiSendPlane2Line,
} from "react-icons/ri";
import {
  MdComputer,
} from "react-icons/md";

const Params = () => {
  return (
    <div>
      <ul className="sticky-params nav flex-row mt-4 p-2 px-2">
        <li className="nav-item p-1 w-10 h-10 params border rounded">
          <BiTime size={15} />
        </li>
        <li className="nav-item p-1 w-10 h-10 params border rounded ">
          <RiContactsLine size={15} />
        </li>
        <li className="nav-item p-1 w-10 h-10 params border rounded ">
          <MdComputer size={15} />
        </li>
        <li className="nav-item p-1 w-10 h-10 params border rounded ">
          <RiSendPlane2Line size={15} />
        </li>
        <li className="nav-item p-1 w-10 h-10 params border rounded">
          <VscOrganization size={15} />
        </li>
        <li className="nav-item p-1 w-10 h-10 params border rounded">
          <AiOutlineIssuesClose size={15} />
        </li>
        <li className="nav-item p-1 w-10 h-10 params border rounded">
          <AiOutlineIssuesClose size={15} />
        </li>
        <li className="nav-item p-1 w-10 h-10 params border rounded">
          <AiOutlineIssuesClose size={15} />
        </li>
      </ul>
    </div>
  );
};

export default Params;
