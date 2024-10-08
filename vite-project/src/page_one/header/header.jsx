import '../header/header.css'
import backroundheader from '../../assets/background-header.png'
import logo from '../../assets/logo.png'
import tg from '../../assets/tg.png'
import youtube from '../../assets/youtube.png'
import vk from '../../assets/vk.png'
import menuleft from '../../assets/menu-left.png'
function Header(){
    return(
        <>
        <header>
            <div className='left-menu'>
                <div className='container-for-logo-burger'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='burger-menu'>
                        <img src={menuleft} alt="" />
                    </div>
                </div>
                <div className='socials'>
                    <img src={youtube} alt="" />
                    <img src={vk} alt="" />
                    <img src={tg} alt="" />
                </div>
            </div>
            <div className='main-header'>
                <nav>
                    <div className='nav-container'>
                        <a href="">Меню</a>
                        <a href="">Доставка</a>
                        <a href="">Оплата</a>
                        <button>Бронь столика</button>
                    </div>
                </nav>
                <div className='bottom-text-header'>
                    <p>Видовой ресторан Food Exxe Relo на Крестовском острове</p>
                </div>
            </div>
        </header>
        </>
    )   
}
export default Header