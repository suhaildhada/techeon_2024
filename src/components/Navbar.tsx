import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === "/";
  const isEvents = pathname === "/events";

  return (
    <nav className="flex justify-between items-center p-10 bg-[#020F1F] h-28">
      <h1 className=" text-xl md:text-3xl uppercase text-white jus">
        SUDHEE 2024
      </h1>
      <div>
        <NavLink to="/" isActive={isHome}>
          Home
        </NavLink>
        <NavLink to="/events" isActive={isEvents}>
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
      className={`text-white  hover:bg-slate-800 p-1 md:p-4 rounded mx-2 text-sm md:text-2xl ${
        isActive ? "border border-white" : ""
      }`}
    >
      {children}
    </Link>
  );
};
