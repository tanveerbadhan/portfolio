import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                Experienced and dedicated Full Stack Developer offering more than 2.5 years of expertise to the IT industry with multiple successful React JS, React Native, and Java Spring Boot
                projects. Whether it’s building cross-platform apps with React Native, harnessing the power of React JS for web applications, or developing robust backend services with Java Spring
                Boot, I am dedicated to crafting high-quality, innovative full-stack solutions that exceed expectations. 
                <br />
                <br />
                I am currently pursuing a Master of Engineering in Electrical and Computer
                Engineering at Queen’s University, Kingston, ON while also holding a Post Graduate Certificate in Mobile Application Development from George Brown College, Toronto, ON and a Bachelor’s degree in Electronics and
                Communication from NIT Jalandhar, India. With a strong foundation in data structures, algorithms, operating systems, and database systems, I am passionate about creating efficient,
                user-friendly, and innovative solutions while thriving in collaborative and cross-functional environments.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
