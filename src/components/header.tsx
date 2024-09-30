import Button from "./button";
import Text from "./text";

function Header() {
  return (
    <div className=" w-full flex gap-4 justify-center items-center ">
      <div className=" w-8/12 rounded-xl bg-bran-header-bg h-[53px] justify-center items-center flex gap-6 px-6 ">
        <img src="/images/logo.png" className=" w-14 " />
        <Text color="white" as="div">
          Hi Tim Cook, claim your ContactME handle www.Contactme.com/timcook
        </Text>
        <Button type="small">Get It</Button>
      </div>
      <Button type="outline">Edit Profile</Button>
    </div>
  );
}

export default Header;
