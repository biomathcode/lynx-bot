import { MicrosoftLogo } from "./icons";

function PersonCard() {
  return (
    <div className=" border flex flex-col justify-center items-center gap-4 p-4 drop-shadow-brand-card w-[280px] h-[330px] bg-white rounded-sm">
      <img
        src="/images/profile.png"
        className=" w-[242.91px] h-[236.42px] rounded-sm"
      />
      <MicrosoftLogo />
    </div>
  );
}

export default PersonCard;
