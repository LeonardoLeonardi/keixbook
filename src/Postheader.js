import User from "./img/User.jpg";
import "./App.css";

function Postheader(props) {
  return (
    <div className="bg-white dark:bg-darkM-1 max-w-md h-14 rounded-t-lg flex items-center ml-5 justify-between">
      <div className="flex items-center">
        <div className="ml-3 mt-1 relative">
          <img className="rounded-full max-h-10 " src={User} alt="" />
        </div>
        <div className="ml-2 ">
          <p className="text-gray-900 font-semibold text-base dark:text-white -mb-0.5">
            Leonardo Leonardi
          </p>
          <p className="font-semibold text-xs text-gray-500">
            14 febbraio 2020 alle 21:31
          </p>
        </div>
      </div>
      <button className="text-black dark:text-gray-400 font-semibold mr-3 text-xl mb-2">
        ...
      </button>
    </div>
  );
}
export default Postheader;
