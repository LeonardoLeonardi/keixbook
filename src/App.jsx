import "./App.css";
import faker from "faker";

import PostHeader from "./Post/PostHeader";
import PostBody from "./Post/PostBody";
import ActionBar from "./Post/ActionBar";
import PostComments from "./Post/PostComments";
import Conversation from "./Conversation";
import MessageItem from "./MessageItem";

faker.locale = "it";

const data = [
  {
    image: faker.image.imageUrl(100, 100, 1),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.recent(),
  },
  {
    image: faker.image.imageUrl(100, 100, 2),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 3),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 4),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 5),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 6),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 7),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 8),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 9),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 10),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 11),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 12),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 13),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 14),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 15),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 16),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 17),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "no",
    date: faker.date.past(),
  },
  {
    image: faker.image.imageUrl(100, 100, 18),
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: "yes",
    date: faker.date.past(),
  },
];

function App() {
  return (
    <div className="bg-gray-400 flex  dark:bg-darkM-3 h-screen p-5">
      <div className="flex flex-col flex-shrink ml-10 shadow-md bg-white dark:bg-darkM-1 w-1/5 max-w-sm rounded-sm h-full overflow-y-auto pb-2  ">
        <Conversation data={data} />
      </div>
      <div className="flex flex-col-reverse bg-white dark:bg-darkM-1 w-full h-full overflow-y-auto">
        <div className="flex justify-between">
          <div className=""></div>
          <MessageItem direction="send" read="yes" />
        </div>
        <div className="flex justify-between">
          <MessageItem direction="recive" />
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*<div className="ml-10 shadow-md bg-white dark:bg-darkM-1 max-w-md rounded-xl">
        <PostHeader />
        <PostBody
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
        />
        <ActionBar numberOfComments="5" numberOfLikes="20" />
        <PostComments />
      </div>*/
