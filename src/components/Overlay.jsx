import "../index.css";

const Overlay = () => {
	return (
		<div className="">
			<h1 className="md:right-30 xl:text-9xl absolute bottom-20 right-4 text-right text-4xl  font-bold leading-tight  sm:right-20 md:right-32 lg:text-6xl lg:leading-none">
				THE
				<br />
				CREATIVE
			</h1>
			<div className="md:text-md absolute left-4 top-10 text-sm font-medium  md:left-20 lg:left-32 lg:text-xl">
				A DEV
				<br />
				UPDATED
			</div>
			<div className="md:text-md absolute left-24 top-10 text-right text-sm font-medium sm:left-56 lg:left-64 lg:text-xl">
				22/12/28
				<br />
				23/05/14
			</div>
			<div className="md:text-md absolute bottom-20 left-4 text-sm font-medium  md:left-20 lg:left-32 lg:text-xl">
				Kakeのポートフォリオサイト
				<br />
				経歴、制作物、スキルをまとめています
				<br />
				<br />
				<div
					style={{
						position: "relative",
						marginTop: 10,
						display: "inline-block"
					}}
				>
					<a style={{ fontWeight: 600, letterSpacing: 1 }} href="https://github.com/Melonps">
						Thank you for coming!
					</a>
					<div
						style={{
							marginTop: 6,
							height: 2.5,
							width: "100%",
							background: "#3e3e3d"
						}}
					/>
				</div>
				<br />
			</div>
		</div>
	);
};
export default Overlay;
