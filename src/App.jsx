import "./App.css";
import Postheader from "./Postheader.js";
import PostBody from "./PostBody.js";
import ActionBar from "./ActionBar.js";

function App() {
  return (
    <>
      <div className="bg-gray-200">
        <Postheader></Postheader>
        <PostBody
          testo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
        ></PostBody>
        <ActionBar Ncomment="5" Nlike="20"></ActionBar>
      </div>
    </>
  );
}

export default App;
