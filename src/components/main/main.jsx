import Aboutme from "./aboutme/aboutme";
import "./main.scss"

const Main = (props) => {
    return (
        <main className="main">
            <div className="container">
                <Aboutme />
            </div>
        </main>
    )
}
export default Main;