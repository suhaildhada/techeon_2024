import { BiHome } from "react-icons/bi";
import { MdEventSeat } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === "/";
  const isEvents = pathname === "/events";

  return (
    <nav className="flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center md:px-24 bg-[#020F1F] h-28">
      <h1 className=" text-lg sm:text-3xl uppercase text-white ">
        SUDHEE 2024
      </h1>
      <div className="flex">
        <NavLink to="/" isActive={isHome}>
          <span>
            <BiHome />
          </span>
          Home
        </NavLink>
        <NavLink to="/events" isActive={isEvents}>
          <span>
            <MdEventSeat />
          </span>
          Events
        </NavLink>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink = ({ to, children, isActive }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex items-start justify-center text-white  hover:bg-slate-800 p-1 md:p-4 rounded mx-2 text-sm md:text-2xl ${
        isActive ? "border border-white" : ""
      } md:leading-none gap-1`}
    >
      {children}
    </Link>
  );
};
