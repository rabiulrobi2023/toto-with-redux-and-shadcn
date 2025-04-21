import { useAppDispatch } from "@/redux/hooks/hooks";
import { Button } from "../ui/button";
import { removeTodo, toggleStatus, TTodo } from "@/redux/features/todoSlice";


export const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}:TTodo) => {
  const dispatch = useAppDispatch();

  const toggleComplete = () => {
    dispatch(toggleStatus(id));
  };

  return (
    <div className="flex justify-between p-3 bg-white rounded-sm border-[2px] ">
      <input
        onChange={toggleComplete}
        type="checkbox"
        id="checkbox"
        checked={isCompleted}
        className="mr-5"
      />
      <p className="flex flex-1 items-center max-w-max mr-5">{id}</p>
      <p className="flex flex-1 text-left items-center">{title}</p>
      <div className="flex items-center gap-2 flex-1">
        <div
          className={`size-4 rounded-full ${
            priority === "High" ? "bg-red-500" : null
          }
            ${priority === "Medium" ? "bg-yellow-500" : null}
            ${priority === "Low" ? "bg-green-500" : null}
          `}
        ></div>
        <p className="flex-1">{priority}</p>
      </div>
      {isCompleted ? (
        <p className="text-green-600 flex flex-1 items-center">Complete</p>
      ) : (
        <p className="text-red-600  flex flex-1 items-center ">Pending</p>
      )}

      <p className="flex flex-2 items-center">{description}</p>
      <div className="space-x-5">
        <Button
          onClick={() => dispatch(removeTodo(id))}
          className="text-red-500 bg-white hover:bg-white hover:text-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <Button className="bg-white text-green-500 hover:bg-white hover:text-green-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
