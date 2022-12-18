import './style.scss';
import myImg from '../../assets/images/it.JPG'
function About(){
    return(
        <div className='P-about-block'>
            <div className='G-container P-about-container'>
                <div className='P-about-left'>
                    <h2 className="P-about-left-title">Hey</h2>
                    <p className="P-about-left-text" data-aos="fade-down-right" data-aos-duration="700">
                        My name is Rick. I'm a designer and developer from The Netherlands. I'm a father of 2. I love being in the outdoors; fishing, hiking and mountainbiking are some of the things I do to clear my mind and relax.
                    </p>
                    <p className="P-about-left-text2" data-aos="fade-right" data-aos-duration="700">I've been a designer and developer for over 20 years now. In the past, I’ve coded in a lot of different languages like ObjC, Swift, PHP, Java, C#. I’m currently focusing on designing 3D graphics using Cinema 4D and building applications using Javascript/React.
                    </p>
                    <p className="P-about-left-text2" data-aos="fade-up-right" data-aos-duration="700">The project I'm the most proud of is Flitsmeister, which started as an app I built with Sjoerd and Jorn to prevent us from getting speeding tickets. It's now a profitable business and has over 1.800.000 active users in The EU.
                    </p>
                    <p className="P-about-left-text2" data-aos="flip-up" data-aos-duration="700">Being able to both design and develop is a lot of fun. When you have an idea, there’s nothing holding you back from building it.
                    </p>
                </div>
                <div className="P-about-right">
                    <h2 className="P-about-right-title">Contact</h2>
                    <p className="P-about-right-contact">
                        You can follow me on Twitter.
                        I post some my work on Instagram and Dribbble.
                    </p>
                    <div className="P-about-right-img"  data-aos="flip-right" style={{backgroundImage:`url('${myImg}')`}}><div className="P-about-my-image"></div></div>
                    <p className="P-about-right-info"  data-aos="flip-left"
                       data-aos-easing="ease-out-cubic"
                       data-aos-duration="700">
                        If you want to work together you can also get in touch with me via email below.
                    </p>
                    <a href="mailto:armenmuradya06@gmail.com" className='P-about-email' data-aos="zoom-in">Send me an email</a>
                </div>
            </div>
        </div>
    )
}
export default About