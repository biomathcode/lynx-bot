import { PropsWithChildren } from "react";
import Button from "./button";
import Text from "./text";

function QuestionBox({
  children = "Are you open to paying for a guaranteed response from Faiz?",
}: PropsWithChildren) {
  return (
    <div className=" flex flex-col gap-4">
      <Text as="p">{children}</Text>
      <div className="flex gap-4 ">
        <Button type="default">No</Button>
        <Button type="primary">Yes</Button>
      </div>
    </div>
  );
}

export default QuestionBox;
