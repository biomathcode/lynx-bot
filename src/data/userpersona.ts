type UserPersona = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  companyUrl: string;
  salution: string[];
  secondMessage: string[];
};

const userPersonalJson: UserPersona[] = [
  {
    firstName: "Tim",
    lastName: "Cook",
    imageUrl: "/images/profile.png",
    companyUrl: "/images/microsoft.png",
    salution: ["Hi there 👋", "I am Tim Cook, CEO at Apple Inc."],
    secondMessage: [
      "I struggle to manage my DMs over LinkedIn/Instagram and have created this channel to connect with people who want to get in touch.",
      "I am building 'The 1% Club' and always looking for super smart, hard-working, hungry people (Gen Z included) to join our team. If you are excited to solve for India's financial literacy, I can't wait to hear from you.",
      "If you wish to discuss a brand deal, share some details about your brand and l'll respond if there's a fit. Please avoid reaching out to me for college-events since l've stopped doing that a while back.",
    ],
  },
  {
    firstName: "Viraj",
    lastName: "Sheth",
    imageUrl: "/images/vijay.png",
    companyUrl: "/images/monke.png",
    salution: [
      "Hey there! ",
      "I’m Viraj Sheth the Co-founder and CEO at Monk Entertainment ",
    ],
    secondMessage: [
      "At Monk-E, we help emerging brands boost their presence on social-media with our creators and digital marketing teams. If you run a brand, write to me with some details about your company and you will hear from me soon.",
      "If you are a creator/influencer who wants to join the Monk-E community and work with us, please feel free to get in touch with some links to your social-profiles. ",
      "If you want to apply for a job at Monk-E, write to me mentioning some of your best achievements and what role you're interested in. If there's a fit, I will get back to you.",
    ],
  },
  {
    firstName: "Aditi",
    lastName: "Shrivastava",
    imageUrl: "/images/aditi.png",
    companyUrl: "/images/thearc.png",
    salution: ["Hi there", "I’m Aditi Co-Founder at The Arc "],
    secondMessage: [
      "This is the best way to write to me if we are not already connected. :) I read almost  all priority messages on ContactME that come here and try to respond to as many. ",
      "My favourite DMs are from people who read The Arc and want to give us feedback on our content & product.",
      "I am always on the lookout for talented individuals to join us. If you believe you fit the bill, please feel free to reach out. Attaching your resume will help me get back faster.",
      "I write about high-growth consumer internet businesses and always interested in a compelling story that would help our readers make better decisions.",
      "Cheers",
      "Aditi",
    ],
  },
  {
    firstName: "Vishal",
    lastName: "Dayama",
    imageUrl: "/images/vishal.png",
    companyUrl: "/images/braindad.png",
    salution: ["Hi There", "I’m Vishal the founder of Braindad"],
    secondMessage: [
      "My social DMs are crowded, so this is the fastest way to reach me. I'll try to reply to all messages here. If I don't, you can sue me in court, and we will get to know each other through a ten-year-long judicial process. Either way, it's a win.",
      "First of all, thanks for taking the time to write in.",
      "I run an ad agency called Braindad. From writing to production to delivery, we take care of everything. You can check out our work on our Instagram page '@braindad.co.' The website will be completed after the Mumbai metro project. For now, it will redirect you to www.vishaldayama.com, where you can see all of my work up to 2022 (I stopped updating it because I am waiting for the Mumbai metro project to finish first. I have a fetish for the Mumbai metro)",
      "That was Braindad. About me, I feel you know enough. If you don't, I'll see you in court.",
      "One request before you type your message: please select the appropriate filters from the menu below. Otherwise, it will become chaotic and start looking like my mailbox, and then this app too will become pointless, and we will all die one day.",
      "If you want to work on my team, please note that I'm not actively hiring. But if you can send me links to your work that make it impossible for me to ignore your message, there's always a chance.",
    ],
  },
  {
    firstName: "Kushal",
    lastName: "Bhagai",
    imageUrl: "/images/kushal.jpeg",
    companyUrl: "/images/all_in.png",
    salution: ["Hi there!", "I’m Kushal the founder at AllIn Capital"],
    secondMessage: [
      "This is the fastest way to hear back from me if we don't have a common connect. I read every single priority message which comes here and respond to almost all.",
      "Please try and keep it concise and share your deck/ blurb/ website link - whatever information you can so that I can tell you upfront if it's an area that I am interested in and come prepared for our first chat.",
      "At All In Capital, we invest $100,000 to $500,000 at pre-seed/ pre-product/ pre-revenue stage in ambitious founders from India. We've invested in 100+ startups and are usually the first ones to commit and wire. ",
      "Many of the founders we invested in were cold reachouts, so I can't wait to hear what you are building✌🏽",
      "Thanks!",
    ],
  },
];

export default userPersonalJson;
