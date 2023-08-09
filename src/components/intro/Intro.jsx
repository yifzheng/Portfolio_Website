import './Intro.scss'
import Profile from "../../assets/profile.png"
import DownArrow from "../../assets/down-arrow.png"
import { init } from "ityped"
import { useEffect, useRef } from 'react'

const Intro = () => {
  const textRef = useRef()

  useEffect( () => {
    init( textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60, 
      strings: [ "Engineer", "Developer" ],
    } )
  }, [] )

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src={ Profile } alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I&#39;m</h2>
          <h1>Yifeng Zheng</h1>
          <h3>Aspiring Software <span ref={ textRef }></span></h3>
        </div>
        <a href="#portfolio">
          <img src={ DownArrow } alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro