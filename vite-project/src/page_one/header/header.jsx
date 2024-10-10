import '../header/header.css'
import backroundheader from '../../assets/background-header.png'
import logo from '../../assets/logo.png'
import tg from '../../assets/tg.png'
import youtube from '../../assets/youtube.png'
import vk from '../../assets/vk.png'
import menuleft from '../../assets/menu-left.png'
import Modal from '../modal/Modal'
import { useState } from 'react'
function Header(){
    const [modalActive, setModalActive] = useState(true)
        return(
        <>
        <header>
            <div className={`left-menu ${modalActive ? 'hidden' : 'active'}`}>
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
                        <button className='open-btn' onClick={() => setModalActive(true)}>Бронь столика</button>
                    </div>
                </nav>
                <div className='bottom-text-header'>
                    <p>Видовой ресторан Food Exxe Relo на Крестовском острове</p>
                </div>
            </div>
        </header>
        <Modal active={modalActive} setActive={setModalActive}>
            <div className='modal-container'>
            <img src={logo} alt="" />
            <p>забронировать столик</p>
            
            <div className='top-inputs'>
                <input type="text" placeholder='Имя' />
                <input type="text" placeholder='Телефон' />
            </div>
            <div className='bottom-inputs'>
                <input type="number" placeholder='Гостей' />
                <input type="text" placeholder='Время' />
            </div>
            <button className='book'>Забронировать</button>
            </div>
        </Modal>
        </>
    )   
}
export default Header