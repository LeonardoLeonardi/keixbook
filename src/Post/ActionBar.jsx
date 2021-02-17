function ActionBar(props) {
  return (
    <div className="divide-y divide-gray-400 pt-2">
      <div className="flex justify-between text-gray-500 dark:text-gray-400">
        <div className="ml-4 flex items-center hover:underline cursor-pointer">
          <svg
            className=" w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          {props.numberOfLikes}
        </div>
        <p className="mr-5 text-gray-500  dark:text-gray-400  text-sm hover:underline cursor-pointer">
          Commenti:{props.numberOfComments}
        </p>
      </div>
      <div className="mx-3 flex items-center justify-around pb-1 pt-1">
        <button className="focus:outline-none flex flex-grow items-center justify-center w-24 text-gray-500 dark:text-gray-400 font-semibold hover:bg-gray-500 hover:bg-opacity-10  dark:hover:bg-opacity-20 rounded-md pr-3">
          <svg
            className=" w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          Mi piace
        </button>
        <button className="focus:outline-none text-gray-500 dark:text-gray-400 flex w-24  items-center font-semibold flex-grow justify-center hover:bg-gray-500 hover:bg-opacity-10 dark:hover:bg-opacity-20 rounded-md">
          <svg
            className=" w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          Condividi
        </button>
      </div>
      <div className="mr-3 ml-3 pb-3"></div>
    </div>
  );
}
export default ActionBar;
