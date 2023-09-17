import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Campaign = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
    <div className=' gradient_color flex justify-center text-5xl font-bold pt-20 text-white'>
      Change The World Now!
    </div>
    
    <div id="campaign" className='grid grid-cols-3 px-[250px] gradient_color gap-x-32 py-20'>
       <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 , delay:0.5 }}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black  w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[450px]' src="https://discover.centurylink.com/wp-content/uploads/2020/11/1605739744948-1024x538.jpg" alt="" />
        <p className=' text-white py-2 font-bold text-xl'>Support Local Entreprenuers Campaign</p>
        <p className=' text-gray-300 py-1'>Promote economic development of small businesses in the community</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <a href="/Hello" className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Donate</a>
       </motion.div>
       <motion.div 
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 , delay:1 }}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[450px]' src="https://ehrintelligence.com/images/site/article_headers/_normal/medical-transportation.jpg" alt="" />
        <p className=' text-white py-2 font-bold text-xl'>Emergency Medical Campaign</p>
        <p className=' text-gray-300 pt-8'>Help financially disadvantaged individuals receive vital medical treatment</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <a href="/Hello" className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Donate</a>
       </motion.div>
       <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1, delay:1.5}}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[500px]' src="https://www.togofirst.com/media/k2/items/cache/7604d4faa278cdfa3366ff963adebcde_L.jpg" alt="" />
        <p className=' text-white py-2 font-bold text-xl'>Reforestation Campaign</p>
        <p className=' text-gray-300 pt-8'>Contribute to environmental conservation by planting trees</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <a href="/Hello" className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Donate</a>
       </motion.div>
    </div>
    </>
  )
}

export default Campaign
