type PersonCard = {
  imageUrl?: string;
  companyUrl?: string;
};

function PersonCard({
  imageUrl = "/images/profile.png",
  companyUrl = "/images/microsoft.png",
}: PersonCard) {
  return (
    <div className=" border flex flex-col justify-center items-center gap-4 p-4 drop-shadow-brand-card w-full h-full bg-white rounded-sm">
      <img src={imageUrl} className="  w-[240px] h-[240px] rounded-sm" />

      <img src={companyUrl} className=" w-[112px] h-[24px] min-h-fit " />
    </div>
  );
}

export default PersonCard;
