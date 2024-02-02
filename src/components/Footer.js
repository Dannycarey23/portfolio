import "./Footer.css";

const Footer = () => {

    return (
        <div className="footerDiv">
            <div className="linksDiv">
                <a href="https://www.linkedin.com/in/danielcarey2023/">
                    <img src="./assets/logos/linkedin.svg" alt="LinkedIn" className="footerLogoLinks" />
                </a>
                <a href="https://github.com/Dannycarey23">
                    <img src="./assets/logos/github.svg" alt="Github" className="footerLogoLinks" />
                </a>
                <a href="mailto:me@myemail.com">
                    <img src="./assets/logos/gmail.svg" alt="Email" className="footerLogoLinks" />
                </a>
            </div>
        </div>
    )
}

export default Footer;