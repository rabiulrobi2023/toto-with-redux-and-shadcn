import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const TodoFilterDropDown = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient mb-5">Filter</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-32 mr-20">
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={setPosition}
          className="mr-0"
        >
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
