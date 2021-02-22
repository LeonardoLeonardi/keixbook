import MessageItem from "./MessageItem";
import { DateTime } from "luxon";

function Message(props) {
  return (
    <>
      {props.dataMessage.map((listData, index) => {
        let textData;
        const dateLuxon = DateTime.fromJSDate(listData.timeSend);
        let string = dateLuxon.toLocaleString(DateTime.DATETIME_SHORT);
        if (listData.timeSend > listData.lastMessage) {
          textData = (
            <div className="text-center text-xs text-gray-500">{string}</div>
          );
        }
        if (listData.direction === "send") {
          return (
            <>
              <div className="flex justify-between">
                <div></div>
                <MessageItem {...listData} key={index} />
              </div>
              {textData}
            </>
          );
        } else if (listData.direction === "receive") {
          return (
            <>
              <div className="flex justify-between">
                <MessageItem {...listData} key={index} />
                <div></div>
              </div>
              {textData}
            </>
          );
        }
      })}
    </>
  );
}

export default Message;
