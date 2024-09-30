type PersonCard = {
  imageUrl?: string;
  companyUrl?: string;
};

function PersonCard({
  imageUrl = "/images/profile.png",
  companyUrl = "/images/microsoft.png",
}: PersonCard) {
  return (
    <div className="  flex flex-col justify-center items-center gap-6 px-4 pt-4 pb-6 drop-shadow-brand-card w-full  bg-white rounded-sm">
      <img src={imageUrl} className="  w-[240px] h-full rounded-sm" />

      <img src={companyUrl} className=" w-[112px] h-[24px] " />
    </div>
  );
}

export default PersonCard;
