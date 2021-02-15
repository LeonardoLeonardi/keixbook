import "./App.css";
import User1 from "./img/User.jpg";
import User2 from "./img/User2.jpg";
import User3 from "./img/User3.jpg";
import Comment from "./Comment.js";
let commento = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
let commento2 = "Lorem ipsum dolor sit amet";
let commento3 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit,";
let nome = "Gino BuonVino";
let nome2 = "Pino Cristiano";
let nome3 = "Manuele Gioconda";

function PostComments(props) {
  return (
    <div className="pt-1 pb-2">
      <div className="flex items-center">
        <div className="ml-3  relative">
          <img className="rounded-full max-h-7 " src={User1} alt="" />
        </div>
        <div className="ml-2 text-gray-500 dark:text-gray-400 flex bg-gray-200 dark:bg-darkM-2 rounded-3xl p-1">
          <form>
            <input
              className="ml-2 w-72 bg-transparent placeholder-gray-500"
              type="text"
              placeholder="Scrivi un commento"
            />
          </form>
          <div className="pt-1 mr-3">
            <button>
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button>
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button>
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="ml-3 mr-6 relative mt-1">
        <Comment comment={commento} day="1" nome={nome} user={User2} />
        <Comment comment={commento2} day="5" nome={nome2} user={User1} />
        <Comment comment={commento3} day="7" nome={nome3} user={User3} />
      </div>
      <div className="flex justify-between text-gray-500 font-semibold dark:text-gray-400 text-sm items-center pt-1">
        <button className="ml-3 font-semibold">
          Visualizza altri commenti
        </button>
        <p className="mr-2 ">3 di 5</p>
      </div>
    </div>
  );
}
export default PostComments;
