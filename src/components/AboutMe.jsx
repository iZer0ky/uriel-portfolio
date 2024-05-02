import Technology from "./Technology";

const AboutMe = () => {
    return(

        <div className="mx-5" id="about">
            <h3 className="mb-2 text-2xl font-bold text-center">Sobre mí</h3>
            <p className="text-lg mb-10">
                ¡Buenas!
                <br />
                Me llamo Uriel, tengo 21 años, y soy Técnico en Informática Personal y Profesional. Estudio Ingeniería en Informática y actualmente me enfoco en el desarrollo web, más específicamente en el área del Front End; aspirando a ser Full-Stack. 
                <br /> <br /> 
                Me gusta asegurar la buena calidad y funcionamiento de mis proyectos, estando dispuesto a rehacerlos en pos de un mejor producto. <br />
                Utilizo aplicaciones como Figma para armar esquemas visuales que ayuden a poner en orden mis ideas, así como también para compartir mis ideas y diseños. Estaría encantado de intercambiar feedback respecto al código con mis compañeros de trabajo.
                <br /> <br /> 
                Mi meta es continuar expandiendo mis habilidades como programador mientras avanzo con mi carrera universitaria en Ingeniería en Informática. <br />
                Mi objetivo principal es establecer una trayectoria profesional sólida, aprovechando cada experiencia para crecer tanto personal como profesionalmente.
            </p>

            <div id="techs" className="my-10">
            <h4 className="mb-5 text-center font-bold text-2xl">Tecnologías que manejo</h4>
                <ul className="grid grid-cols-2 sm:grid-flow-col sm:gap-4 sm:auto-cols-fr gap-3 w-full md:w-4/5 mx-auto">

                    <Technology 
                        name="JavaScript" 
                        img="imgs/JavaScript.svg"
                    />    

                    <Technology 
                        name="React" 
                        img="imgs/React.svg"
                    />    

                    <Technology 
                        name="MongoDB" 
                        img="imgs/MongoDB.svg"
                    />    

                    <Technology 
                        name="NodeJS" 
                        img="imgs/NodeJS.svg"
                    />    

                    <Technology 
                        name="Express" 
                        img="imgs/Express.svg"
                    />

                    <Technology
                        name="Tailwind"
                        img="imgs/Tailwind.svg"
                    />

                    <Technology 
                        name="Git" 
                        img="imgs/Git.svg"
                    />    

                    <Technology 
                        name="Figma" 
                        img="imgs/Figma.svg"
                    />    

                </ul>
            </div>

        </div>
    )
}

export default AboutMe;