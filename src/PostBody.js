import "./App.css";

function PostBody(props) {
  return (
    <div className="bg-white  max-w-md  ml-5 dark:bg-darkM-1 ">
      <div className="ml-3 mr-1">
        <p className="text-gray-900 text-base dark:text-white overflow-auto">
          {props.testo}
        </p>
      </div>
    </div>
  );
}
export default PostBody;
