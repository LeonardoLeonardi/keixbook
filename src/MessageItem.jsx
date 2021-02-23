import User from "./img/User.jpg";
function MessageItem(props) {
  function isRead() {
    if (props.readAt === true) {
      return <img className="rounded-full w-4" src={User} alt="" />;
    }
  }
  if (props.direction === "receive") {
    return (
      <div className="ml-1 flex items-center my-1 max-w-3xl">
        <div className="w-6 flex-shrink-0">
          <img className="rounded-full " src={props.image} alt="" />
        </div>
        <div className="bg-gray-300 dark:bg-darkM-2 dark:text-gray-50 flex text-gray-900 text-sm rounded-2xl m-1">
          <p className="my-1.5 mx-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptate natus
          </p>
        </div>
      </div>
    );
  } else if (props.direction === "send") {
    return (
      <div className="flex items-end mb-1 mr-1 ">
        <div className="bg-blue-500 text-gray-100 text-sm rounded-2xl m-1 my-1 max-w-3xl">
          <p className="my-1.5 mx-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptate natus Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus voluptate natus Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatibus voluptate natus
          </p>
        </div>
        {isRead()}
      </div>
    );
  }
}

export default MessageItem;
