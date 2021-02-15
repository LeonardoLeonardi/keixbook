import "./App.css";

function PostComments(props) {
  return (
    <>
      <div className="flex items-center mt-2">
        <div className="mt-1 ">
          <img className="rounded-full max-h-7 " src={props.user} alt="" />
        </div>
        <div className="ml-2 pl-1 pr-1 max-w-xl bg-gray-200 dark:bg-darkM-2 rounded-2xl">
          <p className="dark:text-gray-200 text-black text-sm font-semibold max-w-sm m-1">
            {props.nome}
          </p>
          <p className="dark:text-gray-200 text-gray-900 text-sm max-w-sm m-1 -mt-1 ">
            {props.comment}
          </p>
        </div>
      </div>
      <div>
        <ul className="text-xs ml-10 sm:list-disc list-inside flex font-semibold text-gray-500 dark:text-gray-400">
          <li className="list-comment">
            <a href="#null">Mi piace </a>
            <span>&nbsp;</span>
          </li>
          <li>
            <a href="#null">Rispondi </a>
            <span>&nbsp;</span>
          </li>
          <li>
            <a href="#null">Condividi </a>
            <span>&nbsp;</span>
          </li>
          <li>
            <span>{props.day}g</span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default PostComments;
