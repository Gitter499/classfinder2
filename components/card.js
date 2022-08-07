import React from 'react'

const Card = ({ children, h, p}) => {
  return (
    <div className={`flex flex-col justify-center items-center mt-10 p-${p} bg-white rounded-2xl h-${h} w-full lg:w-[180%] drop-shadow-[8px_12px]  hover:drop-shadow-[10px_12px] duration-300  ring-4 ring-black`}>
        {children}
    </div>
  )
}

export default Card