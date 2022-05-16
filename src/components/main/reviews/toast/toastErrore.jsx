import "./toastErrore.scss"

const ToastErrore = (props) => {
    return (
        <div className={props.active ? "toast-errore active" : "toast-errore"}>
            <div className="toast-errore-item">
                <img src="/image/main/toast/errorebubbles.svg" alt="" className="erorre-image" />
                <div className="toast-errore-content content-errore">
                    <div className="content-errore__header">Что-то не так... <span className="icon-close" onClick={() => props.setActive(false)}></span></div>
                    <div className="content-errore__body">Не получилось отправить отзыв. Попробуйте еще раз!</div>
                </div>
            </div>
        </div>
    )
}
export default ToastErrore;