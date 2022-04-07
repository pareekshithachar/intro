const Button =({content,align}) =>{
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full scale-90" >
      <a className="transition-all duration-200 border-0 border-black mx-2  hover:bg-opacity-10 hover:rounded-lg  rounded-md  hover:font-medium hover:text-lg">
      {content}
      </a>
      </button>
    )
}
export default  Button;