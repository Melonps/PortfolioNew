import React, { useRef, useState, useEffect } from "react";

import card_myterminal from "../assets/image/card_myterminal.png";
import card_portfolio from "../assets/image/card_portfolio.png";
import card_doushici from "../assets/image/card_doushici.png";
import card_cloudseed from "../assets/image/card_CloudSeed.png";
import card_remeter from "../assets/image/card_REmeter.png";
import card_gensumgraph from "../assets/image/card_gensumgraph.png";
import card_kaggle from "../assets/image/card_kaggle.png";
import card_signate from "../assets/image/card_signate.png";
import card_Sati8n from "../assets/image/card_Sati8n.png";
import card_WithTra from "../assets/image/card_WithTra.png";

import bgp1 from "../assets/image/pattern01.png";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "../index.css";

const style = {
	position: "relative",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "#F9F7F8",
	border: "1px solid #3E3E3D",
	boxShadow: 24,
	p: 4,
	borderRadius: "16px",
	display: "flex",
	alignItems: "center"
};

const mobileStyle = {
	width: "90%", // 例: スマートフォンの場合は90%
	height: "90%" // 例: スマートフォンの場合は80%
};

// PC用のスタイル
const pcStyle = {
	width: "60%", // 例: PCの場合は60%
	height: "60%" // 例: PCの場合は60%
};

// メディアクエリ
const mediaQuery = window.matchMedia("(max-width: 768px)"); // 例: 768px未満の場合はスマートフォンと見なす

const Card = ({ title, detail, image, list, caption, link }) => {
	const ref = useRef(null);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const l = [];
	for (const element of list) {
		l.push(<li key={element}>#{element}&nbsp;&nbsp;</li>);
	}
	useEffect(() => {
		const handleResize = () => {
			if (mediaQuery.matches) {
				// スマートフォンの場合
				Object.assign(style, mobileStyle);
			} else {
				// PCの場合
				Object.assign(style, pcStyle);
			}
		};

		handleResize(); // 初回実行
		window.addEventListener("resize", handleResize); // リサイズ時にも実行

		return () => {
			window.removeEventListener("resize", handleResize); // クリーンアップ
		};
	}, [mediaQuery]);

	return (
		<li
			ref={ref}
			className="bg-gray-50 h-68 shadow-primary-200 m-8 flex h-full justify-center rounded-sm bg-white p-4 shadow-lg ring-1 ring-primary duration-200 hover:-translate-y-3 hover:shadow-2xl hover:ring-4 md:w-3/5 md:w-96 md:px-6"
		>
			<div className="text-center" onClick={handleOpen}>
				<div className="min-h-24 my-0 flex max-h-52 justify-center object-contain lg:my-2 lg:max-h-96">
					<img src={image} className="h-32 lg:h-48"></img>
				</div>
				<p className=" w-full text-left text-sm text-primary lg:text-lg">{caption}</p>
				<strong className="text-black w-full text-xl">{title}</strong>
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
						timeout: 500
					}
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<div className="relative flex flex-col justify-center md:m-4 lg:flex-row">
							<a href={link} className="m-auto flex w-full cursor-pointer justify-center rounded-lg  md:w-4/6 lg:w-1/2">
								<img src={image} className="h-auto w-96 shadow-xl lg:w-full"></img>
							</a>
							<div className="m-auto  my-8 flex w-full flex-col items-start justify-between px-6 text-left md:mx-4 lg:mx-12 lg:w-1/2  lg:py-6 lg:pl-0">
								<div className="underline-offset-2 hover:underline">
									<h2 className="my-4 text-center text-xl font-bold lg:text-3xl">{title}</h2>
								</div>
								<p className=" flex flex-col items-start justify-center text-base lg:w-full lg:pl-0 lg:pt-6 lg:text-xl">
									{detail}
									<ul className="mt-2 flex flex-wrap items-center font-bold text-primary">{l}</ul>
									<a href={link} className="underline">
										資料などはこちら！
									</a>
								</p>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</li>
	);
};

