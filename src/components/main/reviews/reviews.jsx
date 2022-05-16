import Modal from "./modal/modal";
import "./reviews.scss"
import React, { useState } from 'react';
import ToastSuccess from "./toast/toastSuccess";
import ToastErrore from "./toast/toastErrore";

const Reviews = (props) => {
    const [modalActive, setmodalActive] = useState(false)
    const [toastSuccessActive, settoastSuccessActive] = useState(false)
    const [toastErroreActive, sttoastErrorActive] = useState(false)
    const bodyscroll = () => {
        (modalActive === true)?document.body.style.overflow = "visible":document.body.style.overflow = "hidden"
    }
    return (
        <div className="reviews">
            <div className="container">
                <Modal active={modalActive} setActive={setmodalActive} setActiveSuccessToast={settoastSuccessActive} setActiveErroreToast={sttoastErrorActive} setScroll={bodyscroll} />
                <ToastSuccess active={toastSuccessActive} setActive={settoastSuccessActive} />
                <ToastErrore active={toastErroreActive} setActive={sttoastErrorActive} />
                <div className="reviews-content">
                    <h2 className="reviews-content__title">Отзывы</h2>
                    <button className="reviews-content__openbtn openbtn" onClick={() => {
                        setmodalActive(true);
                        bodyscroll();}}><span className="icon-add"></span><span className="openbtn-text">Добавить отзыв</span></button>
                </div>
            </div>
        </div>
    )
}
export default Reviews;