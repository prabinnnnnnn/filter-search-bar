import { IoIosAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const Card = ({ data }) => {
  return (
    <div className="hover:opacity-90 ease-linear duration-100 hover:scale-[1.02] relative flex  flex-col w-[100%] h-[350px] bg-stone-50 dark:bg-slate-400 overflow-hidden  rounded-md shadow-md p-2 max-md:h-[250px]">
      <div className="img h-[70%] w-full rounded-md overflow-hidden " >
        <img src={data.image} alt="" className=" h-full w-full object-cover object-center" />
      </div>
      <div className="div h-[30%] w-full flex flex-col justify-center gap-y-3 dark:text-white text-[14px] capitalize max-md:text-[10px]">
 
        <div className=' flex justify-between items-center'>
          <span>{data.productName }</span>
          <span>rs {data.price }</span>
        </div>
        
        <div className=' flex justify-between items-center'>
        <span className="text-gray-600 dark:text-white">{ data.color}</span>
        <div className="h-[32px] w-[32px] bg-green-200 rounded-full flex justify-center items-center max-md:h-[20px] max-md:w-[20px]">
          <IoIosAdd className="text-[20px] text-green-600"/>
        </div> 
       </div>  
      </div>
    </div>
  )
}

export default Card;
