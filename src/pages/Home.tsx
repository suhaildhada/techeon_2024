import TECHEON_LOGO from "../assets/techeon-logo.png";
import CBIT_LOGO from "../assets/cbit-logo.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col justify-center items-center w-full p-10">
        <img src={CBIT_LOGO} alt="CBIT Logo" className="my-1" />
        <img src={TECHEON_LOGO} alt="Techeon Logo" className="my-2" />
        <h1 className="text-3xl md:text-4xl font-bold pt-10">Techeon 2024</h1>
        <p className="text-2xl font-medium">
          Innovate. Integrate. Inspire: The Tech Revolution Unleashed.
        </p>
        <p className="text-3xl mt-5 font-bold">
          Join us on 26th & 27th of February - 2024
        </p>

        <Link
          to="/events"
          className="p-5  text-2xl sm:leading-none bg-[#020F1F] text-white rounded-lg mt-3 flex items-center justify-center"
        >
          See Events
          <span className="m-0 p-0 inline-block ">
            <BiRightArrowAlt />
          </span>
        </Link>
      </div>
    </div>
  );
}
