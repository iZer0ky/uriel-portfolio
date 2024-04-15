import "../styles/Contact.css";

const Contact = () => {
    return(
        <div id="contact-info">
            <footer>
                <ul>
                    <li id="linked-in">
                            <a href="https://www.linkedin.com/in/uriel-pasquale/" target="_blank">
                                <img src="imgs/LinkedIn.svg" className="logo"/>
                            </a>
                    </li>
                        <li id="github">
                            <a href="https://github.com/iZer0ky" target="_blank">
                                <img src="imgs/GitHub.svg" className="logo"/>
                            </a>
                        </li>
                </ul>

            </footer>
        </div>
    )
}

export default Contact;