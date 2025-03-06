import React, { createContext} from 'react'

function ThemeContext() {
    const ThemeContext = createContext('light');

  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContext