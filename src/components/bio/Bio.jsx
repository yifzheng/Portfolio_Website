import { useState } from "react"
import "./bio.scss"
import PortfolioList from "../portfolioList/portfolioList"
import portfolio from "../../assets/portfolio.jpg"
import resumeFile from "../../assets/ZhengYifengResume.pdf"
import resumeImg from "../../assets/resume.png"

const Bio = () => {
    const [ selected, setSelected ] = useState( "featured" )

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "resume",
            title: "Resume"
        }
    ]

    const Featured = () => {
        return (
            <div className="container">
                <div className="top">
                    <div className="left">
                        <img src={ portfolio } alt="" />
                    </div>
                    <div className="right">
                        <span className="paragraph">
                            Greetings, I&#39;m Yifeng. I&#39;ve recently completed my studies at Brooklyn College,
                            earning a Bachelor&#39;s Degree in Computer Science. During my time in academia,
                            I delved into the realm of computer science, crafting endeavors like Unity games, comprehensive web apps, mobile solutions, and more.
                        </span>
                        <br />
                        <span className="paragraph">
                            Currently, I hold one year of hands-on experience in professional programming,
                            gained through my internship at a startup where I gained insights into test-driven development, database administration, and agile approaches.
                            This is complemented by my extensive five-plus years of skillful management and organizational expertise.
                            This prowess originates from my role as a Chess Club Manager at the Marshall Chess Club, alongside my certification as a
                            chess tournament director certified by the United States Chess Federation.
                        </span>
                    </div>
                </div>
                <div className="mid">
                    <br />
                    <span className="paragraph">
                        At the moment, I&#39;m actively seeking opportunities in the realms of software engineering,
                        software development, and web development across different companies. In the interim period, I&#39;m dedicated to crafting personal projects,
                        some of which are showcased on this website. These undertakings serve as a means to enhance my programming acumen and familiarize
                        myself with emerging technologies, enabling me to adeptly incorporate them into my independent projects.
                    </span>
                </div>
            </div>
        )
    }

    const Resume = () => {
        return (
            <div className="container">
                <a href={ resumeFile } target="_blank" rel="noopener noreferrer">
                    <img src={ resumeImg } alt="PDF thumbnail" className="thumbnail" />
                </a>
            </div>
        )
    }

    return (
        <div className='bio' id='bio'>
            <h1>Biography</h1>
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
            { selected === 'featured' ? <Featured /> : <Resume /> }
        </div>
    )
}

export default Bio