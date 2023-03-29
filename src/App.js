import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Params from "./components/Toolbars/Params";
import ToolBar from "./components/Toolbars/ToolBar";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className=" relative h-screen flex-1 p-7">
        <NavBar />
      </div>
      <ToolBar />
      <Params />
    </div>
  );
};
export default App;
