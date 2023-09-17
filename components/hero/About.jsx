import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return ( 
    <>
    <div className=" gradient_color">
      <motion.p 
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 1 }}
      className=" text-white flex mt-[250px] justify-center relative">
       | The World
      </motion.p>
    </div>
    <div className="flex text-xl  justify-center text-white py-10 px-3 gradient_color font-serif">
      
        <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
        className="text-white px-10 text-center font-semibold" 
        >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quasi
        necessitatibus, itaque dolorem minus qui laudantium provident, dolor
        quia harum dignissimos nihil adipisci assumenda vitae numquam odio
        voluptatem, nesciunt eligendi quis impedit aperiam veniam facilis?
        Explicabo earum fuga consequuntur quia. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Optio minus beatae quidem, dolore, dicta
        commodi possimus magnam ullam est hic obcaecati dolor doloribus eveniet
        accusamus fugit laborum. Dolor, voluptate explicabo maiores dolorum,
        rerum esse ab temporibus quia ullam debitis laborum?
        </motion.p>
    </div>
    </>
  );
};

export default About;
