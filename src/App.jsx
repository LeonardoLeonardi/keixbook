import "./App.css";
import faker from "faker";

import PostHeader from "./Post/PostHeader";
import PostBody from "./Post/PostBody";
import ActionBar from "./Post/ActionBar";
import PostComments from "./Post/PostComments";
import Conversation from "./Conversation";
import Message from "./Message";

faker.locale = "it";

const Conversations = new Array(20).fill({}).map(() => ({
  image: faker.image.imageUrl(100, 100, null, true),
  username: faker.name.findName(),
  lastMessage: faker.lorem.text(),
  isRead: faker.random.boolean(),
  date: faker.date.recent(),
  Messages: [new Array(20).fill({}).map(() => faker.lorem.text())],
}));
const dataMessage = new Array(20).fill({}).map(() => ({
  sentAt: faker.date.past(),
  receivedAt: faker.date.past(),
  direction: faker.random.arrayElement(["send", "receive"]),
  readAt: faker.random.boolean(),
}));

function App() {
  return (
    <div className="bg-gray-400 flex  dark:bg-darkM-3 h-screen p-5">
      <div className="flex flex-col flex-shrink shadow-md bg-white dark:bg-darkM-1 rounded-sm max-h-screen pb-2">
        <div className="overflow-y-scroll">
          <Conversation data={Conversations} />
        </div>
      </div>
      <div className="flex flex-col-reverse flex-grow bg-white dark:bg-darkM-1 max-h-screen">
        <div className="overflow-y-auto"></div>
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
