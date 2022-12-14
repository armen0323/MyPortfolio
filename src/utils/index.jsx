import usePreloader from "../hook";
import './style.scss'

function Loader(){
    const {loading} = usePreloader()
    return loading && (
        <div className='P-loading-block'>
            <div className="lds-ripple">
                <div className='P-lds-child'></div>
                <div className='P-lds-child'></div>
            </div>
        </div>
    )
 }
 export default Loader