import './style.scss';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
function Header(){
    return(
        <header className='P-header-block'>
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
        </header>
    )
}
export default Header