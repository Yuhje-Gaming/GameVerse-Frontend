import React from 'react'
import "../styles/NotFound.css";
import { motion } from "framer-motion"

const NotFound = () => {

  return (
    <div className='not-found'>
       <motion.h3 className="animate-text5"
          animate={{ x: [0, 100, -25],
          y: [0, 50, 0],
          opacity: 2, 
          scale: 1 
          }}
          transition={{
            duration: 10,
            delay: 0,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 1, scale: 0.5 }}
          whileHover={{ scale: 2 }}
        >
          ????? How you end up here?
        </motion.h3>
    </div>
  )

}

export default NotFound