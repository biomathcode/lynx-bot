import { MicrosoftLogo } from "./icons";

function PersonCard() {
  return (
    <div className=" border flex flex-col justify-center items-center gap-4 p-4 drop-shadow-brand-card w-[160px] h-[200px] bg-white rounded-sm">
      <img
        src="/images/profile.png"
        className="  w-[180px] h-[180px] rounded-sm"
      />
      <MicrosoftLogo />
    </div>
  );
}

export default PersonCard;
