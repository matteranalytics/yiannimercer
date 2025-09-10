export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Full-Stack Developer with an AI/ML Edge",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh] lg:row-span-3",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Real-world projects, real-world results",
    description: "From nonprofit work to enterprise AI/ML, I bring an enthusiasm for technology & development",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Data Scientist & ML Engineer by day, Full-Stack Developer by night",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building AI Apps & CMS + Registration Portal",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: `Let's Build Something Together!`,
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
    {
        id: 1,
        title: "CAMP FASD Website Redesign",
        des: "Led the full redesign of a non-profit's website, improving accessibility & overall UI/UX,",
        img: "/camp.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stripe.svg"],
        link: "https://fasdcamp.org"
    },
    {
        id: 2,
        title: "Camper App & Admin Mgmt Portal",
        des: "Built a secure multi-tabbed portal using NextJS, Django, MongoDB & Stripe to manage camper applications, emergency contacts, and admin management with payment capabilities.",
        img: "/ai_app_portal.jpeg",
        iconLists: ["/re.svg", "/tail.svg", "/django.svg", "/mongodb.svg", "/stripe.svg"],
        // link: "/", // Commented out link means WIP and link will come soon
    },
    {
        id: 5,
        title: "OneView",
        des: "Building a full-stack SaaS app to unify brokerage, IRA, HSA, and 401k accounts into a single dashboard, with Stripe payments and subscription tiers.",
        img: "/oneview.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase.svg", "/stripe.svg",],
        // link: "/", // Commented out link means WIP and link will come soon
    },
    {
        id: 3,
        title: "Executive Placement Firm – API & Query Tool",
        des: "Developed a backend API and database to power an internal tool for querying people and company datasets with advanced filtering and search.",
        img: "/sql_app.png",
        iconLists: ["/py.svg", "/fastapi.svg", "/sql.svg", "/streamlit.svg"],
        link: "https://www.egonzehnder.com/", // "/" means there is no link we can provide for case study
    },
    {
        id: 4,
        title: "Onboarding AI Chatbot",
        des: "Created a chatbot integrated into Slack and Discord to onboard new hires by answering HR, event, and org-related questions in real-time.",
        img: "/discord_bot.png",
        iconLists: ["/py.svg", "/openai.svg", "/discord.svg", "/azure.svg"],
        link: "/",  // "/" means there is no link we can provide for case study
    },

];

export const clients = [
    { src: "/depaul_logo.png", href: "https://www.depaul.edu" },
    { src: "/camp_logo_clients.png", href: "https://www.fasdcamp.org" },
    { src: "/Egon_Zehnder_logo.svg", href: "https://www.egonzehnder.com/" },
    { src: "/convergency_logo.png", href: "https://www.linkedin.com/company/convergency-llc/" },
]

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Scientist - INSIGHT2PROFIT",
    desc: "Full time data scientist, leveraging data & machine learning to build models that drive revenue growth.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Scientist & AI/ML Engineer - Matter Analytics",
    desc: "Founded a consultancy to help clients leverage AI/ML for business solutions, from predictive modeling to AI app dev.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web App Development & Design Agency",
    desc: "Provide end-to-end solutions for clients, from web design to app development through various tech stacks.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "CTO - CAMP FASD",
    desc: "Directly manage all tech aspects of the non-profit, from website to app dev to IT infrastructure.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];