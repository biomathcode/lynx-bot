import Button from "./button";

function ChatBox() {
  return (
    <div className=" sticky -bottom-8 py-1   flex flex-col gap-2 w-full items-start">
      {/* <BrandBox /> */}

      <form className=" w-full  bg-white flex flex-col  gap-4 ">
        <textarea
          rows={2}
          placeholder="Type message here"
          className=" p-4 h-[120px] line-clamp-4 border border-brand-border rounded-xl w-full "
        />
        <div className="w-full">
          <Button type="secondary">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default ChatBox;
