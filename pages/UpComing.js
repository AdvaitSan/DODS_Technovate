import React from 'react'
import Home from '../components/hero/Home';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UpcomingCamp = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
    });
  return (
    <div>
      <Home/>
      <div id='campaign' className='grid grid-cols-3 px-[230px] -ml-[70px] -mt-[300px] gradient_color gap-x-32 pb-10'>
      <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 , delay:0.5 }}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black  w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[450px]' src="https://ymhproject.org/wp-content/uploads/2017/04/YMHP-logo.jpg" alt="" />
        <p className=' text-white py-2 font-bold text-2xl'>The Young Mental Health Project</p>
        <p className=' text-gray-300 py-1'>Raise awareness and support for youth mental health issues</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <button className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Upcoming</button>
       </motion.div>
       <motion.div 
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 , delay:1 }}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[450px]' src="https://wellspringprevention.org/wp-content/uploads/sites/345/2022/01/large_senior-citizens.png" alt="" />
        <p className=' text-white py-2 font-bold text-2xl'>Senior Citizen Campaign</p>
        <p className=' text-gray-300 pt-8'>Provide assistance and companionship to elderly community members</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <button className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Upcoming</button>
       </motion.div>
       <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1, delay:1.5}}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[500px]' src="https://www.jotform.com/blog/wp-content/uploads/2019/09/How-to-Start-an-Animal-Rescue-featured.png" alt="" />
        <p className=' text-white py-2 font-bold text-xl'>Animal Shelter Campaign</p>
        <p className=' text-gray-300 pt-8'>Help provide a safe home for abandoned animals</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <button className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Upcoming</button>
       </motion.div>
       </div>
    </div>
  )
}

export default UpcomingCamp