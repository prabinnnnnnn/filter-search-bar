const Page = () => {

  return (
        <div className='w-full h-[90%] max-lg:h-[93%] max-md:[95%]'>
      <div className="body w-full h-full grid grid-rows-6 grid-cols-5 gap-4 p-4 max-md:grid-rows-6 max-md:grid-cols-2 max-md:h-full  max-md:gap-2 max-md:p-2 max-lg:grid-cols-3 max-lg:grid-rows-6 ">
        
        <div className="item1 row-span-6 rounded-lg overflow-hidden max-lg:row-span-4 max-md:row-span-2 scale-1 hover:scale-105 duration-200 ease-in-out">
          <img src="https://i.pinimg.com/564x/97/0c/c0/970cc0267659841742425af3f1553240.jpg" alt="" className='h-full w-full object-cover' />
        </div>
        <div className="item1 row-span-3 rounded-lg overflow-hidden max-lg:row-span-2 max-md:row-span-3 scale-1 hover:scale-105 duration-200 ease-in-out">
          <img src="https://i.pinimg.com/564x/1b/ae/52/1bae5237fed1582645a3f1ba86b4124a.jpg" alt="" className='h-full w-full object-cover' />
        </div>
        <div className="item1 row-span-6 rounded-lg overflow-hidden max-lg:row-span-2 max-md:row-span-2 scale-1 hover:scale-105 duration-200 ease-in-out">
          <img src="https://i.pinimg.com/564x/ed/f3/e4/edf3e4646a023dfe890ba4ea9552507f.jpg" alt="" className='h-full w-full object-cover object-left-top max-lg:object-center' />
        </div>
        <div className="item1 row-span-3 rounded-lg overflow-hidden max-lg:row-span-2 max-md:row-span-2 scale-1 hover:scale-105 duration-200 ease-in-out">
          <img src="https://i.pinimg.com/736x/e8/5a/e4/e85ae4d3363d6bac116b530af4f2d8ea.jpg" alt="" className='h-full w-full object-cover' />
        </div>
        <div className="item1 row-span-6 rounded-lg overflow-hidden max-lg:row-span-4 max-md:row-span-2 scale-1 hover:scale-105 duration-200 ease-in-out">
          <img src="https://i.pinimg.com/736x/e3/e0/f3/e3e0f3212ebb9ab97fea3e281d239b09.jpg" alt="" className='h-full w-full object-cover' />
        </div>
        <div className="item1 row-span-3 rounded-lg overflow-hidden  max-lg:row-span-2 max-md:row-span-2 scale-1 hover:scale-105 duration-200 ease-in-out">
          <img src="https://i.pinimg.com/564x/07/30/ee/0730eed94b1edaeb03d506ea7ff056f9.jpg" alt="" className='h-full w-full object-cover object-top max-lg:object-center' />
        </div>
        <div className="item1 row-span-3 rounded-lg overflow-hidden max-lg:row-span-2 max-md:row-span-1 scale-1 hover:scale-105 duration-200 ease-in-out">
          <img src="https://i.pinimg.com/564x/db/ea/b6/dbeab64a09e0157dc392aedaeb1e59d8.jpg" alt="" className='h-full w-full object-cover object-top max-lg:object-center' />
        </div>
      </div>
    </div>
  )
}


export default Page