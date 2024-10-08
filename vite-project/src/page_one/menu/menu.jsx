import line from '../../assets/line.png'
import menu from '../../assets/menu.png'
import cart from '../../assets/cart.png'
import '../menu/menu.css'
function Menu(){
    return(
        <>
                <section className='menu'>
            <div className='container-menu'>
                <div className='title-menu'>
                    <p>меню</p>
                    <img src={line} alt="" />
                </div>
                <div className='main-text-menu'>
                    <p>Меню</p>
                    <p>At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.
                    Nunc cras cras aliquet blandit faucibus massa sagittis semper. </p>
                </div>
            </div>
        </section>
        <section className='cards'>
            <div className='container-cards'>
                <div className='first-card'>
                    <img src={menu} alt="" />
                    <div className='title-first-card'>
                        <p>Основное меню</p>
                        <img src={line} alt="" />
                    </div>
                </div>
                <div className='second-card'>
                <img src={cart} alt="" />
                    <div className='title-second-card'>
                        <p>Барная карта</p>
                        <img src={line} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Menu