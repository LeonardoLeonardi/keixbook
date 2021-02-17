function isReadOn(p) {
  if (p === 1)
    return <p className="text-4xl mb-1 mr-3 text-blue-500 relative">·</p>;
  return;
}

function ConversationItem(props) {
  return (
    <div className="h-14 flex justify-between items-center cursor-pointer">
      <div className="flex items-center">
        <div className="ml-3 mt-1 relative dark:bg-white bg-gray-700 rounded-full">
          <img
            className="rounded-full max-h-10 cursor-pointer  dark:hover:opacity-80 hover:opacity-90"
            src={props.image}
            alt=""
          />
        </div>
        <div className="ml-2 ">
          <p className="text-gray-900 font-semibold text-base dark:text-white -mb-0.5 ">
            {props.username}
          </p>
          <p className="font-semibold text-xs text-gray-500 dark:text-gray-400 ">
            {props.lastMessage}{" "}
            <span className="text-black dark:text-gray-300">
              &nbsp;&nbsp;&nbsp;·{" "}
            </span>
            {props.date}
          </p>
        </div>
      </div>
      {isReadOn(props.isRead)}
    </div>
  );
}
export default ConversationItem;
