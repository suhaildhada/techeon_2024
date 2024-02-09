import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Root() {
  return (
    <>
      <Navbar />
      <div className="bg-img">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
