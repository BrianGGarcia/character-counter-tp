import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

  const [lightTheme, setLightTheme] = useState(() => {
    return localStorage.getItem("theme") === "light"
  })

  useEffect(() => {
    document.documentElement.classList.toggle(
      "light-theme",
      lightTheme
    )

    localStorage.setItem(
      "theme",
      lightTheme ? "light" : "dark"
    )
  }, [lightTheme])

  const handleTheme = () => {
    setLightTheme((currentTheme) => !currentTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        lightTheme,
        handleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }