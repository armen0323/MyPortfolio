import './style.scss';
import zay from '../../assets/images/zay.png'
function MyProjects(){
    return(
        <div className='P-skills-block'>
            <div className='G-container'>
                <div className='P-skills-container' data-aos="flip-left" data-aos-duration="700">
                    <h2 className="P-skills">Projects</h2>
                    <p className="P-skills-text">At the moment in the portfolio you can see the results of my test work on intensive HTML / CSS. JavaScript, as well as homemade layouts. Projects on React.js , TypeScript</p>
                </div>
                <div className="P-zay-shop">
                    <div className='P-zay-shop-img' data-aos="fade-right" data-aos-duration="700" style={{backgroundImage:`url('${zay}')`}}/>
                    <div className="P-zay-shop-container" data-aos="fade-left" data-aos-duration="700">
                        <h2 className="P-zay-shop-title">Zay Shop</h2>
                        <p className="P-zay-shop-text">This is an amazing website that has 6 separate pages in which a lot of functionality and logic are written in other things, see for yourself.</p>
                        <div className="P-zay-shop-logos">
                            <div className="P-react-logo icon-react"/>
                            <div className="P-sass-logo icon-sass"/>
                        </div>
                        <p className='P-zay-shop-git'>for download code and view please tap to button</p>
                        <button className='P-zay-shop-btn'>Go to git hub</button>
                        <p className="P-zayshop-web">Tap to img for open to link WEB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects