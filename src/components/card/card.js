
import Button from '../button/button.js'
import {useState,setState } from 'react';


const Card = ({text, title, picture,altpicture,content }) =>{

  const [img ,setImg] = useState(picture);
  
    return(
      
    <div className="rounded overflow-hidden shadow-lg inline-flex hover:scale-105 duration-500 ">
    <img onMouseOver={()=>setImg(altpicture) } onMouseOut={()=>{setImg(picture)}}  className=" w-1/4 md:w-1/2 mt-2 mb-2 ml-2 hidden md:block  duration-500 rounded-[10%]" src={img == picture ? picture : altpicture} alt="My photo"/>
    
    <div className="text-left mt-2 ml-2">
      <h1 className=" font-bold text-sm md:text-xl al ">HELLO</h1>
      
      
      <h2 className=" text-base md:text-xl" >Boiler text moment boiler text moment, more boiler</h2>
      <h2>Boiler text moment boiler text moment</h2>

      <div className='inline-flex' >
      <a target="_blank" rel="noreferrer" href= {content[3]}> <Button content={content[0]}/></a>
      <a className=''><Button content={content[1]}/></a>
      
      </div>
    </div>
    
 
    
  
    
</div>
    )
}
export default Card;