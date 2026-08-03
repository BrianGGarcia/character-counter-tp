import logo from "../assets/logo.png"
import themeButton from "../assets/theme-button.png"

const Header = ({ dark, handleDarkTheme }) => {

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Imagen del logo principal" />
                <h1>Contador de Caracteres</h1>
            </div>
            <button onClick={() => handleDarkTheme(!dark)} className="theme-button">
                <img src={themeButton} alt="Imagen para cambiar de theme" />
            </button>
        </header>
    )
}

export { Header }