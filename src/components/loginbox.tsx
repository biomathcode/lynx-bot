import { formStateType } from "../App";
import Button from "./button";
import { EditIcon, GoogleIcon, RightArrowIcon } from "./icons";
import Text from "./text";

function LoginBox({
  setFormState,
}: {
  setFormState: (state: formStateType) => void;
}) {
  return (
    <div className="w-full border-t flex flex-col gap-4 border-brand-border px-6 py-4 mb-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <Text color="gray">Hey Tim, Faiz here.</Text>
          <button onClick={() => setFormState("initial")}>
            <EditIcon />
          </button>
        </div>
        <hr className=" border-t border-brand-border w-full " />
      </div>

      <div className="flex flex-col gap-1">
        <Text as="div" color="black">
          Register to Access ContactMe
        </Text>
        <Text color="gray">You’ll be notified here when Tim replies</Text>
      </div>
      <Button type="secondary" onClick={() => setFormState("verify")}>
        <GoogleIcon />
        Continue with Google
      </Button>
      <div className="flex gap-2 items-center ">
        <hr className=" border-t border-brand-border w-full " />
        <Text color="gray">OR</Text>
        <hr className=" border-t border-brand-border w-full" />
      </div>
      <div className="relative w-full ">
        <input
          placeholder="Continue with Email"
          className=" border p-2 w-full h-10 text-sm rounded-lg"
        />
        <div className=" absolute top-1 right-[6px] p-1 flex items-center justify-center  w-8 h-8 rounded-[10px] bg-brand-border ">
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
