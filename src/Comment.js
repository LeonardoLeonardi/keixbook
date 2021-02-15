import "./App.css";

function PostComments(props) {
  return (
    <>
      <div className="flex items-center mt-2">
        <div className="mt-1 ">
          <img className="rounded-full max-h-7 " src={props.user} alt="" />
        </div>

        <div className="flex flex-col items-start pl-2">
          <div className="px-2 max-w-xl bg-gray-200 dark:bg-darkM-2 rounded-2xl">
            <p className="dark:text-gray-200 text-black text-sm font-semibold max-w-sm m-1">
              {props.nome}
            </p>
            <p className="dark:text-gray-200 text-gray-900 text-sm max-w-sm m-1 -mt-2 ">
              {props.comment}
            </p>
          </div>

          <ul className="px-2 sm:list-disc list-inside flex font-semibold text-gray-500 dark:text-gray-400">
            <li className="list-comment text-sm">
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
      </div>
    </>
  );
}
export default PostComments;
