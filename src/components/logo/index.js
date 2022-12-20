import './style.css'
import logo from '../../image/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong>Fotografias</strong> & edições</p>
        </div>
    )
}

export default Logo;