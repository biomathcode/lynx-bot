import BrandBox from "./brand";
import Button from "./button";

function ChatBox() {
  return (
    <div className="   flex flex-col gap-2 w-full items-start">
      <BrandBox />

      <form className=" w-full  bg-white flex flex-col  gap-4 ">
        <textarea
          rows={4}
          className=" line-clamp-4 border border-brand-border rounded-lg w-full "
        />
        <div className=" self-end">
          <Button type="secondary">Continue</Button>
        </div>
      </form>
    </div>
  );
}

export default ChatBox;
