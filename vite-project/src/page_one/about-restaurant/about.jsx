import '../about-restaurant/about.css'
import line from '../../assets/line.png'
function About(){
    return(
        <>
        <section className='about'>
            <div className='container-about'>
                <div className='title-about'>
                    <p>о ресторане</p>
                    <img src={line} alt="" />
                </div>
                <div className='main-text-about'>
                    <p>Food Exxe Relo</p>
                    <p>Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.
                    Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At.</p>
                </div>
            </div>
        </section>
        </>
    )
}
export default About