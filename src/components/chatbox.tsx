import { useState } from "react";
import Button from "./button";
import { FileUpload } from "./icons";
import { formStateType } from "../App";
import Select from "./select";

function ChatBox({
  setFormState,
}: {
  setFormState: (state: formStateType) => void;
}) {
  const [chatLength, setChatLength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatLength(e.target.value.length);
  };

  return (
    <div className=" mb-4 py-1 bg-white   flex flex-col gap-2 w-full items-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="  w-full   flex flex-col  gap-4 "
      >
        <div
          id="grow-wrap"
          className="relative w-full  border border-brand-border rounded-md overflow-scroll  "
        >
          {chatLength > 0 && (
            <div className="absolute top-2 left-2 z-10 bg-white">
              <Select />
            </div>
          )}

          <textarea
            onChange={handleInputChange}
            maxLength={500}
            rows={2}
            placeholder="Type message here"
            id="chatbox"
            className={`  min-h-[88px] max-h-[260px] rounded-md  w-full text-sm resize-none ${
              chatLength > 0 ? " p-4 pt-12" : "p-4"
            } `}
          />
          <div className=" absolute bottom-2 right-2 flex gap-2 items-center">
            <div className=" text-sm text-[#52525b] ">{chatLength}/500</div>
            <FileUpload />
          </div>
        </div>
        <div className="w-full">
          <Button
            onClick={() => {
              setFormState("register");
            }}
            mode="submit"
            type="secondary"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ChatBox;
