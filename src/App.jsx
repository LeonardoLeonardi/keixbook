import "./App.css";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import ActionBar from "./ActionBar";
import PostComments from "./PostComments";

function App() {
  return (
    <div className="bg-gray-200  dark:bg-darkM-3 h-screen pt-5">
      <div className="ml-10 shadow bg-white dark:bg-darkM-1 max-w-md rounded-xl">
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
      </div>
    </div>
  );
}

export default App;
