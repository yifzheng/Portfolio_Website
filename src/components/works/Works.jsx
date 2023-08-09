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
      title: "Web Design",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam quasi. Ad, deleniti! Pariatur dignissimos molestias quod consequuntur aliquid enim odio voluptatibus adipisci beatae, corrupti doloremque voluptate, possimus sit accusantium.',
      img: PandaChat,
    },
    {
      id: "2",
      icon: Mobile,
      title: "Mobile Application",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam quasi. Ad, deleniti! Pariatur dignissimos molestias quod consequuntur aliquid enim odio voluptatibus adipisci beatae, corrupti doloremque voluptate, possimus sit accusantium.',
      img: PandaChat,
    },
    {
      id: "3",
      icon: Mobile,
      title: "Featured",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quisquam quasi. Ad, deleniti! Pariatur dignissimos molestias quod consequuntur aliquid enim odio voluptatibus adipisci beatae, corrupti doloremque voluptate, possimus sit accusantium.',
      img: PandaChat,
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
                  <span>Projects</span>
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