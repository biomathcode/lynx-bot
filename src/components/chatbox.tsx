import Button from "./button";
import { FileUpload } from "./icons";

function ChatBox() {
  return (
    <div className=" mb-4 py-1 bg-white   flex flex-col gap-2 w-full items-start">
      {/* <BrandBox /> */}

      <form className="  w-full   flex flex-col  gap-4 ">
        <div className="relative w-full ">
          <textarea
            rows={2}
            placeholder="Type message here"
            className=" p-2 h-[88px] line-clamp-4 border border-brand-border rounded-md w-full text-sm resize-none "
          />
          <div className=" absolute bottom-2 right-2 flex gap-2 items-center ">
            <div className=" text-sm text-[#52525b] ">0/500</div>
            <FileUpload />
          </div>
        </div>
        <div className="w-full">
          <Button type="secondary">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default ChatBox;
