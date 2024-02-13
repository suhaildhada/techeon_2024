import { Link, useParams } from "react-router-dom";
import { cardInfo } from "../constants/cardInfo";
import { MdAppRegistration } from "react-icons/md";
import { BsBack } from "react-icons/bs";
import ReactHtmlParse from "react-html-parser";

export function EventDetail() {
  const params = useParams();
  const { id } = params as { id: string };
  const index = parseInt(id);
  if (
    id === undefined ||
    isNaN(index) ||
    index >= cardInfo.length ||
    index < 0
  ) {
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-3">
        <h1 className="text-5xl text-red-600">Invalid Event !</h1>
        <Link to={"/"} className="p-3 bg-[#020F1F]  text-white rounded-md ">
          Go to home
        </Link>
      </div>
    );
  }
  const img = cardInfo[index].image;
  const title = cardInfo[index].title;
  const description = cardInfo[index].description;
  const fullDescription = cardInfo[index].fullDescription;
  const faculty = cardInfo[index].facultyCoordinator;
  const students = cardInfo[index].studentCoordinators;
  const amount = cardInfo[index].amount;
  const googleFormLink = cardInfo[index].googleFormLink;

  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="flex flex-col md:flex-grow  items-center md:items-stretch bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl  dark:border-gray-700 dark:bg-gray-800">
        <img
          className="object-cover md:object-fill w-full rounded-t-lg h-auto  md:w-96 md:rounded-none md:rounded-s-lg"
          src={img}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          {fullDescription ? (
            <div>{ReactHtmlParse(fullDescription)}</div>
          ) : (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          )}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Amount
          </h5>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            Per Head: {amount?.single}₹
          </p>
          {amount?.group && (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Team of 2: {amount?.group.teamsOfTwo}₹ <br />
              {amount?.group.teamsOfThree &&
                `Team of 3: ${amount?.group?.teamsOfThree}₹`}
              {amount?.group.teamsOfThree && <br />}
              {amount?.group.teamsOfFour &&
                `Team of 4: ${amount?.group?.teamsOfFour}₹`}
              {amount?.group.teamsOfFour && <br />}
            </p>
          )}

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Faculty Coordinator
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {faculty}
          </p>

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Student Coordinators
          </h5>
          {students.map((student, index) => (
            <p
              key={index}
              className="mb-1 font-normal text-gray-700 dark:text-gray-400"
            >
              {student}
            </p>
          ))}
          <a
            href={googleFormLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1  text-white max-w-32 p-1 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
          >
            <MdAppRegistration size={20} />
            Register
          </a>
          <Link
            to={"/events"}
            className=" flex justify-center items-center gap-2 p-2 bg-[#020F1F]  text-white rounded-md mt-2 max-w-32"
          >
            <BsBack />
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}
