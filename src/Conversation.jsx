import ConversationItem from "./ConversationItem";

function Conversation(props) {
  return (
    <>
      {props.data.map((listData, index) => {
        return <ConversationItem {...listData} key={index} />;
      })}
    </>
  );
}

export default Conversation;
