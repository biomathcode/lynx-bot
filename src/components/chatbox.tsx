import Button from "./button";

function ChatBox() {
  return (
    <div className=" sticky -bottom-8 py-2   flex flex-col gap-2 w-full items-start">
      {/* <BrandBox /> */}

      <form className=" w-full  bg-white flex flex-col  gap-4 ">
        <textarea
          rows={2}
          placeholder="Type message here"
          className=" p-4  line-clamp-4 border border-brand-border rounded-lg w-full "
        />
        <div className=" self-end">
          <Button type="secondary">Continue</Button>
        </div>
      </form>
    </div>
  );
}

export default ChatBox;
