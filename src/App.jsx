import "./App.css";
import faker from "faker";

import PostHeader from "./Post/PostHeader";
import PostBody from "./Post/PostBody";
import ActionBar from "./Post/ActionBar";
import PostComments from "./Post/PostComments";
import Conversation from "./Conversation";

import User from "./img/User.jpg";
import User2 from "./img/User2.jpg";
import User3 from "./img/User3.jpg";
faker.locale = "it";

const data = [
  {
    image: User,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.recent(),
  },
  {
    image: User2,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
  {
    image: User3,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
  {
    image: User2,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User3,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User2,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User3,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
  {
    image: User,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User2,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
  {
    image: User3,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
  {
    image: User,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
  {
    image: User2,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User3,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 0,
    date: faker.date.past(),
  },
  {
    image: User2,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
  {
    image: User3,
    username: faker.name.findName(),
    lastMessage: faker.lorem.text(),
    isRead: 1,
    date: faker.date.past(),
  },
];

function App() {
  return (
    <div className="bg-gray-400  dark:bg-darkM-3 h-screen pt-5 pb-4">
      <div className="flex flex-col ml-10 shadow-md bg-white dark:bg-darkM-1 max-w-xs rounded-sm h-full overflow-y-auto pb-2  ">
        <Conversation data={data} />
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
