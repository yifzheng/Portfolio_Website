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
          <div className="socialContainer">
            <a href="https://www.facebook.com/yifeng.zheng.75/"><img src="/src/assets/facebook.png" alt="" /></a>
            <a href="https://www.instagram.com/yifeng.jpg/"><img src="/src/assets/instagram.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/yifeng-zheng-247173142/"><img src="/src/assets/linkedin.png" alt="" /></a>
            <a href="https://github.com/yifzheng"><img src="/src/assets/github.png" alt="" /></a>
          </div>
        </div>
        <a className="portfolioLink" href="#portfolio">
          <img src={ DownArrow } alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro