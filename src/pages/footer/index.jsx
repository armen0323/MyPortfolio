import './style.scss';
import {NavLink} from "react-router-dom";

function Footer(){
    return(
        <footer className='P-footer-block'>
                <div className='G-container P-footer-container'>
                    <div className='P-footer-left'>
                        <h2 className='P-footer-title'>Get in touch</h2>
                        <p className='P-footer-text'>
                            If you want to work together on a project or just have a chat, please don't hesitate to contact me via email below.
                        </p>
                        <a href="mailto:armenmuradya06@gmail.com" className='P-footer-email'>Send me an email</a>

                    </div>
                    <div className='P-footer-right'>
                        <p className='P-footer-list P-first-list'><NavLink className='P-footer-navlink' to='/projects'>Skills</NavLink></p>
                        <p className='P-footer-list'><NavLink to='/skills' className='P-footer-navlink'>MyProjects</NavLink></p>
                        <p className='P-footer-list'><NavLink to='/about' className='P-footer-navlink'>About</NavLink></p>
                        <div className='P-footer-social'>
                            <a href="https://www.instagram.com/muradian___/" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo icon-instagram'/></a>
                            <a href="https://www.facebook.com/profile.php?id=100009908355724" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo icon-facebook'/></a>
                            <a href="https://github.com/muradyanx/" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo icon-github'/></a>

                            <a href="https://www.linkedin.com/in/armen-muradyan-64169423a/" target='_blank' className='P-footer-social-link'><span className='P-footer-social-logo icon-linkedin2'/></a>
                        </div>
                        <a className='P-footer-tel' href="tel:+37493219011"> Tel: +37493219011</a>
                    </div>
                </div>
        </footer>
    )
}
export default Footer