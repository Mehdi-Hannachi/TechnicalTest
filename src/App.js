import Dash from "./components/Dashboard/Dash";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Params from "./components/Toolbars/Params";
import ToolBar from "./components/Toolbars/ToolBar";

const App = () => {
  return (
    <div>
      <div className="flex ">
        <SideBar />
        <div className=" relative h-screen flex-1 p-7">
          <NavBar />
          <Dash />
        </div>
        <ToolBar />
        <Params />
      </div>
    </div>
  );
};
export default App;
