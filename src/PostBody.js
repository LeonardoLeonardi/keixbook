import "./App.css";

function PostBody(props) {
  return (
    <div className="">
      <div className="ml-3 mr-1">
        <p className="text-gray-900 text-base dark:text-white overflow-auto leading-tight	">
          {props.text}
        </p>
      </div>
    </div>
  );
}
export default PostBody;
