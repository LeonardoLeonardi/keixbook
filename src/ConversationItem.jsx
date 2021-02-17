import { DateTime } from "luxon";

function isReadOn(p) {
  if (p === 1)
    return <p className="text-4xl mb-1 mr-3 text-blue-500 relative">·</p>;
  return;
}

function ConversationItem(props) {
  const dateLuxon = DateTime.fromJSDate(props.date);
  let string = dateLuxon.toRelative();
  function isReadName(control) {
    if (control === 1)
      return (
        <p className="text-gray-900 font-semibold text-base dark:text-white -mb-0.5 ">
          {props.username}
        </p>
      );
    else
      return (
        <p className="text-gray-900  text-base dark:text-white -mb-0.5 ">
          {props.username}
        </p>
      );
  }
  function isReadText(control) {
    if (control === 1)
      return (
        <p className="flex-shrink font-semibold text-xs text-gray-900 dark:text-gray-400 truncate  w-32 h-4">
          {props.lastMessage}{" "}
        </p>
      );
    else {
      return (
        <p className="flex-shrink  text-xs text-gray-500 dark:text-gray-400 truncate  w-32 h-4">
          {props.lastMessage}{" "}
        </p>
      );
    }
  }
  return (
    <div className="h-14 flex justify-between items-center cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 mt-1 pb-1">
      <div className="flex items-center">
        <div className="ml-3 mt-1 relative dark:bg-white bg-gray-700 rounded-full">
          <img
            className="rounded-full max-h-10 cursor-pointer  dark:hover:opacity-80 hover:opacity-90"
            src={props.image}
            alt=""
          />
        </div>
        <div className="ml-2 mt-1">
          {isReadName(props.isRead)}

          <div className="flex items-center">
            {isReadText(props.isRead)}

            <p className="font-semibold text-xs text-gray-500 dark:text-gray-400 ">
              &nbsp;· {string}
            </p>
          </div>
        </div>
      </div>
      {isReadOn(props.isRead)}
    </div>
  );
}
export default ConversationItem;
