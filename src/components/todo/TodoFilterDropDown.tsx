import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
type TPriority = "" | "high" | "medium" | "low";

type TPriorityProps = {
  priority: string;
  setPriority: (value: TPriority) => void;
};

const TodoFilterDropDown = ({ priority, setPriority }: TPriorityProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient mb-5">Filter</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-32 mr-20">
        <DropdownMenuRadioGroup
          value={priority}
          onValueChange={(value) => setPriority(value as TPriority)}
          className="mr-0"
        >
          <DropdownMenuRadioItem className=" text-center " value="">
            All
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className=" text-center " value="high">
            High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="text-left" value="medium">
            Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="text-left" value="low">
            Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilterDropDown;
