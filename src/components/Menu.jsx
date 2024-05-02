
const Menu = () => {
    return(
    <div className="sticky top-0 bg-black">
        <nav className='flex'>
            <div className="flex-auto font-bold">
                <h1 className='text-base sm:text-2xl'>Uriel Pasquale</h1>
                <h2 className='text-xs sm:text-base'>Front-End Web Developer</h2>
            </div>
            <div className="pr-5 place-self-center">
                <a href="#about" className="mx-2 hover:text-blue-500">Sobre mí</a>
                <a href="#projects" className="mx-2 hover:text-blue-500">Mis Proyectos</a>
                <a href="#contact-footer" className="mx-2 hover:text-blue-500">Contacto</a>
            </div>
        </nav>
    </div>
    );
}

export default Menu;