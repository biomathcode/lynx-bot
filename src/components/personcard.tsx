type PersonCard = {
  imageUrl?: string;
  companyUrl?: string;
};

function PersonCard({
  imageUrl = "/images/profile.png",
  companyUrl = "/images/microsoft.png",
}: PersonCard) {
  return (
    <div className=" border flex flex-col justify-center items-center gap-4 p-4 drop-shadow-brand-card w-[160px] h-[200px] bg-white rounded-sm">
      <img src={imageUrl} className="  w-[180px] h-[180px] rounded-sm" />
      <div className=" overflow-hidden flex justify-center items-center w-full h-full">
        <img src={companyUrl} className=" w-fit h-full min-h-fit " />
      </div>
    </div>
  );
}

export default PersonCard;
