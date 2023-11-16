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
		<motion.div initial={{ y: 0 }} whileHover={{ y: -10 }} transition={{ duration: 0.5, type: "spring" }}>
			<button
				className="lanIcon py-1\5 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:font-bold my-2 ml-2 mr-2 w-max origin-center cursor-pointer rounded-full bg-dark px-6 py-3 text-base font-semibold text-light shadow-lg dark:bg-light  dark:text-dark md:px-3 lg:px-5 lg:py-2"
				style={{ background: background, color: color }}
			>
				{name}
			</button>
		</motion.div>
	);
};

const Language_list = ({ list, background, color }) => {
	return (
		<div className="mt-2 flex flex-wrap items-center justify-center self-center">
			{list.map((language) => (
				<Language key={language} name={language} background={background} color={color} />
			))}
		</div>
	);
};

const Skills = () => {
	const options = {
		animationData: PythonIcon,
		loop: true
	};

	const { View } = useLottie(options);
	return (
		<section
			className="min-h-screen items-center py-20 text-dark dark:text-light sm:items-start "
			style={{ backgroundImage: `url(${bgp1})` }}
		>
			<h2 className="lg:text-8xl my-20 mb-16 text-center text-2xl font-bold md:text-4xl">Skills</h2>
			<p className="mx-10 my-10 text-center text-lg">得意なプログラミング言語、フレームワーク、ミドルウェアなど</p>
			<div className="m-auto w-10/12">
				<div className="my-16 flex w-full flex-col items-center self-center text-center text-2xl">
					<Stack direction="row" alignItems="center" gap={0}>
						<h2 className="text-center  font-bold">Basic</h2>
						<VscodeIcon />
					</Stack>
					<Language_list
						list={["Javascript", "Typescript", "Python", "PHP", "C", "C++", "java"]}
						background="#9313"
						color="#444"
					/>
				</div>
				<div className="my-16 flex w-full flex-col items-center self-center text-center text-2xl">
					<Stack direction="row" alignItems="center" gap={0}>
						<h2 className="text-center  text-xl font-bold">Web Develop</h2>
						<NpmIcon />
					</Stack>
					<Language_list
						list={["React", "Vue", "Vite", "Express", "Firebase", "Node"]}
						background="#FF5351"
						color="#fff"
					/>
				</div>
				<div className="my-16 flex w-full flex-col items-center self-center text-center text-2xl">
					<Stack direction="row" alignItems="center" gap={0}>
						<h2 className="text-center  text-xl font-bold">Deep Learning</h2>
						<>{View}</>
					</Stack>
					<Language_list
						list={["Pytorch", "Keras", "Tensorflow", "Scikit-learn", "open-cv"]}
						background="#9cd6c3"
						color="#3E3E3D"
					/>
				</div>
				<div className="my-16 flex w-full flex-col items-center self-center text-center text-2xl">
					<Stack direction="row" alignItems="center" gap={0}>
						<h2 className="text-center  text-xl font-bold">AWS</h2>
						<AwsIcon />
					</Stack>
					<Language_list list={["S3", "Amplify", "Lambda", "SES", "Cloud9"]} background="#232F3F" color="#FFFEFF" />
				</div>
			</div>
		</section>
	);
};

export default Skills;
