import React from "react";

import Stack from "@mui/material/Stack";
import { motion, useScroll } from "framer-motion";
import { NpmIcon } from "../components/Icon";
import { useLottie } from "lottie-react";
import PythonIcon from "../assets/icon/icons8-python.json";
import { AwsIcon, VscodeIcon } from "../components/Icon";
import bgp1 from "../assets/image/pattern01.png";

import "../index.css";

const Language = ({ name, background, color }) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <button
                className="lanIcon cursor-pointer w-max origin-center ml-2 mr-2 my-2 font-semibold bg-dark text-light py-3 px-6 rounded-full shadow-lg dark:bg-light dark:text-dark lg:py-2 lg:px-5 text-base py-1\5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:font-bold"
                style={{ background: background, color: color }}
            >
                {name}
            </button>
        </motion.div>
    );
};

const Language_list = ({ list, background, color }) => {
    return (
        <div className="mt-2 flex flex-wrap items-center self-center justify-center">
            {list.map((language) => (
                <Language
                    key={language}
                    name={language}
                    background={background}
                    color={color}
                />
            ))}
        </div>
    );
};

const Skills = () => {
    const options = {
        animationData: PythonIcon,
        loop: true,
    };

    const { View } = useLottie(options);
    return (
        <section
            className="min-h-screen items-center py-20 text-dark dark:text-light sm:items-start "
            style={{ backgroundImage: `url(${bgp1})` }}
        >
            <h2 className="font-bold text-4xl mb-16 my-20 text-center lg:text-8xl">
                Skills
            </h2>
            <p className="text-center my-10 mx-10">
                得意なプログラミング言語、フレームワーク、ミドルウェアなど
            </p>
            <div className="m-auto w-10/12">
                <div className="flex flex-col text-lg items-center self-center w-full text-center my-16">
                    <Stack direction="row" alignItems="center" gap={0}>
                        <h2 className="font-bold  text-center">Basic</h2>
                        <VscodeIcon />
                    </Stack>
                    <Language_list
                        list={[
                            "Javascript",
                            "Typescript",
                            "Python",
                            "PHP",
                            "C",
                            "C++",
                            "java",
                        ]}
                        background="#9313"
                        color="#444"
                    />
                </div>
                <div className="flex flex-col text-lg items-center self-center w-full text-center my-16">
                    <Stack direction="row" alignItems="center" gap={0}>
                        <h2 className="font-bold  text-center">Web Develop</h2>
                        <NpmIcon />
                    </Stack>
                    <Language_list
                        list={[
                            "React",
                            "Vue",
                            "Vite",
                            "Express",
                            "Firebase",
                            "Node",
                        ]}
                        background="#FF5351"
                        color="#fff"
                    />
                </div>
                <div className="flex flex-col text-lg items-center self-center w-full text-center my-16">
                    <Stack direction="row" alignItems="center" gap={0}>
                        <h2 className="font-bold  text-center">
                            Deep Learning
                        </h2>
                        <>{View}</>
                    </Stack>
                    <Language_list
                        list={[
                            "Pytorch",
                            "Keras",
                            "Tensorflow",
                            "Scikit-learn",
                            "open-cv",
                        ]}
                        background="#9cd6c3"
                        color="#3E3E3D"
                    />
                </div>
                <div className="flex flex-col text-lg items-center self-center w-full text-center my-16">
                    <Stack direction="row" alignItems="center" gap={0}>
                        <h2 className="font-bold  text-center">AWS</h2>
                        <AwsIcon />
                    </Stack>
                    <Language_list
                        list={["S3", "Amplify", "Lambda", "SES"]}
                        background="#232F3F"
                        color="#FFFEFF"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
