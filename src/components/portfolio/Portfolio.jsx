import './Portfolio.scss'
import PortfolioList from '../portfolioList/portfolioList'
import { useState } from 'react'
import { featuredPortfolio, webPortfolio, mobilePortfolio } from '../../data'
import { useEffect } from 'react'

const Portfolio = () => {
  const [ selected, setSelected ] = useState( "featured" )
  const [ data, setData ] = useState( [] )

  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
  ]

  useEffect( () => {
    switch ( selected ) {
      case "featured":
        setData( featuredPortfolio )
        break;
      case "web":
        setData( webPortfolio )
        break;
      case "mobile":
        setData( mobilePortfolio )
        break;
      default:
        setData( featuredPortfolio )
        break;
    }
  }, [ selected ] )

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        { list.map( ( item ) => (
          <PortfolioList
            id={ item.id }
            title={ item.title }
            key={ item.id }
            active={ selected === item.id }
            setSelected={ setSelected } />
        ) ) }
      </ul>
      <div className="container">
        { data.map( ( item ) => (
          <div className="item" key={ item.id }>
            <img src={ item.img } alt="" />
            <h3>{ item.title }</h3>
          </div>
        ) ) }

      </div>
    </div>
  )
}

export default Portfolio