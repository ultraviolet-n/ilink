import "./modal.scss"
import { useForm } from "react-hook-form"
import { useState } from "react";
const Modal = (props) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onChange" });

    const submit = (data) => {
        loadImage();
        alert(JSON.stringify(data));
        reset();
    };

    const toastTime = () => {
        props.setActiveSuccessToast(false);
        props.setActiveErroreToast(false);
    };

    const toastchek = () => {
        if (isValid) {
            props.setActiveSuccessToast(true);
            setTimeout(toastTime, 3000);
        }
        else if (!isValid) {
            props.setActiveErroreToast(true)
            setTimeout(toastTime, 3000);
        }
    };
    const [load, setload] = useState("Загрузить фото");

    const loadImage = () => (load === "Загрузить фото") ? setload("Фото добавлено") : setload("Загрузить фото");

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => { props.setActive(false); props.setScroll() }}>
            <div className={props.active ? "modal__card card active" : "modal__card card"} onClick={e => e.stopPropagation()}>
                <div className="card__header header-card">
                    <div>Отзыв</div>
                    <div className="header-card__close icon-close" onClick={() => { props.setActive(false); props.setScroll() }}></div>
                </div>
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <div className="card__body body-card">
                        <div className="body-card__title">Как вас зовут?</div>
                        <div className="body-card__name name">
                            <input className="name__name" placeholder="Имя Фамилия" {...register("name",
                                {
                                    required: "Поле обязательно к заполнению", minLength: {
                                        value: 5,
                                        message: "Минимум 5 символов"
                                    },
                                })} />

                            <label className="name__image" ><span className="icon-add"></span>{load}
                                <input className="name__image-loadfile" {...register("picture", {
                                    required: "Необходимо загрузить фото", onChange: (e) => { loadImage(); },
                                })} type="file" />
                            </label>
                        </div>
                        <div className="body-card__errore">
                            <div>{errors?.name && <p>{errors?.name?.message || "Ошибка"}</p>}</div>
                            <div>{errors?.picture && <p>{errors?.picture?.message || "Ошибка"}</p>}</div>
                        </div>
                        <div className="body-card__text body-text">
                            <div className="body-text__title">Все ли вам понравилось?</div>
                            <textarea placeholder="Напишите пару слов о вашем опыте..." className="body-text__text"  {...register("text", {
                                required: "Поле обязательно к заполнению",
                                minLength: {
                                    value: 20,
                                    message: "Минимум 20 символов"
                                },
                            })} type="text"></textarea>
                        </div>
                    </div>
                    <div className="body-card__errore">{errors?.text && <p>{errors?.text?.message || "Ошибка"}</p>}</div>
                    <div className="card__footer footer-card">
                        <button className="footer-card__btn" type="submit" onClick={() => toastchek()} >Отправить отзыв</button>
                        <div className="footer-card__text"> <img alt="Информация" src="/image/main/form/Infoform.svg" /> Все отзывы проходят модерацию в течение 2 часов</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Modal;