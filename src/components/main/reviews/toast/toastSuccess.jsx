import "./toastSuccess.scss"

const ToastSuccess = (props) => {
    return (
        <div className={props.active ? "toast-success active" : "toast-success"}>
           <div className="toast-success-item">
                <img src="/image/main/toast/successbubbles.svg" alt="" className="success-image" />
                <div className="toast-success-content content-success">
                    <div className="content-success__header">Успешно! <span className="icon-close" onClick={() => props.setActive(false)}></span></div>
                    <div className="content-success__body">Спасибо за отзыв о нашей компании :)</div>
                </div>
            </div>
        </div>
    )
}
export default ToastSuccess;