function Avatar({ src, name = "Tim" }: { src: string; name: string }) {
  return (
    <div className=" flex gap-2 items-center w-[280px] ">
      <img className="w-[28px] h-[28px] border rounded-full" src={src} />
      <div className=" text-base">{name}</div>
    </div>
  );
}

export default Avatar;
