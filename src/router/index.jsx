import Header from "../pages/header";
import Work from "../pages/work";
import {Route,Routes} from "react-router-dom";
import About from "../pages/about";
import Playground from "../pages/projects";
import Skills from "../pages/projects";
import MyProjects from "../pages/projects";
function Router(){
    return(
        <Routes>
     <Route exact path='/' element={<Work/>}/>
            <Route exact path='/skills' element={<MyProjects/>}/>
    <Route exact path='/about' element={<About/>}/>


        </Routes>

    )
}
export default Router