import "./slide.scss"
const Slide = (props) => {
    return (
        <div className="slide">
            <div className="slide__content">
                <div className="slide__content-header header-slide">
                    <div className="header-slide__name">
                        <img src={(props.photo === "")? "/image/main/slider/no_photo.svg":props.photo} alt="" />{props.name}
                    </div>
                    <div className="header-slide__date">{props.date}</div>
                </div>
                <div className="slide__content-body">{props.comment}</div>
            </div>
        </div>
    )
}
export default Slide;