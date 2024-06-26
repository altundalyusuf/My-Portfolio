import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "Bootstrap",
    Image: "/bootstrap.svg",
    width: 70,
    height: 70,
  },
  {
    name: "Material UI",
    Image: "/material-ui.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Less CSS",
    Image: "/lessCss.png",
    width: 100,
    height: 100,
  },
  {
    name: "Figma",
    Image: "/figma.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "Firebase",
    Image: "/firebase.png",
    width: 150,
    height: 150,
  },
  {
    name: "Jest",
    Image: "/jest.png",
    width: 65,
    height: 65,
  },
  {
    name: "React Testing Library",
    Image: "/RTL.png",
    width: 65,
    height: 65,
  },
  {
    name: "Git",
    Image: "/git.png",
    width: 100,
    height: 100,
  },
  {
    name: "Github Desktop",
    Image: "/github-desktop.png",
    width: 80,
    height: 80,
  },
  {
    name: "Vite",
    Image: "/vite.png",
    width: 80,
    height: 80,
  },
  {
    name: "VS Code",
    Image: "/vscode.png",
    width: 70,
    height: 70,
  },
  {
    name: "Jira",
    Image: "/jira.png",
    width: 120,
    height: 120,
  },
];

export const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    url: 'https://www.linkedin.com/in/yusufaltundal/'
  },
  {
    name: "Github",
    src: "/github.svg",
    url: 'https://github.com/altundalyusuf'
  },
];
export const Projects = [
  {
    title: "Koç Dialogue",
    text: `
    With Koç Dialogue, through ongoing one-on-one meetings spread throughout the year, we regularly assess our OKRs, development, and careers.
    
    We've established a transparent performance system; allowing everyone to see each other's OKRs in real-time.
    `,
    src: "/koc-diyalog.png",
  },
  {
    title: "BSH Cosmos Modernization",
    text: "Cosmos was an old application that was used by BSH employees. We modernized the application with the latest technologies and made it more user-friendly.",
    src: "/bsh-cosmos.png",
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "By watching and applying WebChain Dev youtube channel's video, I created a multi page Next js 14 app using typescript, framer motion and tailwind CSS. This app features a responsive design, an animation on routing, and other cool animations.",
    src: "/WebPortfolio.png",
  },
  {
    title: "Flight Search Application",
    text: `Searching flights app where users can find flights by selecting airports and dates, with validation for all inputs. Additionally, a listing feature allowing sorting of flights by various criteria and displaying detailed flight information. Error handling and mock data usage were also implemented. The project was built with React and managed on GitHub with Git.
    `,
    src: "/flight-search.png",
  },
  {
    title: "E-commerce Simulation",
    text: `Responsive shopping site using Material UI and Redux Toolkit, featuring search, category selection, and product favorites. Users can switch between viewing all products and favorites, with adjustable display options. Completed within five days as part of a test case, I learned and implemented everything from scratch.
    `,
    src: "/ntt-commerce.png",
  },
  {
    title: "Portfolio Creator",
    text: `Learned and utilized various technologies like React, Vite, Firebase, Tailwind, and Daisy UI. Users can build their portfolios and write articles on topics of interest. My first live project, incorporating Firebase storage and Firestore database, along with Google login and email registration features.
    `,
    src: "/portfolio-creator.png",
  },
  {
    title: "MERN Stack Kitchen - Order",
    text: `Ordering system with the MERN Stack. I gained insights into React state management, page redirection with react-router-dom, and design tools like MDBootstrap. Additionally, I used Backend technologies such as Node.js, Express.js, MongoDB, and Mongoose for database operations. 
    `,
    src: "/kitchen-order.png",
  },
  {
    title: "Active Directory Migration Windows Server 2016 to Windows 2019",
    text: `Me and my teammate successfully upgraded Active Directory 2016 to Active Directory 2019 without any data, user, or policy loss. Initially attempting an in-place upgrade, we encountered errors and opted for a migration method after thorough research. Before proceeding, we ensured Active Directory 2016's health, FSMO roles, and DNS were intact. Following the migration, we meticulously verified data integrity and system health. Our project passed the review of our superior, affirming the success of the upgrade. 
    `,
    src: "/servers.jpg",
  },
  {
    title: "Health Insurance Mobile App",
    text: `
    As the Business Analyst in a three-person team, I learned about project processes, agile-scrum methodology, and effective communication. My role involved understanding problems, preparing reports, and communicating project requirements. Using Jira and Slack, I ensured continuous collaboration to keep the project moving forward.
    `,
    src: "/Business-Analyst.jpg",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];