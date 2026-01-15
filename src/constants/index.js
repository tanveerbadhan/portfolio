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
    actuwell,
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
        title: "React Native",
        icon: mobile,
    },
    {
        title: "React",
        icon: web,
    },
    {
        title: "Java Spring Boot",
        icon: web,
    },
    {
        title: "IOS",
        icon: ios,
    },
    {
        title: "Android",
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
        title: "Mobile Application Developer (Co-op)",
        company_name: "Actuwell",
        icon: actuwell,
        iconBg: "#E6DEDD",
        date: "May 2025 - Aug 2025",
        points: [
            "Developed and maintained a comprehensive health assistant full-stack application with React Native and Expo frontend, designed to run seamlessly on both iOS and Android platforms",
            "Built robust backend services using Java Spring Boot, implementing RESTful APIs for business logic, data processing, and third-party integrations",
            "Integrated Firebase cloud services with Firestore for authentication, data storage, and real-time database operations, working seamlessly with Spring Boot backend services",
            "Designed and implemented database schemas, optimized queries, and ensured data consistency across frontend and backend systems",
            "Collaborated using Git for version control, actively contributing to code reviews, PR testing, and cross-functional communication between frontend and backend teams",
            "Worked on app deployment to Google Play and Apple App Stores for beta testing with TestFlight and Android Beta Channel Releases",
        ],
    },
    {
        title: "Software Development Engineer 2",
        company_name: "Cars24",
        icon: cars24,
        iconBg: "#383E56",
        date: "March 2024 - Aug 2024",
        points: [
            "Worked on the Dealers App, developing a full-stack cross-platform mobile application using React Native for frontend and Java Spring Boot for backend services",
            "Designed and developed RESTful APIs using Java Spring Boot to handle business logic, data processing, and integration with third-party services",
            "Implemented new features across frontend and backend, and integrated a Design Language System (DLS) for UI consistency",
            "Leveraged tools like Embrace.io and Bitrise for app monitoring and automated builds",
            "Played an instrumental role in the efficient deployment of app updates using CodePush, ensuring seamless user experiences across both iOS and Android platforms",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "MakeMyTrip",
        icon: makeMyTrip,
        iconBg: "#E6DEDD",
        date: "July 2022 - March 2024",
        points: [
            "Developed and maintained full-stack solutions for various B2B travel platforms, building frontend with React JS and React Native, and backend services using Java Spring Boot",
            "Built robust RESTful APIs with Java Spring Boot for MyPartner, MyBiz, Common Frontend Library, and TripMoney projects, handling business logic, authentication, and data management",
            "Worked on enhancing the Common Frontend UI Library, which included developing components like Calendars, DatePickers, and Sliders, used across the organization",
            "Designed and implemented database schemas and ensured seamless integration between Spring Boot backend and React frontend applications",
            "Improved user experience, integrated backend services, and optimized web and mobile applications for better performance and scalability",
            "Played a key role in enhancing code quality, testing, and collaborating with cross-functional teams on both frontend and backend development",
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
            "Developed a collection of multiple standalone React Native and React JS packages such as Calendar, DrumRoll DatePicker, RangeSlider, BottomSheet, FloatingInput built inside mono repo utilizing TypeScript and Lerna. Collaborated closely with cross-functional teams, including designers and product managers, to gather requirements and implement UI components. Implemented responsive design principles to guarantee a consistent and optimal user experience across diverse devices and screen sizes. Maintained robust strategies for backward compatibility in the Common Frontend Library, facilitating smooth transitions for existing projects during updates. Integrated SonarQube that led to increase in code quality and implemented Storybook for enhanced component development and documentation.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "React JS",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
            {
                name: "Lerna",
                color: "pink-text-gradient",
            },
            {
                name: "Storybook",
                color: "blue-text-gradient",
            },
        ],
        image: commonFrontendLibrary,
        source_code_link: "https://drive.google.com/file/d/1jLzIbg5xWRlHsSPZo0XTj2J9L7SP7eY9/view?usp=drive_link",
    },
    {
        name: "MakeMyTrip B2B Desktop (MyPartner & MyBiz)",
        description:
            "Worked on a full-stack B2B travel agency portal connecting businesses in the travel industry, enabling them to efficiently manage bookings, inventory, and customer relationships. Built robust backend services using Java Spring Boot for MyPartner and MyBiz, implementing RESTful APIs for booking management, inventory control, customer relationship management, and payment processing. Designed and implemented database schemas and ensured data consistency across multiple B2B platforms. Implemented a dynamic theming approach using SCSS, allowing seamless adaptation to backend theme variables for MyBiz and MyPartner. Utilized react-redux, redux-thunk and redux-persist for transient app state and React Router to turn application into Single Page Application. Applied optimization techniques to reduce the page size and load times using sprites, and implemented Webpack module bundler to manage and optimize JavaScript files, increasing productivity by 60%.",
        tags: [
            {
                name: "React JS",
                color: "blue-text-gradient",
            },
            {
                name: "Java Spring Boot",
                color: "green-text-gradient",
            },
            {
                name: "SCSS",
                color: "pink-text-gradient",
            },
            {
                name: "Redux",
                color: "orange-text-gradient",
            },
            {
                name: "Webpack",
                color: "blue-text-gradient",
            },
        ],
        image: b2bDesktop,
        source_code_link: "https://drive.google.com/file/d/1SpEoZKY4BodMs9IrPjeK_Eo1Hj_WkPxQ/view?usp=sharing",
    },
    {
        name: "MakeMyTrip B2B App & MWeb (MyPartner & MyBiz)",
        description:
            "Worked on user interface that supports Android, iOS and web (using react-native-web), resulting in 71.2% increase in conversion rate. Built backend services using Java Spring Boot to support mobile and web applications, implementing RESTful APIs for booking management and user authentication. Utilized Context API for theming and local state management. Implemented Firebase features including push notifications, Realtime Database, Firestore analytics, crashlytics, integrated with Spring Boot backend services. Implemented various animations to improve the visual appeal and user engagement within the application. Utilized various Common Frontend Library packages, such as DotsCarousel, Calendar, DrumRoll, RangeSlider, BottomSheet, and HorizontalDatePicker.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "Java Spring Boot",
                color: "green-text-gradient",
            },
            {
                name: "React Native Web",
                color: "pink-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            },
            {
                name: "Context API",
                color: "blue-text-gradient",
            },
        ],
        image: b2bMobile,
        source_code_link: "https://drive.google.com/file/d/1xLsiZWx-3Ptzo_II4cN0PLW9asOnJmm0/view?usp=drive_link",
    },
    {
        name: "Cars24 Partners (Cars24)",
        description:
            "Worked on a full-stack one-stop solution for registered business partners to source used cars with certified inspection reports, wide selection, and credit financing options. Built backend services using Java Spring Boot, implementing RESTful APIs for car inventory management and inspection reports. Designed database schemas and optimized queries for efficient data retrieval and management across frontend and backend systems. Integrated a Design Language System (DLS) into the project, consuming UI components from it to elevate app's brand value and ensure UI consistency across platforms. Leveraged Embrace.io for React Native to monitor app crashes, ensuring swift detection and resolving issues. Used Bitrise for automated app builds, streamlining development process and ensuring efficient delivery of updates.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "Java Spring Boot",
                color: "green-text-gradient",
            },
            {
                name: "Embrace.io",
                color: "orange-text-gradient",
            },
            {
                name: "Bitrise",
                color: "pink-text-gradient",
            },
            {
                name: "CodePush",
                color: "blue-text-gradient",
            },
        ],
        image: cars24Dealer,
        source_code_link: "https://drive.google.com/file/d/1JHEBNXcvm0JVOoSfLhJqR4Kn_bRzNpF-/view?usp=drive_link",
    },
];

export { services, technologies, experiences, testimonials, projects };
