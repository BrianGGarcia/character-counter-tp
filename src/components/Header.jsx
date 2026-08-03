import logo from "../assets/logo.png"
import themeButton from "../assets/theme-button.png"

const Header = ({ lightTheme, handleTheme }) => {
    return (
        <header>
            <div className="logo">
                <img
                    src={logo}
                    alt="Imagen del logo principal"
                />

                <h1>Contador de Caracteres</h1>
            </div>

            <button
                type="button"
                onClick={handleTheme}
                className="theme-button"
                aria-label={lightTheme ? "Activar tema oscuro" : "Activar tema claro"}
            >
                <img
                    src={themeButton}
                    alt="Imagen para cambiar de theme"
                />
            </button>
        </header>
    )
}

export { Header }