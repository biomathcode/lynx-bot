import Avatar from "./components/avatar";
import ChatBox from "./components/chatbox";

import { CheckMarkIcon } from "./components/icons";
import PersonCard from "./components/personcard";
// import QuestionBox from "./components/questionbox";
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
    <main className="   flex flex-col  h-screen w-screen items-center max-h-screen container mx-auto py-10 px-10 gap-4  ">
      {/* <div className="   flex  h-full  flex-row items-center justify-center  "> */}
      {/* <Header /> */}
      <div className="flex items-start max-w-[846px] w-full mx-auto">
        <Text as="h2">Send Tim a Priority Message</Text>
      </div>
      <div className="flex flex-row justify-center h-full max-w-[846px] shadow-2xl rounded-[20px] bg-white ">
        <div className=" rounded-s-[20px] w-5/12 max-w-[302px] h-full    bg-background-header    lg:h-full   max-lg:justify-start   justify-center items-start flex py-6 px-10">
          <div className=" flex flex-col gap-4 ">
            <div className="flex gap-2 items-center">
              <Text as="h2">{user.firstName + " " + user.lastName}</Text>
              <CheckMarkIcon />
            </div>
            <PersonCard imageUrl={user.imageUrl} companyUrl={user.companyUrl} />
          </div>
        </div>

        <div className=" rounded-e-[20px] w-full   flex flex-col justify-between  border h-full   text-left max-w-3xl  max-h-full overflow-scroll ">
          <div className=" px-6 py-6 flex flex-col gap-4 w-full h-full overflow-scroll ">
            <Avatar name={user.firstName} src={user.imageUrl} />

            <div className="flex flex-col gap-2">
              {user.salution.map((e) => (
                <Text key={e} as="h3">
                  {e}
                </Text>
              ))}
            </div>

            {user.secondMessage.map((e, i) => (
              <Text key={i}>{e}</Text>
            ))}

            {/* <QuestionBox /> */}
          </div>
          <div className="px-6 ">
            <ChatBox />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
