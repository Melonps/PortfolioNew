import Model from "./components/Model";
import Overlay from "./components/Overlay";
import About from "./views/About";
import Skills from "./views/Skills";
import Works from "./views/Works";
import Footer from "./components/Footer";
import Experience from "./views/Experience";

import "./app.scss";
import "./index.css";
import "./input.css";

const App = () => {
    return (
        <div className="App">
            <section className="Hero">
                <div
                    className="background"
                    style={{ width: "100%", height: "100vh" }}
                >
                    <Model />
                </div>
                <Overlay />
            </section>
            <About />
            <Skills />
            <Works />
            <Experience />
            <Footer />
        </div>
    );
};
export default App;
