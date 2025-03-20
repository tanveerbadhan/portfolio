import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    ios,
    android,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    makeMyTrip,
    cars24,
    threejs,
    commonFrontendLibrary,
    b2bDesktop,
    b2bMobile,
    cars24Dealer,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "IOS Developer",
        icon: ios,
    },
    {
        title: "Android Developer",
        icon: android,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "MakeMyTrip",
        icon: makeMyTrip,
        iconBg: "#E6DEDD",
        date: "July 2022 - March 2024",
        points: [
            "Contributed to the development and maintenance of frontend solutions for various B2B travel platforms using React JS and React Native.",
            "Played a key role in developing the Common Frontend UI Library, creating reusable components (e.g., Calendar, DatePicker, RangeSlider) used across the organization.",
            "Enhanced user experience by implementing responsive designs and optimizing web and mobile applications.",
            "Integrated backend services and ensured smooth interaction between frontend and backend systems.",
            "Collaborated with cross-functional teams (designers, product managers) to gather requirements and implement UI components.",
            "Contributed to the development process with agile methodologies, including sprint planning and retrospectives.",
        ],
    },
    {
        title: "Software Development Engineer 2",
        company_name: "Cars24",
        icon: cars24,
        iconBg: "#383E56",
        date: "March 2024 - Aug 2024",
        points: [
            "Worked on the Dealers App, a cross-platform mobile application for registered business partners, developed using React Native.",
            "Implemented new features and functionalities tailored to both iOS and Android platforms, improving the app's user experience.",
            "Integrated a Design Language System (DLS) to ensure UI consistency and enhance the app's brand value.",
            "Utilized Embrace.io for crash monitoring, ensuring swift detection and resolution of app issues.",
            "Leveraged Bitrise for automated app builds and CodePush for seamless app updates on both Play Store and App Store.",
            "Collaborated with cross-functional teams to optimize the app’s performance and ensure smooth delivery of updates.",
            "Managed version control and team collaboration using Bitbucket.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "Tanveer's creative design and technical expertise transformed our app, making it both functional and visually stunning.",
        name: "Aakash Kumar",
        designation: "Head of Design",
        company: "MakeMyTrip",
        image: "https://media.licdn.com/dms/image/v2/C5103AQGgSU1noyg1wA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516333832314?e=1747872000&v=beta&t=jPQ6iM_rMhYkiWnY2Dm7z10Cx1-gol_J5mLfM7C4UMs",
    },
    {
        testimonial: "Tanveer's attention to detail made our mobile app a standout in the market. Our users love the interface and performance.",
        name: "Rishab Sharma",
        designation: "Director Frontend Engineering",
        company: "MakeMyTrip",
        image: "https://media.licdn.com/dms/image/v2/C5603AQH2kbejp8U3rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516620172069?e=1747872000&v=beta&t=Gk0r2wUofBBpX7jmtsYycyVqyJW0o-ZeDzfbpICJb0M",
    },
    {
        testimonial: "Tanveer turned our app idea into a reality. The user experience is seamless, and it's already getting rave reviews.",
        name: "Ankit Bhalla",
        designation: "Director of Engineering",
        company: "Cars24",
        image: "https://media.licdn.com/dms/image/v2/C5103AQHxAIfAxpB98Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1562493871980?e=1747872000&v=beta&t=nK7P6f_idxblNxShoxNuygRdtq84kOcfogA6uVeIWvQ",
    },
];

const projects = [
    {
        name: "Common Frontend Library (MakeMyTrip)",
        description:
            "As part of the Common Frontend Library project at MakeMyTrip, I contributed to building and maintaining a collection of reusable React Native and React JS components, including Calendar, DatePicker, RangeSlider, and more. Utilizing TypeScript, Lerna, and a mono repo structure, I collaborated with cross-functional teams to design and implement UI components that adhere to the company’s design system.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "React Js",
                color: "green-text-gradient",
            },
            {
                name: "Github",
                color: "orange-text-gradient",
            },
            {
                name: "Lerna",
                color: "pink-text-gradient",
            },
        ],
        image: commonFrontendLibrary,
        source_code_link: "https://drive.google.com/file/d/1jLzIbg5xWRlHsSPZo0XTj2J9L7SP7eY9/view?usp=drive_link",
    },
    {
        name: "MakeMyTrip B2B (Desktop)",
        description:
            "For the desktop version of the MakeMyTrip B2B portal, I implemented a dynamic theming system that allowed us to use a single codebase for both MyBiz and MyPartner. This approach ensured consistency across the platforms while streamlining the development process. The theming system allowed seamless integration of backend variables, providing a visually cohesive experience for users across both portals.",
        tags: [
            {
                name: "React Js",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "Axios",
                color: "pink-text-gradient",
            },
            {
                name: "Scss",
                color: "orange-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "Github",
                color: "blue-text-gradient",
            },
        ],
        image: b2bDesktop,
        source_code_link: "https://drive.google.com/file/d/1SpEoZKY4BodMs9IrPjeK_Eo1Hj_WkPxQ/view?usp=sharing",
    },
    {
        name: "MakeMyTrip B2B (Mobile)",
        description:
            "Building on the success of the desktop version, we extended the same approach to the mobile platforms for MyBiz and MyPartner. Using React Native and React Native Web, I was able to ensure that the app worked not only on iOS and Android but also as a Mobile Web Application (MWeb). This allowed us to maintain a consistent user experience across all platforms while maximizing accessibility and engagement for mobile users.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "React Native-Web",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
            {
                name: "Axios",
                color: "orange-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "Github",
                color: "blue-text-gradient",
            },
        ],
        image: b2bMobile,
        source_code_link: "https://drive.google.com/file/d/1xLsiZWx-3Ptzo_II4cN0PLW9asOnJmm0/view?usp=drive_link",
    },
    {
        name: "Cars24 Partners (Cars24)",
        description:
            "The Cars24 Partners app empowers professional car dealers to buy and sell used cars, access certified inspection reports, secure financing, and even sell car leads. I contributed to the app by implementing new features for both iOS and Android using React Native. I integrated a Design Language System (DLS) to ensure UI consistency and used Embrace.io for crash monitoring. Additionally, I streamlined the development process with Bitrise for automated builds and CodePush for seamless app updates without requiring multiple releases.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "Axios",
                color: "orange-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "Code Push",
                color: "blue-text-gradient",
            },
            {
                name: "BitRise",
                color: "green-text-gradient",
            },
            {
                name: "Embrace IO",
                color: "pink-text-gradient",
            },
        ],
        image: cars24Dealer,
        source_code_link: "https://drive.google.com/file/d/1JHEBNXcvm0JVOoSfLhJqR4Kn_bRzNpF-/view?usp=drive_link",
    },
];

export { services, technologies, experiences, testimonials, projects };
