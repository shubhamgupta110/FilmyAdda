import { Routes , Route} from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Theatres from "./Theatres";
import Offers from "./Offers";
import Signup from "./Signup";
import Shows from "./Shows";
import OTPVerify from "./OTPVerify";
import Signin from "./Signin";
import About from "./About";
function AppRoutes(){
    return (
        <>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/Movies' element = {<Movies/>}/>
            <Route path = '/Theatres' element = {<Theatres/>}/>
            <Route path = '/Offers' element = {<Offers/>}/>
            <Route path = '/Signup' element = {<Signup/>}/>
             <Route path = '/Shows' element = {<Shows/>}/>
            <Route path = '/OTPVerify' element = {<OTPVerify/>}/>
            <Route path = '/Signin' element = {<Signin/>}/>
            <Route path = '/About' element = {<About/>}/>

            
            

    
        </Routes>
        </>
    )

}
export default AppRoutes;