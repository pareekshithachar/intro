import Card from '../card/card'
import './home.css'
import pp from '../../assets/images/pic.png'
import altpp from '../../assets/images/altpp.jpg'
import resume from '../../assets/paree-resume.pdf'
import Landing from '../landing-card/landing'
// import { useTypedText } from '../../hooks/useTypedText.js';
const Home =() =>{
    // const [typedText, showA, showAn] = useTypedText();
    return(
        <div className=" flex h-screen">
            <div className='m-auto'>

       <Landing text="HELLO" content ={["Know more","Download CV","#about",{resume}]} picture = {pp} altpicture ={altpp}/>
            </div>
       </div>
    )
}
export default Home;