import '../styles/Menu.css'

const Menu = () => {
    return(
    <div className="menu-wrapper">
        <nav>
            <div className="logo-page">
                <h1>Uriel Pasquale</h1>
                <h2>Front-End Web Developer</h2>
            </div>
            <div className="navbar-content">
                <a href="#about" className='navbar-article'>Sobre mí</a>
                <a href="#projects" className='navbar-article'>Mis Proyectos</a>
                <a href="#contact-footer" className='navbar-article'>Contacto</a>
            </div>
        </nav>
    </div>
    );
}

export default Menu;