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
                <span className='navbar-article'>Sobre mí</span>
                <span className='navbar-article'>Mis Proyectos</span>
                <span className='navbar-article'>Contacto</span>
            </div>
        </nav>
    </div>
    );
}

export default Menu;