import Project from './Project';

const Portfolio = () => {
    return(
    <div id="projects" className="mx-5">
            <h3 className='my-3 text-2xl font-bold text-center'>Mis Proyectos Personales</h3>
            
            <div className="flex flex-col sm:flex-row">

                <Project 
                        name="El Bazar Arcoíris"
                        img="https://i.imgur.com/cs0yStT.png"
                        description="Un sitio de e-commerce que hice como proyecto para el curso de ReactJS de la UTN. Aquí pongo en práctica el uso de API REST utilizando la API de MercadoLibre para sacar todos los artículos de la tienda, y también empleo un sistema de Registro y Login que se almacena en una Base de Datos de Firebase."
                        source="https://github.com/iZer0ky/tienda-arcoiris"
                        page="https://izer0ky.github.io/tienda-arcoiris/"
                />

                <Project 
                        name="La Videoteca de Maka"
                        img="https://i.imgur.com/6yNKEuv.png"
                        description="Un sitio de reseñas de Películas y Series que hice como proyecto para el curso de NodeJS de la UTN. En este proyecto tuve que hacer un CRUD funcional, utilizando los Métodos HTTP y cuenta con un sistema de Registro y Login para acceder al Token de Autenticación. Todo está almacenado en una Base de Datos de MongoDB."
                        source="https://github.com/iZer0ky/videotica-de-maka"
                        page="https://videotica-de-maka.onrender.com"
                /> 

            </div>
    </div>
    );
}

export default Portfolio;