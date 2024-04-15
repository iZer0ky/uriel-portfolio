import logoFolder from "../constants/logoFolder";


const AboutMe = () => {
    return(
        <div>
            <h3>Sobre mí</h3>
            <p>
            ¡Buenas!

            Me llamo Uriel, tengo 21 años, soy Técnico en Informática Personal y Profesional. Estudio el mundo del desarrollo web, más específicamente en el área del Front End, y aspiro a ser Full-Stack.

            Me gusta asegurar la buena calidad y funcionamiento de mis proyectos, estando dispuesto a rehacerlos en pos de un mejor producto. 

            Me gusta poner en orden mis ideas, haciendome un esquema visual en aplicaciones como Figma, también me ayuda a compartir mis ideas y diseños con mis compañeros.
            Estaría encantado de intercambiar feedback respecto al código con mis compañeros de trabajo.

            Mis objetivos son ampliar mis habilidades como desarrollador, mientras aporto con mis conocimientos a la empresa, y también deseo recibirme en la carrera de Ingeniería en Informática.
            </p>

            <h4>Tecnologías que manejo</h4>
            <div>
                <ul> 
                    <li>
                        <img src="imgs/JavaScript.svg" className="logo"/>
                        JavaScript
                    </li>
                    <li>
                        <img src={`${logoFolder}/React.svg`} className="logo"/>
                        React
                    </li>
                    <li>
                        <img src={`${logoFolder}/MongoDB.svg`} className="logo"/>
                        MongoDB
                    </li>
                    <li>
                        <img src={`${logoFolder}/NodeJS.svg`} className="logo"/>
                        NodeJS
                    </li>
                    <li>
                        <img src={`${logoFolder}/Git.svg`} className="logo"/>
                        Git
                    </li>
                    <li>
                        <img src={`${logoFolder}/Figma.svg`} className="logo"/>
                        Figma
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default AboutMe;