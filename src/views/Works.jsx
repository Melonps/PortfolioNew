import React, { useRef, useState } from 'react';

import card_myterminal from '../assets/image/card_myterminal.png'
import card_portfolio from '../assets/image/card_portfolio.png'
import card_doushici from '../assets/image/card_doushici.png'
import card_cd from '../assets/image/card_cd.png'
import card_gensumgraph from '../assets/image/card_gensumgraph.png'
import card_kaggle from '../assets/image/card_kaggle.png'
import card_signate from '../assets/image/card_signate.png'

import bgp1 from '../assets/image/pattern01.png'


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import '../index.css'


const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%',
    bgcolor: '#F9F7F8',
    border: '1px solid #3E3E3D',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center'
};

const Card = ({ title, detail, image, list, caption, link}) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const l = [];
    for (const element of list) {
        l.push(<li  key={element}>#{element}&nbsp;&nbsp;</li>)
    }

    return <li ref={ ref } className='flex justify-center rounded-sm bg-white hover:shadow-2xl ring-1 duration-200 h-full bg-gray-50 h-68 w-3/5 md:w-96 ring-primary shadow-primary-200 m-8 p-4 md:px-6 shadow-lg hover:ring-4 hover:-translate-y-3'>
        <div className='text-center'
            onClick={handleOpen}
        >   
            <div className='flex justify-center object-contain min-h-24 max-h-52 lg:max-h-96 my-0 lg:my-2'>
                <img src={image} className='h-32 lg:h-48' ></img>
            </div>
            <p className='text-xl w-full text-primary text-left'>
                {caption}
            </p>
            <p className='text-2xl w-full text-black'>
                {title}
            </p>
        </div>
        <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                    <div className='relative flex flex-col lg:flex-row justify-center'>
                        <a href={link} className='m-auto w-full md:w-4/6 cursor-pointer rounded-lg lg:w-1/2 shadow-xl'>
                            <img src={image} className='h-auto w-full' ></img>
                        </a>
                        <div className='my-8  m-auto md:mx-4 lg:mx-12 flex w-full flex-col items-start text-left justify-between px-6 lg:w-1/2  lg:pl-0 lg:py-6'>
                            <div className='underline-offset-2 hover:underline'>
                                <h2 className='font-bold text-xl my-4 text-center lg:text-4xl'>{title}</h2>
                            </div>
                            <p className=" flex text-base lg:text-xl flex-col items-start justify-center lg:w-full lg:pl-0 lg:pt-6">
                                {detail}
                                <ul className='mt-2 flex items-center font-bold text-primary flex-wrap'>
                                    {l}
                                </ul>  
                            </p>
                        </div>
                    </div>
                    </Box>
                </Fade>
            </Modal>
    </li>
}

const Works= () => {
    return (
        <section className='min-h-screen items-center py-20' style={{ backgroundImage: `url(${bgp1})` }}>
            <h2 className='font-bold text-4xl mb-16 my-20 text-center lg:text-8xl'>Works</h2> 
            <p className='text-center my-10 mx-10'>制作物や取り組んだものについてまとめています。</p>
            <div className="mt-2 flex flex-wrap items-center self-center justify-center">
                <Card
                    title="オンラインサーベイサイト"
                    detail="卒業研究でグラフの要約システムについて研究していま。システムによって生成される要約には忠実度と分かりやすさでトレードオフの関係があるという仮説を前提としています。その仮説の検証のために1000人規模の晴眼者を対象にオンラインサーベイを行いました。学内外問わず2000人の人にアクセスして頂き、検証とデータセットの作成と分析を行っています。謝礼は出ませんが、画像クリックからお試しできます！"
                    image={card_gensumgraph}
                    list={["React", "lambda(AWS)", "Amplify(AWS)","Firebase", "ReactMUI"]}
                    caption="web開発"
                    link = "https://prod.d2tjr4wg0jx215.amplifyapp.com/"
                ></Card>
                <Card
                    title="My Terminal"
                    detail="Chromeのトップ画面をオシャレにしたい！から始まった友人趣味のプロジェクトです。カスタマイズ性を最も重要視し、好みのバックグラウンドを作成できます！データベースと結び付いているため、ログインしてユーザーごとのプロファイルを作成することができます。"
                    image={card_myterminal}
                    list={["vue", "Firebase", "Bootstrap"]}
                    caption="web開発 & now developing"
                    link = ""
                ></Card>
                <Card
                    title="Kaggle"
                    detail="データサイエンスコンペに積極的に参加しています。モデルの精度を競ったり、自分の分析結果を英語で公開したりしています。あるコンテストの自分の分析結果がブロンズメダルを頂いたので載せました。Plotlyが大好きです！Plotly最高！オシャレなノートのデザインにはhtmlを直接埋め込んでます。"
                    image={card_kaggle}
                    list={["Python", "Plotly", "seaborn", "sklearn", "html"]}
                    caption="データサイエンス"
                    link = "https://www.kaggle.com/code/melonpasta/tps-jul-2022-pca-eda-trying"
                ></Card>
                <Card
                    title="オカシヤドウシチHP制作"
                    detail="お菓子屋さんのwebサイト制作を担当しています。デザインから実装、管理まで全て担当しています（大変）。特に近代的かつ、おいしそうなデザインを目指すためにめちゃくちゃ勉強しております。皆さんに公開できることを楽しみにしてます！"
                    image={card_doushici}
                    list={["React", "vite", "tailwindcss"]}
                    caption="web開発 & now developing"
                    link = ""
                ></Card>
                <Card
                    title="kakehi's Profile"
                    detail="私を知ってもらうためのwebサイトです！最近blenderの熱が戻ってきたので、どうにかしてwebサイトと結び付けたいと思い、サイトの最も目立つ部分に自作の3Dモデルを組み込みました。現在はこれをもっと高速にするため、試行錯誤中です(viteの癖に遅い！笑)"
                    image={card_portfolio}
                    list={["React", "vite", "tailwindcss", "framer-motion", "React Three Fiber"]}
                    caption="web開発"
                    link = "https://melonpass.vercel.app/"
                ></Card>
                
                <Card
                    title="SIGNATE"
                    detail="SIGNATEにも積極的に参加しています。2022年夏のSIGNATE Student Cup 2022に友人と一緒に出場しました。大学のGPUサーバーで実験を回し、自然言語モデルの精度を競いました。私はデータの前処理とモデル作成とリーダーを務めました。また、他の3人がUbuntu、Docker、CUDAを使用した環境構築に不慣れということだったので、ドキュメントなどを作成しました。"
                    image={card_signate}
                    list={["Python", "Pytorch", "BERT", "sklearn"]}
                    caption="データサイエンス"
                    link = "https://signate.jp/competitions/735/leaderboard"
                ></Card>
            </div>
            
        </section>
        
    )
};

export default Works