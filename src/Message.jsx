import MessageItem from "./MessageItem";
import { DateTime } from "luxon";

function Message(props) {
  console.log(props);
  return (
    <>
      {props.dataMessage.map((listData, index, array) => {
        let textData;
        const dateLuxon = DateTime.fromJSDate(listData.sentAt);
        const previusDate = index === 0 ? array[index] : array[index - 1];
        const dateLuxon2 = DateTime.fromJSDate(previusDate.sentAt);
        let string = dateLuxon.toLocaleString(DateTime.DATETIME_SHORT);

        if (dateLuxon.diff(dateLuxon2, "days") > 1 || index === 0) {
          textData = (
            <div className="text-center text-xs text-gray-500 py-2">
              {string}
            </div>
          );
        }
        if (listData.direction === "send") {
          return (
            <>
              {textData}
              <div className="flex flex-row-reverse ">
                <MessageItem {...listData} key={index} />
              </div>
            </>
          );
        } else if (listData.direction === "receive") {
          return (
            <>
              {textData}
              <div className="flex ">
                <MessageItem {...listData} key={index} />
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default Message;
