import "./aboutme.scss"

const Aboutme = (props) => {
    return (
        <div className="aboutme">
            <div className="aboutme-body">
                <h1 className="aboutme-logo">Добро пожаловать в академию!</h1>
                <div className={"aboutme-card" + " " + "card"}>
                    <div className="card-photo">
                        <img className="card-photo__i" src="/image/main/i.jpg" alt="" />
                    </div>
                    <div className="card-content">
                        <div className="card-header">
                            <div className="card-header__name">Илья Новиков</div>
                            <div className="card-header__date">18.12.1997</div>
                        </div>
                        <div className="card-body">
                            <div className={"card-body__info-row" + " " + "info-row"}>
                                <div className="info-row__item"><span>Город:</span>Томск</div>
                                <div className="info-row__item"><span>Пол:</span>Мужчина <span className="icon-male"></span></div>
                                <div className="info-row__item"><span>Возраст:</span>24</div>
                            </div>
                            <div className="card-body__info-me">
                                <p><span>О себе:</span>И снова здравствуйте! Меня зовут Илья, подтянул навыки в React’e и вернулся, чтобы на этот раз обязательо поступить. Мне 24 года, учусь в институте на специальность «Информационные системы и технологии». Поставил себе цель стать отличным Frontend разработчиком. Было бы очень круто попасть к вам на стажировку. А еще я очень веселый, коммуникабельный, и у меня есть большой кот, ну прям очень большой. Если интересно, пригласите меня на собеседования, и я покажу вам фотографию БОЛЬШОГО кота.</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <span className="icon-dog-food"></span><span>Домашнее животное:</span> есть кот гигант
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutme;