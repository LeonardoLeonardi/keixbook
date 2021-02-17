function PostComments(props) {
  return (
    <>
      <div className="flex items-center mt-2">
        <div className="mt-1 dark:bg-white bg-gray-700 rounded-full">
          <img
            className="rounded-full max-h-7  cursor-pointer  dark:hover:opacity-80 hover:opacity-90"
            src={props.user}
            alt=""
          />
        </div>

        <div className="flex flex-col items-start pl-2">
          <div className="px-2 max-w-xl bg-gray-200 dark:bg-darkM-2 rounded-2xl">
            <p className="dark:text-gray-200 text-black text-sm font-semibold max-w-sm m-1 hover:underline cursor-pointer">
              {props.nome}
            </p>
            <p className="dark:text-gray-200 text-gray-900 text-sm max-w-sm m-1 -mt-2 ">
              {props.comment}
            </p>
          </div>
          <div className="pl-3 text-gray-500 font-semibold dark:text-gray-400">
            <button className="font-semibold text-sm hover:underline cursor-pointer">
              Mi piace{" "}
            </button>
            <span> · </span>
            <button className="font-semibold text-sm hover:underline cursor-pointer">
              Rispondi{" "}
            </button>
            <span> · </span>
            <button className="font-semibold text-sm hover:underline cursor-pointer">
              Condividi
            </button>
            <span> · </span>
            <span className="font-semibold text-sm hover:underline cursor-pointer">
              {" "}
              {props.day}g{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostComments;
