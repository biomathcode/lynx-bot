import Avatar from "./components/avatar";
import ChatBox from "./components/chatbox";
import { CheckMarkIcon } from "./components/icons";
import PersonCard from "./components/personcard";
import QuestionBox from "./components/questionbox";
import Text from "./components/text";

function App() {
  return (
    <main className="  relative flex justify-center h-screen w-screen items-center max-h-screen container mx-auto ">
      <div className="   flex  h-full w-[1000px]  flex-row items-start    max-md:flex-col max-md:items-center p-10 ">
        <div className=" rounded-s-[20px] w-full h-full  max-w-[300px] bg-background-header   max-md:mr-0   lg:h-full   max-lg:justify-start   justify-center items-start flex p-10">
          {/* <Header staticdata={staticdata} /> */}
          <div className=" flex flex-col gap-4 ">
            <div className="flex gap-2 items-center">
              <Text as="h1">Tim Cook</Text>
              <CheckMarkIcon />
            </div>
            <PersonCard />
          </div>
        </div>

        <div className=" rounded-e-[20px]  flex flex-col justify-between w-full border h-full   text-left max-w-3xl   gap-4 max-h-full overflow-scroll ">
          <div className=" px-10 py-10 flex flex-col gap-4 w-full h-full overflow-scroll ">
            <Avatar name="Tim" src="/images/profile.png" />

            <div className="flex flex-col gap-1">
              <Text as="h3">Hi there 👋</Text>

              <Text as="h3">I am Tim Cook, CEO at Apple Inc.</Text>
            </div>

            <Text>
              I struggle to manage my DMs over LinkedIn/Instagram and have
              created this channel to connect with people who want to get in
              touch.
            </Text>
            <Text>
              I am building 'The 1% Club' and always looking for super smart,
              hard-working, hungry people (Gen Z included) to join our team. If
              you are excited to solve for India's financial literacy, I can't
              wait to hear from you.
            </Text>
            <Text>
              If you wish to discuss a brand deal, share some details about your
              brand and l'll respond if there's a fit. Please avoid reaching out
              to me for college-events since l've stopped doing that a while
              back.
            </Text>

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
