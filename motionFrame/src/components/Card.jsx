import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data ,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className="relative flex-shrink-0 w-44 h-52 rounded-[40px] bg-zinc-900/90 text-white px-6 py-8 overflow-hidden">
      <div className="flex justify-between">
        <FaRegFileAlt />
        <img src= {data.imgUrl} alt="img" className="w-6 h-6 mt-[-0.25rem] rounded-[50%] mr-3 " draggable="false" />
      </div>
      <p className="text-xs leading-tight font-semibold mt-5">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-[2px] mb-[4px]">
          <h6>{data.filesize}</h6>
          <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
            <h3 className="text-xs font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
