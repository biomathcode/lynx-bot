import { LynxIcon } from "./icons";

function BrandBox() {
  return (
    <div className="flex justify-center items-center gap-2">
      <LynxIcon />
      <div className=" text-brand-blue font-light text-base">Lynx (Bot)</div>
    </div>
  );
}

export default BrandBox;
