import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addTodo, TTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const [title, setTask] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(10).substring(2, 8);
    console.log(typeof id);
    const payload: TTodo = {
      id,
      title,
      description,
      isCompleted: false,
    };
    dispatch(addTodo(payload));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient mb-5">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              onBlur={(e) => setTask(e.target.value)}
              id="task"
              placeholder="Task Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Description"
              className="col-span-3"
            />
          </div>
          <DialogClose asChild>
            <DialogFooter>
              <Button type="submit" className="bg-primary-gradient">
                Submit
              </Button>
            </DialogFooter>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
