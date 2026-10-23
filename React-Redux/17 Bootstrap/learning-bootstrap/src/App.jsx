import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <button type='button' className='btn btn-primary'>Primary</button>
      <button type='button' className='btn btn-secondary'>Secondary</button>
      <button type='button' className='btn btn-success'>Success</button>
      <button type='button' className='btn btn-danger'>Danger</button>
      <button type='button' className='btn btn-warning'>Warning</button>
      <button type='button' className='btn btn-info'>Info</button>
      <button type='button' className='btn btn-light'>Light</button>
      <button type='button' className='btn btn-dark'>Dark</button>
      <button type='button' className='btn btn-link'>Link</button>
    </div>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
    </>
  )
}

export default App;
