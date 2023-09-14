import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Content ({ title }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{title}</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}
