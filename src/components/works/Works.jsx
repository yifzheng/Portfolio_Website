import './Works.scss'
import Mobile from "../../assets/mobile-development.png"
import Web from "../../assets/web.png"
import PandaChat from "../../assets/landing.png"
import Left from "../../assets/left-arrow.png"
import Right from "../../assets/right-arrow.png"
import { useState } from 'react'

const Works = () => {
  const [ currentSlide, setCurrentSlide ] = useState( 0 )

  const data = [
    {
      id: "1",
      icon: Web,
      title: "Aestimogram",
      desc: 'A place where one can Rate, Post, and Discover captivating images of people in our community',
      img: "/src/assets/landing-page.png",
    },
    {
      id: "2",
      icon: Web,
      title: "Panda Chat",
      desc: 'A real-time chat application built using ReactJS and Firebase',
      img: PandaChat,
    },
    {
      id: "3",
      icon: Mobile,
      title: "Deer Diary",
      desc: 'An Android application developed using Android Studios and Java to digitalize the traditional diary and include more privacy and security',
      img: "/src/assets/deer_diary.png",
    },
  ]

  // checks and changes to different slide
  const handleClick = ( direction ) => {
    direction === 'left'
      ? setCurrentSlide( currentSlide > 0 ? currentSlide - 1 : 2 )
      : setCurrentSlide( currentSlide < data.length - 1 ? currentSlide + 1 : 0 )
  }

  return (
    <div className='works' id='works'>
      <div className="slider" style={ { transform: `translateX(-${currentSlide * 100}vw)` } }>
        { data.map( ( item ) => (
          <div className="container" key={ item.id }>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={ item.icon } alt="" />
                  </div>
                  <h2>{ item.title }</h2>
                  <p>{ item.desc }
                  </p>
                  <a href="https://github.com/yifzheng" style={ { textDecoration: "none", color: "black" } }><span>Projects</span></a>
                </div>
              </div>
              <div className="right">
                <img src={ item.img } alt="" />
              </div>
            </div>
          </div>
        ) ) }
      </div>
      <img src={ Left } className='arrow left' alt="" onClick={ () => handleClick( 'left' ) } />
      <img src={ Right } className='arrow right' alt="" onClick={ () => handleClick( 'right' ) } />
    </div>
  )
}

export default Works