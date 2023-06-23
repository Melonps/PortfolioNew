import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion"
import '../index.css'
import LiIcon from '../components/LiIcon';
import bgp1 from '../assets/image/pattern01.png'

const Details = ({ positon, compony, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return <li ref={ ref } className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <LiIcon/>
        <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -50 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{ transform: 'none'}}
        >
            
            <h3 className='capitalize font-bold text-lg sm:text-xl lg:text-3xl'>{positon}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-primary capitalize'
            >@{compony}</a></h3>
            <span className='capitalize font-medium text-sm lg:text-xl text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full text-sm lg:text-xl'>
                {work}
            </p>
        </motion.div>
    </li>
}

function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    
    return (
        <section className='min-h-screen items-center py-20 text-dark' style={{ backgroundImage: `url(${bgp1})` }}>
            <h2 className='font-bold text-4xl mb-16 my-20 text-center lg:text-8xl'>Experience</h2>    
            <p className='text-center my-10 mx-10'>簡単な経歴についてまとめています。</p>
            <div ref={ref} className='w-[65%] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-7 top-1 w-[4px] h-full bg-dark origin-top'></motion.div>
                    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                        <Details
                            positon="アメリカ研修"
                            compony="America in Sanfrancisco"
                            time="2018"
                            address="高校2年 夏"
                            companyLink="https://missioncollege.edu/"
                            work="1か月間サンフランシスコに滞在。スタンフォードやAppleの見学や、当時行っていた研究を発表しました。"
                        />
                        <Details
                            positon="滋賀県立彦根東高校 卒業"
                            compony="滋賀県"
                            time="2019"
                            address="高校3年 春"
                            companyLink="http://www.hikonehg-h.shiga-ec.ed.jp/"
                            work="阪大落ちちゃった..."
                        />
                        <Details
                                positon="大阪府立大学 入学"
                                compony="大阪府"
                                time="2019"
                                address="学部1年"
                                companyLink="http://www.eng.osakafu-u.ac.jp/school/school_computer_science/school_computer_science"
                                work="当時は吹奏楽とサウンドエンジニアリングばかりに没頭してた記憶があります。"
                        />
                        <Details
                                positon="正指揮者に就任"
                                compony="大阪公立大学 吹奏楽部"
                                time="2021"
                                address="学部3年"
                                companyLink="http://www.hikonehg-h.shiga-ec.ed.jp/"
                                work="90名を超える部活を指導。今でも外部団体の指揮をしていたり。"
                        />
                        <Details
                                positon="大阪公立大学 大学院 入学"
                                compony="大阪公立大学大学院 情報学研究科"
                                time="2022"
                                address="修士１年"
                                companyLink="https://www.omu.ac.jp/i/dci/"
                                work="無事に卒論を終え、華と激務の大学院生活！"
                                
                        />
                        <Details
                                positon="医療×AIプロジェクト 参加"
                                compony="大阪公立大学大学院 情報学研究科"
                                time="2023"
                                address="修士１年"
                                companyLink="https://med-ai.jp/"
                                work="大阪公立大学の情報学研究科と医学研究科との共同プロジェクトに参加。"
                            />
                    </ul>
            </div>
        </section>
        
    )
    
};


export default Experience