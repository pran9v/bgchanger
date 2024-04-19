import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'


function App() {

  const [color, setColor] = useState('black')
  
  const changeColor = (colors) => {
    document.body.style.backgroundColor = colors 
  }
  
  useEffect(() => {
    changeColor(color)
  }, [color])
  return (
    <>
      <div>
        <div className="box"></div>
        <button className="color1" onClick={() => {
          setColor('black')
        }} >Black</button>
        <button className="color2" onClick={() => {
          setColor('white')
        }} >White</button>
        <button className="color3" onClick={() => {
          setColor('blue')
        }} >Blue</button>
        <button className="color4" onClick={() => {
          setColor('orange')
        }} >Orange</button>
      </div>
    </>
  )
}

export default App
