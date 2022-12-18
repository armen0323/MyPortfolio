import './style.scss';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
function Header(){
    return(
        <header className='P-header-container-all'>
            <div className='P-work-left'>
                <div className="P-work-square"/>
                <div className="P-work-square"/>
                <div className="P-work-square"/>
                <div className="P-work-square"/>
                <div className="P-work-square"/>
                <div className="P-work-square"/>
                <div className="P-work-square"/>
            </div>
            <a className='P-home-contact-btn' href="mailto:armenmuradya06@gmail.com">
                <p className="P-massage-icon icon-mass"/>
                <p className="P-home-contact-icon">Contact me</p>
            </a>
        <div className='P-header-block'>

            <div className='P-header-container G-container'>
                <div className='P-header-Logos'>

                    <NavLink to='/'><div className='P-header-logo' style={{backgroundImage:`url('${logo}')`}}/></NavLink>

                </div>
                <ol className='P-header-Lists'>
                    <li className='P-header-list'><NavLink to='/projects'>Skills</NavLink> </li>
                    <li className='P-header-list'> <NavLink to='/skills'>MyProjects</NavLink> </li>
                    <li className='P-header-list'><NavLink to='/about'>About</NavLink> </li>
                </ol>
            </div>
        </div>
        </header>
    )
}
export default Header