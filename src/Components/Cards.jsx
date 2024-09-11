import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({data , Reference}) {
 
  return (
    <motion.div drag dragConstraints={Reference} whileDrag={{scale:1.2}} dragElastic={0.2}  className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden">
        <FaFileAlt />
        <p className='text-ms mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer w-full absolute bottom-0 left-0'>
             <div className='py-3 px-8 flex justify-between items-center mb-3'>
                <h5>{data.size}</h5>
                <span className='w-7 h-7 cursor-pointer bg-zinc-600 rounded-[50%] flex items-center justify-center'>
                {data.close? <IoCloseOutline /> : <LuDownload className='text-white text-[.7em]' />}
                

                </span>
             </div>
             {data.tag.isOpen ? (
                <div className={`w-full ${data.tag.tagColor==="golden" ? "bg-blue-600" : "bg-green-600"} py-2 flex items-center justify-center`}>
                <h3 className='text-sm font-semibold cursor-pointer'>{data.tag.tagTitle}</h3>
             </div>
            ) : null}
             
        </div>
    </motion.div>
  )
}

export default Cards