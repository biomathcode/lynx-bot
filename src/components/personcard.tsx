type PersonCard = {
  imageUrl?: string;
  companyUrl?: string;
};

function PersonCard({
  imageUrl = "/images/profile.png",
  companyUrl = "/images/microsoft.png",
}: PersonCard) {
  return (
    <div className="  flex flex-col justify-center items-center gap-4 p-4 drop-shadow-brand-card w-full  bg-white rounded-sm">
      <img src={imageUrl} className="  w-[240px] h-full rounded-sm" />

      <img src={companyUrl} className=" w-[112px] h-[24px] min-h-fit " />
    </div>
  );
}

export default PersonCard;
