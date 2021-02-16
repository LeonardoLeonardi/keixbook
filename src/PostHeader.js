import User from "./img/User.jpg";
import "./App.css";

function PostHeader(props) {
  return (
    <div className="h-14 flex items-center justify-between">
      <div className="flex items-center">
        <div className="ml-3 mt-1 relative dark:bg-white bg-gray-700 rounded-full">
          <img
            className="rounded-full max-h-10 cursor-pointer  dark:hover:opacity-80 hover:opacity-90"
            src={User}
            alt=""
          />
        </div>
        <div className="ml-2 ">
          <p className="text-gray-900 font-semibold text-base dark:text-white -mb-0.5 hover:underline cursor-pointer">
            Leonardo Leonardi
          </p>
          <p className="font-semibold text-xs text-gray-500 dark:text-gray-400 hover:underline cursor-pointer">
            14 febbraio 2020 alle 21:31
          </p>
        </div>
      </div>
      <button className="text-gray-800 dark:text-gray-400 font-semibold  text-xl h-8 w-8 hover:bg-gray-500 hover:bg-opacity-30 rounded-full focus:outline-none">
        <div className=" -mt-3 hover:opacity-100">...</div>
      </button>
    </div>
  );
}
export default PostHeader;
