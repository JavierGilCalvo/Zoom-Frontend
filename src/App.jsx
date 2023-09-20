import { useState, useEffect } from 'react'
import { Content } from './components/Content'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { getTextToShow } from './services/isBrowserZoom'

function App () {
  const [textToShow, setTextToShow] = useState('Vite + React')

  useEffect(() => {
    setTextToShow(getTextToShow())
  }, [])
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <Content title={textToShow} />
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
