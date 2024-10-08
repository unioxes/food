import '../delivery/delivery.css'
import line from '../../assets/line.png'
function Delivery(){
    return(
        <>
            <section className='delivery'>
            <div className='container-delivery'>
                <div className='title-delivery'>
                    <p>доставка</p>
                    <img src={line} alt="" />
                </div>
                <div className='main-text-delivery'>
                    <p>Служба доставки</p>
                    <p>Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod sapien.</p>
                </div>
            </div>
            <div className='buttons-container'>
                <div className='main-container-buttons'>
                <button>Подробнее</button>
                <button>Условия доставки</button>
                </div>
            </div>
        </section>
        </>
    )
}
export default Delivery