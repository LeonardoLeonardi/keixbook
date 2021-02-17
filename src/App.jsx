import "./App.css";
import PostHeader from "./Post/PostHeader";
import PostBody from "./Post/PostBody";
import ActionBar from "./Post/ActionBar";
import PostComments from "./Post/PostComments";
import ConversationItem from "./ConversationItem";
import User from "./img/User.jpg";

import { DateTime } from "luxon";
const date = new Date(2020, 1, 1);
const dateLuxon = DateTime.fromJSDate(date);
let string = dateLuxon.toRelative();

let username = "Leonardo Leonardi";
let lastMessage = "Lorem nonsum nu ca..";

function App() {
  return (
    <div className="bg-gray-400  dark:bg-darkM-3 h-screen pt-5">
      <div>
        <div className="ml-10 shadow-md bg-white dark:bg-darkM-1 max-w-xs rounded-sm">
          <ConversationItem
            image={User}
            username={username}
            lastMessage={lastMessage}
            date={string}
            isRead={1}
          />
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
