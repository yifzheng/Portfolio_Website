import './Topbar.scss'
import MailIcon from '@mui/icons-material/Mail';

const Topbar = ( { menuOpen, setMenuOpen } ) => {

  return (
    <div className={ `topbar ${menuOpen && 'active'}` } >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>yifzheng.</a>
          <div className={ `itemContainer ${menuOpen && 'active'}` }>
            <MailIcon className='icon' />
            <span className='email'>yifengzheng.nyc@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={ () => setMenuOpen( !menuOpen ) }>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Topbar