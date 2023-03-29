import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className=" relative h-screen flex-1 p-7">
        <NavBar />
      </div>
      {/* <Toolbar /> */}
      {/* <Params /> */}
    </div>
  );
};
export default App;
