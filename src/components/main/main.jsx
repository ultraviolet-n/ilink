import Aboutme from "./aboutme/aboutme";
import "./main.scss"
import Reviews from "./reviews/reviews";

const Main = (props) => {
    return (
        <main className="main">
            <div className="container">
                <Aboutme />
                <Reviews />
            </div>
        </main>
    )
}
export default Main;