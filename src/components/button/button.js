const Button =({content}) =>{
    return (
        <button className="bg-white/60 hover:bg-white rounded border-black bg-turq-600">
      <a className="transition-all duration-200 border-0 border-black px-3 py-3 mx-2  hover:bg-opacity-10 hover:rounded-lg  rounded-md  hover:font-medium hover:text-lg">
      {content}
      </a>
      </button>
    )
}
export default  Button;