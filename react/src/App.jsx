import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const videos = [
    <iframe width="560" height="315" src="https://www.youtube.com/embed/caDthE5Skqw?si=jgk3e-wOSbYZxmU7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PYHYK4D5ex8?si=jmzuXoVW9poW-8qm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TgI27FeJImY?si=TNirCohJOHsn9z4u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
  ]

  return (
    <>
      <div className='grid'>
        {videos.map(video => {
          return <div>{video}</div>
        })}
        <div className="txt">
        Made by Dhaas with❤️
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  )
}

export default App
