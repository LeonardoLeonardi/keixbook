import ConversationItem from "./ConversationItem";

const date = new Date(2020, 1, 1);

function Conversation(props) {
  return (
    <>
      {props.data.map((t, index) => {
        return (
          <ConversationItem
            key={index}
            image={t.image}
            username={t.name}
            lastMessage={t.lastMessage}
            date={date}
            isRead={t.read}
          />
        );
      })}
    </>
  );
}

export default Conversation;
