import React from 'react'
import { Button, ThemeProvider } from 'react-bootstrap'
import "../src/Team.css" 
import { createContext,useState } from 'react'
import Formi from './Form'
import ReactSwitch from 'react-switch'
export const themeContext = createContext(null)


function App() {

  const [theme, settheme] = useState("light")
  
  const handlesubmit = () => {
    settheme((curr) => (curr === "light" ? "dark" : "light"))
  }

    ;

  return (
      <themeContext.Provider value={{theme, handlesubmit}
} >
      <div id={theme}  className='rat' >
      yes
        <Formi  />
      <br/>
      <div ><ReactSwitch onChange={handlesubmit} checked={theme ==="dark"} /></div>
      </div>
      </themeContext.Provider>
  
      )
  }

export default App
