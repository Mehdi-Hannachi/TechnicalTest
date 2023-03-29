import { useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import {
  AiOutlineHome,
  AiOutlineIssuesClose,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { SlOrganization } from "react-icons/sl";
import { VscOrganization } from "react-icons/vsc";
import { SiVitest, SiExpensify } from "react-icons/si";
import { BiTime } from "react-icons/bi";
import {
  RiContactsLine,
  RiCopperCoinLine,
  RiSendPlane2Line,
} from "react-icons/ri";
import {
  MdOutlineDashboard,
  MdOutlineNavigateBefore,
  MdOutlineContacts,
  MdOutlineAccountBalance,
  MdComputer,
} from "react-icons/md";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: <MdOutlineDashboard size={20} /> },
    { title: "Reports", src: <TbReportSearch size={20} /> },
    { title: "Organization", src: <SlOrganization size={20} />, gap: true },
    { title: "Profiles ", src: <VscOrganization size={20} /> },
    { title: "Resources", src: <RiContactsLine size={20} /> },
    {
      title: "Accounts",
      src: <MdOutlineAccountBalance size={20} />,
      gap: true,
    },
    { title: "Contacts ", src: <MdOutlineContacts size={20} /> },
    { title: "Opportunities", src: <RiCopperCoinLine size={20} /> },
    { title: "Risks ", src: <SiVitest size={20} />, gap: true },
    { title: "Issues", src: <AiOutlineIssuesClose size={20} /> },
    { title: "Activities ", src: <RiSendPlane2Line size={20} /> },
    {
      title: "Documents",
      src: <MdComputer size={20} />,
      gap: true,
    },
    { title: "Expenses", src: <SiExpensify size={20} /> },
    { title: "Time", src: <BiTime size={20} /> },
    { title: "Approvals", src: <AiOutlineCheckCircle size={20} /> },
  ];

  return (
    <div
      className={` ${
        open ? "w-44" : "w-20 "
      }   h-screen overflow-y-auto overflow-x-visible	overflow-x-clip	 no-scrollbar p-5  pt-8 relative duration-300`}
      style={{
        backgroundColor: "#2F4858",
      }}
    >
      <MdOutlineNavigateBefore
        className={`absolute cursor-pointer -right-0 top-9 w-5
              ${!open && "rotate-180"}`}
        style={{
          backgroundColor: "#E28D5A",
          color: "white",
          borderRadius: "50%",
        }}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <AiOutlineHome
          color="white"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          My WinX
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            {Menu.src}

            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
