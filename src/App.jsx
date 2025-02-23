import "./App.css";
import "@radix-ui/themes/styles.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import WelcomeSec from "./components/dashboard/WelcomeSec";
import Stats from "./components/dashboard/Stats";
import DashLeaderBoard from "./components/dashboard/LeaderBoard";
import TrendingDoubts from "./components/dashboard/TrendingDoubts";
import LatestDoubts from "./components/dashboard/LatestDoubts";
import Landing from "./components/Landing/Landing"
import Signup from "./components/LogIn-SignUp/Signup";
import Login from "./components/LogIn-SignUp/Login";

function App() {

  return (
    <>
      {/* <NavBar searchBar={true}/>
      <SideBar />
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8 ">
          <WelcomeSec />

          <Stats />

          <div className="flex justify-between">
            <div className="w-[70%]">
              <TrendingDoubts />
              <LatestDoubts />
            </div>

            <div className="w-[27.5%]">
              <DashLeaderBoard />
            </div>
          </div>
        </div>
      </main> */}

        {/* <Landing /> */}
        {/* <Signup/> */}
        {/* <Login /> */}
    </>
  );
}

export default App;
