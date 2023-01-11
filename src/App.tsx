import { Navbar, Sidebar } from "@/components/organisms";
import { Outlet } from "react-router-dom";
function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Sidebar />
    </>
  );
}

export default App;
