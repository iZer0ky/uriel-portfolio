
const Contact = () => {
    return(
            <footer className="bg-black">
                <div className="mx-5">
                    <ul id="contact-list" className="flex justify-around">
                        <li className="flex-row flex-auto">
                            <p>Mis redes</p>
                            <ul className="flex">
                                <li id="linked-in">
                                    <a href="https://www.linkedin.com/in/uriel-pasquale/" target="_blank">
                                        <img src="imgs/LinkedIn.svg" className="size-6"/>
                                    </a>
                                </li>
                                <li id="github">
                                    <a href="https://github.com/iZer0ky" target="_blank">
                                        <img src="imgs/GitHub.svg" className="size-6"/>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="flex-auto mx-5">
                            <p>Correo Electrónico</p>
                            <p>urielpasquale@gmail.com </p>
                        </li>
                        <li>
                            <p>Contacto Telefónico</p>
                            <p>+54 11 2178-1716</p>
                        </li>
                    </ul>
                </div>
            </footer>
    )
}

export default Contact;