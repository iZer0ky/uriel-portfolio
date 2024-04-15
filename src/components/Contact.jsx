import "../styles/Contact.css";

const Contact = () => {
    return(
        <div id="contact-footer">
            <footer>
                <ul id="contact-list">
                    <li>
                        <p>Mis redes</p>
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
                        
                    </li>
                    <li>
                        <p>Correo Electrónico</p>
                        <p>urielpasquale@gmail.com </p>
                    </li>
                    <li>
                        <p>Contacto Telefónico</p>
                        <p>+54 11 2178-1716</p>
                    </li>
                </ul>
                
            </footer>
        </div>
    )
}

export default Contact;