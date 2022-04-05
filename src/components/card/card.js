import pp from '../../assets/images/pic.png'
import Button from '../button/button.js'
const Card = ({text, title, picture,content }) =>{
  
    return(

    <div className="rounded overflow-hidden shadow-lg inline-flex " data-aos ='fade-up'>
    <img className=" w-1/4 md:w-1/2 mt-2 mb-2 ml-2 "  data-aos ='fade-up' src={pp} alt="My photo"/>
    <div className="mt-2 ml-2 align-middle">
      <h1 className="font-bold text-xl ">HELLO</h1>
      
      
      <h2>br</h2>
      <div className=''>

      <Button content={content}/>
      <Button content={content}/>
      </div>
    </div>
    
 
    
  
    
</div>
    )
}
export default Card;