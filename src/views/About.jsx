import React from "react";
import Me from "../assets/image/me2.png";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import bgp1 from "../assets/image/pattern01.png";

function About() {
    return (
        <section
            className="flex min-h-screen py-20 text-dark"
            style={{ backgroundImage: `url(${bgp1})` }}
        >
            <div
                className="z-0 inline-block h-full w-full p-12  dark:bg-dark 
                md:p-12 sm:p-8  xl:p-72 lg:p-32 !pt-0 md:pt-16 sm:!pt-16"
            >
                <div className="w-full items-start flex justify-center flex-low xl:flex-low">
                    <div className="inline-block text-dark  font-bold capitalize !text-left">
                        <h2 className="font-bold text-4xl my-20 mb-16 text-center lg:text-8xl">
                            About Me
                        </h2>
                        <div className="  w-full grid-cols-8 gap-8 lg:gap-24 item-center font-medium text-base lg:text-xl">
                            <div className="relative flex justify-center col-span-4 h-88  rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-8 order-last">
                                <img src={Me} className="md:h-88 m-auto " />
                            </div>
                            <div className="col-span-8 flex flex-col items-start justify-center sm:col-span-8">
                                <p className="my-4 ">
                                    <br />
                                    <span>名前</span>：筧 万里
                                    <br />
                                    <span>学歴</span>：大阪府立大学 卒業 →
                                    大阪公立大学大学院 在学中
                                    <br />
                                    <span>専門</span>：基幹情報学 知能情報学分野
                                    <br />
                                    <span>部活</span>
                                    ：吹奏楽（正指揮者）、コンピューターサークル
                                    <br />
                                    <span>特技</span>
                                    ：PCを用いた作曲(CDも販売してます！)、3Dモデリング、ロゴ＆webデザイン、ピアノ、ギター
                                    <br />
                                    <br />
                                    <span>研究について</span>
                                    <br />
                                    人間×情報工学の分野で研究しています。
                                    <br />
                                    Web開発とPythonによる機械学習ができます。
                                    <br />
                                    <br />
                                    <span>学士</span>
                                    <br />
                                    視覚障害者のためのグラフ要約システムの提案をし、Pythonと機械学習を用いてモデルを設計しました。
                                    <br />
                                    また、AWSを用いたwebアプリで提案手法の有効性を検証しました。
                                    <br />
                                </p>
                                <div className="mt-2 flex items-center self-start ">
                                    <a
                                        href="mailto:kakehi.works@gmail.com"
                                        className="more-button flex items-center rounded-lg border-2 border-solid p-2.5 px-6 font-semibold
                                            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                            md:p-2 md:px-4 bg-primary"
                                    >
                                        Mail
                                        <OpenInNewOutlinedIcon />
                                    </a>
                                    <a
                                        href="https://github.com/Melonps"
                                        className="ml-4 font-medium capitalize text-dark underline hover:border-dark hover:bg-transparent hover:text-primary  dark:text-light  dark:hover:text-light dark:hover:bg-dark"
                                    >
                                        Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