const Works = () => {
	return (
		<section className="min-h-screen items-center py-20" style={{ backgroundImage: `url(${bgp1})` }}>
			<h2 className="lg:text-8xl my-20 mb-16 text-center text-4xl font-bold">Works</h2>
			<p className="mx-10 my-10 text-center">制作物や取り組んだものについてまとめています。</p>
			<div className="mt-2 flex flex-wrap items-center justify-center self-center">
				<Card
					title="オンラインサーベイサイト"
					detail="卒業研究でグラフの要約システムについて研究していま。システムによって生成される要約には忠実度と分かりやすさでトレードオフの関係があるという仮説を前提としています。その仮説の検証のために1000人規模の晴眼者を対象にオンラインサーベイを行いました。学内外問わず2000人の人にアクセスして頂き、検証とデータセットの作成と分析を行っています。謝礼は出ませんが、画像クリックからお試しできます！"
					image={card_gensumgraph}
					list={["React", "lambda(AWS)", "Amplify(AWS)", "Firebase", "ReactMUI"]}
					caption="web開発"
					link="https://prod.d2tjr4wg0jx215.amplifyapp.com/"
				></Card>
				<Card
					title="My Terminal"
					detail="Chromeのトップ画面をオシャレにしたい！から始まった友人趣味のプロジェクトです。カスタマイズ性を最も重要視し、好みのバックグラウンドを作成できます！データベースと結び付いているため、ログインしてユーザーごとのプロファイルを作成することができます。"
					image={card_myterminal}
					list={["vue", "Firebase", "Bootstrap"]}
					caption="web開発 & now developing"
					link=""
				></Card>
				<Card
					title="Kaggle"
					detail="データサイエンスコンペに積極的に参加しています。モデルの精度を競ったり、自分の分析結果を英語で公開したりしています。あるコンテストの自分の分析結果がブロンズメダルを頂いたので載せました。Plotlyが大好きです！Plotly最高！オシャレなノートのデザインにはhtmlを直接埋め込んでます。"
					image={card_kaggle}
					list={["Python", "Plotly", "seaborn", "sklearn", "html"]}
					caption="データサイエンス"
					link="https://www.kaggle.com/code/melonpasta/tps-jul-2022-pca-eda-trying"
				></Card>
				<Card
					title="オカシヤドウシチHP制作"
					detail="お菓子屋さんのwebサイト制作を担当しています。デザインから実装、管理まで全て担当しています（大変）。特に近代的かつ、おいしそうなデザインを目指すためにめちゃくちゃ勉強しております。皆さんに公開できることを楽しみにしてます！"
					image={card_doushici}
					list={["React", "vite", "tailwindcss"]}
					caption="web開発 & now developing"
					link=""
				></Card>
				<Card
					title="kakehi's Profile"
					detail="私を知ってもらうためのwebサイトです！最近blenderの熱が戻ってきたので、どうにかしてwebサイトと結び付けたいと思い、サイトの最も目立つ部分に自作の3Dモデルを組み込みました。現在はこれをもっと高速にするため、試行錯誤中です(viteの癖に遅い！笑)"
					image={card_portfolio}
					list={["React", "vite", "tailwindcss", "framer-motion", "React Three Fiber"]}
					caption="web開発"
					link="https://melonpass.vercel.app/"
				></Card>
				<Card
					title="SIGNATE"
					detail="SIGNATEにも積極的に参加しています。2022年夏のSIGNATE Student Cup 2022に友人と一緒に出場しました。大学のGPUサーバーで実験を回し、自然言語モデルの精度を競いました。私はデータの前処理とモデル作成とリーダーを務めました。また、他の3人がUbuntu、Docker、CUDAを使用した環境構築に不慣れということだったので、ドキュメントなどを作成しました。"
					image={card_signate}
					list={["Python", "Pytorch", "BERT", "sklearn"]}
					caption="データサイエンス"
					link="https://signate.jp/competitions/735/leaderboard"
				></Card>
				<Card
					title="CloudSeed"
					detail="2023年6月12日~6月18日に開催された日本ユニシス様主催のハッカソンに参加し、最優秀賞を受賞しました。課題はオンラインのミーティングで交流がしにくいというもので、複数の言葉からワードクラウド画像を作成するwebアプリを開発しました。私は、リーダーとデザイン、フロントエンドを担当しました。"
					image={card_cloudseed}
					list={["React", "Python", "kinton", "Firebase"]}
					caption="アプリ開発×ハッカソン"
					link="https://x.gd/941Td"
				></Card>
				<Card
					title="REmeter"
					detail="2023年7月3日~7月9日に開催されたKDDI様のハッカソンに参加し、BIPROGY様のハッカソンに続けて最優秀賞を受賞しました。課題はオンラインイベントにおける課題を解決し、いかに盛り上げるかというもので、参加者のリアクションや感情を自動的に推定し、主催者にサマリとしてタイムラインやグラフを送信するwebアプリを開発しました。私は、リーダーとデザイン、インフラ、フロントエンドを担当しました。"
					image={card_remeter}
					list={["React", "Python", "OpenCV", "AWS"]}
					caption="アプリ開発×ハッカソン"
					link="https://x.gd/vNG6q"
				></Card>
				<Card
					title="WithTra"
					detail="2023年8月9日~8月11日に開催されたベネッセ様のハッカソンに参加しました。課題は仮想通貨などの金融の基礎て手軽に学べるアプリを開発せよ！というもので、取引記録をシェアしあったりコメントを残したりできるSNS型webアプリを開発しました。このハッカソンは一人だけで出場し、デザインからフロントエンド、バックエンド、データベースの設計・実装を行いました。"
					image={card_WithTra}
					list={["React", "Python", "FastAPI", "Firebase"]}
					caption="アプリ開発×ハッカソン"
					link="https://docs.google.com/presentation/d/1KngBUVuZ-AzOyRDchVAww1JaHdVr1cSmPHIXQiYnp0s/edit?usp=sharing"
				></Card>
				<Card
					title="Sati8n"
					detail="2023年8月21日~8月25日に開催された楽天グループ様のハッカソンに参加しました。課題はフードロスを減らせるアプリを開発せよ！というもので、注文した料理に対して、食べきれるかを機械学習を使って予測し、動機をフィットネスと結び付けるwebアプリを開発しました。私は、リーダーとデザイン、フロントエンドを担当しました。"
					image={card_Sati8n}
					list={["React", "Python", "LightGBM", "PostgreSQL", "Firebase"]}
					caption="アプリ開発×ハッカソン"
					link="https://docs.google.com/presentation/d/1I3brB_ZJLNo5Nzd2am8oLvHlA_xLR1IeXBVuKB8QQ9k/edit?usp=sharing"
				></Card>
			</div>
		</section>
	);
};

export default Works;
