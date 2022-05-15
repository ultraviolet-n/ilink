import "./header.scss"

const Header = (props) => {
    return (
        <header className="header">
            <div className="container ">
                <div className="header-body">
                    <div className="header-row">
                        <div className={"header-row__name"+" "+"header-name"}>
                            <img className="header-name__photo" src="/image/header/itsme.jpg" alt="" />
                            <div className="header-name__myname">Илья<span> Новиков</span></div>
                        </div>
                        <div className={"heder-row__logo"+" "+"header-logo"}>
                            <img className=" header-logo__logo" src="/image/header/logo.svg" alt="" />
                        </div>
                        <button className={"header-row__button"+" "+"header-button"}>
                            <img className=" header-button__profile" src="/image/header/profile.svg" alt="" />
                            <span className="header-button__text" >Панель управления</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;