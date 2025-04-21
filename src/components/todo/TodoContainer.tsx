import { useAppSelector } from "@/redux/hooks/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilterDropDown from "./TodoFilterDropDown";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);
  return (
    <div className=" py-5">
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <TodoFilterDropDown></TodoFilterDropDown>
      </div>
      <div className="w-full rounded-xl p-[5px]  bg-primary-gradient">
        <div className="bg-white rounded-md space-y-3 p-5 ">
          {todos?.length > 0 ? (
            todos.map((todo) => <TodoCard {...todo}></TodoCard>)
          ) : (
            <div>
              <p className=" font-bold text-green-600 text-center">
                There is no any task pending
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
