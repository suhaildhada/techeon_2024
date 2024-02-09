import CBIT_LOGO from "../assets/cbit-logo.png";
import TECHEON_POSTER from "../assets/techeon-poster-cropped-resized.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="h-full w-full flex bg-img">
      <div className="flex flex-col justify-center items-center w-full p-10 md:p-24">
        <div>
          <img src={CBIT_LOGO} alt="CBIT Logo" className="w-[500px]" />
        </div>
        <div>
          <img
            src={TECHEON_POSTER}
            alt="Techeon Logo"
            className="my-2 rounded-lg border-2 border-white object-cover w-[800px]"
          />
        </div>
        <div className="flex justify-center items-center flex-col bg-black/60 rounded-lg pb-3 px-3 border border-white">
          <h1 className="text-xl sm:text-3xl font-bold p-2 text-white ">
            Techeon 2024
          </h1>
          <p className="text-md md:text-2xl font-medium text-white">
            Innovate. Integrate. Inspire: The Tech Revolution Unleashed.
          </p>
          <p className="text-xl md:text-3xl mt-5 font-bold text-white">
            Join us on 26th & 27th of February - 2024
          </p>
        </div>

        <Link
          to="/events"
          className="p-3 md:p-5 text-lg md:text-2xl sm:leading-none bg-[#020F1F] text-white rounded-lg mt-3 flex items-center justify-center"
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
