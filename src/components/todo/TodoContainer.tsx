import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilterDropDown from "./TodoFilterDropDown";
import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todoSlice";

const TodoContainer = () => {
  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" py-5">
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <TodoFilterDropDown></TodoFilterDropDown>
      </div>
      <div className="w-full rounded-xl p-[5px]  bg-primary-gradient">
        <div className="bg-white rounded-md space-y-3 p-5">
          {todos?.length > 0 ? (
            todos?.map((todo: TTodo) => (
              <TodoCard {...todo} key={todo.id}></TodoCard>
            ))
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
