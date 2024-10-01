//TODO: OTP Box

import { formStateType } from "../App";
import { EditIcon } from "./icons";
import OTPInput from "./otpinput";

import Text from "./text";

function VerifyOTP({
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
          Verify OTP
        </Text>
        <div className="flex justify-between">
          <Text color="gray">
            We’ve sent a 4 digit one time password to faiz@mail.com
          </Text>
          <button onClick={() => setFormState("register")}>
            <div className=" text-brand-scd-btn text-sm">Change mail</div>
          </button>
        </div>
      </div>

      <div className="relative w-full flex  items-start  ">
        <OTPInput
          onComplete={(e) => {
            alert(" this is the otp" + e);
          }}
        />
      </div>
    </div>
  );
}

export default VerifyOTP;
