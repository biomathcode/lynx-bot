import Avatar from "./components/avatar";
import ChatBox from "./components/chatbox";
import { CheckMarkIcon } from "./components/icons";
import PersonCard from "./components/personcard";
import QuestionBox from "./components/questionbox";
import Text from "./components/text";
import userPersonalJson from "./data/userpersona";
import useQueryParams from "./hooks/userQueryParams";

function App() {
  const queryParams = useQueryParams();
  const firstName = queryParams["user"];

  let user = userPersonalJson.find(
    (u) => u.firstName.toLowerCase() === firstName?.toLowerCase()
  );

  console.log(user);

  if (!user) {
    user = userPersonalJson[0];
  }
  return (
    <main className="  relative flex justify-center h-screen w-screen items-center max-h-screen container mx-auto ">
      <div className="   flex  h-full w-[1000px]  flex-row items-start    max-md:flex-col max-md:items-center p-10 ">
        <div className=" rounded-s-[20px] w-full h-full  max-w-[280px] bg-background-header   max-md:mr-0   lg:h-full   max-lg:justify-start   justify-center items-start flex p-10">
          <div className=" flex flex-col gap-4 ">
            <div className="flex gap-2 items-center">
              <Text as="h1">{user.firstName + " " + user.lastName}</Text>
              <CheckMarkIcon />
            </div>
            <PersonCard imageUrl={user.imageUrl} companyUrl={user.companyUrl} />
          </div>
        </div>

        <div className=" rounded-e-[20px]  flex flex-col justify-between w-full border h-full   text-left max-w-3xl   gap-4 max-h-full overflow-scroll ">
          <div className=" px-10 py-10 flex flex-col gap-2 w-full h-full overflow-scroll ">
            <Avatar name={user.firstName} src={user.imageUrl} />

            <div className="flex flex-col gap-1">
              {user.salution.map((e) => (
                <Text key={e} as="h3">
                  {e}
                </Text>
              ))}
            </div>

            {user.secondMessage.map((e, i) => (
              <Text key={i}>{e}</Text>
            ))}

            <QuestionBox />
          </div>
          <div className="px-10 ">
            <ChatBox />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
