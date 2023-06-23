import "../styles/overlay.scss";
import "../index.css";

const Overlay = () => {
    return (
        <div className="overlay">
            <h1 className="absolute bottom-20 right-10 font-bold text-2xl sm:text-6xl xl:text-9xl lg:text-6xl md:right-30 text-right">
                THE
                <br />
                CREATIVE
            </h1>
            <div className="absolute top-10 left-10 sm:text-sm md:text-lg md:left-30 font-medium">
                A DEV
                <br />
                UPDATED
            </div>
            <div className="absolute top-10 left-28 text-right sm:text-sm md:left-72 md:text-lg  font-medium">
                22/12/28
                <br />
                23/05/14
            </div>
            <div className="absolute bottom-20 left-10 sm:text-sm md:text-md lg:text-xl  md:left-30 font-medium">
                Kakeのポートフォリオサイト
                <br />
                経歴、制作物、スキルをまとめています
                <br />
                <br />
                <div
                    style={{
                        position: "relative",
                        marginTop: 10,
                        display: "inline-block",
                    }}
                >
                    <a
                        style={{ fontWeight: 600, letterSpacing: 1 }}
                        href="https://github.com/Melonps"
                    >
                        Thank you for coming!
                    </a>
                    <div
                        style={{
                            marginTop: 6,
                            height: 2.5,
                            width: "100%",
                            background: "#3e3e3d",
                        }}
                    />
                </div>
                <br />
            </div>
        </div>
    );
};
export default Overlay;
