import "./footer.scss"

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container ">
                <div className="footer-body">
                    <div className="footer-row">
                        <div className="footer-row__copyrigh">© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
                        <div className="footer-row__social social-footer">
                            <a href="" className={"social-footer__icon"+ " "+ "icon-vk"}></a>
                            <a href="" className={"social-footer__icon"+ " "+ "icon-subtract"}></a>
                            <a href="" className={"social-footer__icon"+ " "+ "icon-telegram"}></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;