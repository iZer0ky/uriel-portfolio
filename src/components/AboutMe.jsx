import "../styles/AboutMe.css"

const AboutMe = () => {
    return(
        <div>
            <h3>Sobre mí</h3>
            <p>
                ¡Buenas!
                <br />
                Me llamo Uriel, tengo 21 años, soy Técnico en Informática Personal y Profesional. Estudio Ingeniería en Informática y actualmente me enfoco en el desarrollo web, más específicamente en el área del Front End; aspirando a ser Full-Stack. 
                <br /> <br /> 
                Me gusta asegurar la buena calidad y funcionamiento de mis proyectos, estando dispuesto a rehacerlos en pos de un mejor producto. Utilizo aplicaciones como Figma para armar esquemas visuales que ayuden a poner en orden mis ideas, así como también para compartir mis ideas y diseños. Estaría encantado de intercambiar feedback respecto al código con mis compañeros de trabajo.
                <br /> <br /> 
                Mi meta es continuar expandiendo mis habilidades como programador mientras avanzo con mi carrera universitaria en Ingeniería en Informática. Mi objetivo principal es establecer una trayectoria profesional sólida, aprovechando cada experiencia para crecer tanto personal como profesionalmente.
            </p>

            <h4>Tecnologías que manejo</h4>
            <div id="techs">
                <ul> 
                    <li>
                        <img src="imgs/JavaScript.svg" className="logo-big"/>
                        JavaScript
                    </li>
                    <li>
                        <img src="imgs/React.svg" className="logo-big"/>
                        React
                    </li>
                    <li>
                        <img src="imgs/MongoDB.svg" className="logo-big"/>
                        MongoDB
                    </li>
                    <li>
                        <img src="imgs/NodeJS.svg" className="logo-big"/>
                        NodeJS
                    </li>
                    <li>
                        <img src="imgs/Git.svg" className="logo-big"/>
                        Git
                    </li>
                    <li>
                        <img src="imgs/Figma.svg" className="logo-big"/>
                        Figma
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default AboutMe;