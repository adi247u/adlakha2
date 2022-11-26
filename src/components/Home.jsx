import React from 'react';
import {FiLinkedin, FiGithub, FiInstagram,} from 'react-icons/fi'
import {Fade} from 'react-reveal'
import { Flip } from 'react-reveal';
import { motion } from 'framer-motion'
import detail from '../details/expDetails';
import { BsCodeSlash } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md'
import { TbExternalLink } from 'react-icons/tb';
import tedx from '../components/images/tedx.jpeg'
import sixpm from '../components/images/sixpm.png'
import { IoIosRocket } from 'react-icons/io';
export default function Home() {
  return (
    <Fade left className="fixed">
      <div name='home' className='w-full h-screen bg-[#151515]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-9 flex flex-col justify-center h-screen'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          Hello,World !
        </h1>
        <br/>
        <br/>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
          I'm Aryan 
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>
            ML Enthusiast
        </h2>
        <p className='text-[#A5A5A7]  py-4 max-w-[700px]'>
        Computer Science Engineering Undergraduate from SRMIST, India. 
        <br/> 
        </p>
        <div className='flex'>
            <a href="https://github.com/AryanAdlakha" target="_blank"><FiGithub color="#ffffff" className='mr-3 my-5 h-5 w-5'/></a>
            <a href="https://www.linkedin.com/in/aryan-adlakha-305a04223/"><FiLinkedin color="#ffffff" className='mx-3 my-5 h-5 w-5'/></a>
            <a href="mailto:adi247u@gamil.com"><MdOutlineEmail color='#ffffff' className='mx-3 my-5 h-5 w-5'/></a>
        </div>
      </div>
      <div className='bg-[#151515] w-full flex flex-wrap justify-center'>
                  <Flip left>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.05 }}
                    className='h-72 sm:w-[350px] w-[325px] rounded-xl bg-[#242733] xl:m-5 m-3 p-5'>
                    <div className='flex justify-between my-2'>
                      <div className='flex items-center font-semibold text-sm text-[#ffffff]'><IoIosRocket className='text-[#ffffff] h-6 w-6 inline-block mr-2'/>College Club</div>
                      <a href="https://linktr.ee/tedxsrmist"><TbExternalLink className='h-6 w-6 text-[#ffffff]'/></a>
                    </div>
                    <div className='h-3/6'>
                      <div className='flex items-center my-5'>
                        <img className="h-10 w-10 rounded-xl" src={tedx}/>
                        <div className='text-xl font-semibold mx-2 text-[#ffffff]'>Tedx SRMIST</div>
                      </div>
                      <div className='text-[#ffffff]'>September 2022 - Present</div>
                      <div>
                        <ul>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                  </Flip>
                  <Flip left>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.05 }}
                    className='h-72 sm:w-[350px] w-[325px] rounded-xl bg-[#242733] xl:m-5 m-3 p-5'>
                    <div className='flex justify-between my-2'>
                      <div className='flex items-center font-semibold text-sm text-[#ffffff]'><IoIosRocket className='text-[#ffffff] h-6 w-6 inline-block mr-2'/>College Club</div>
                      <a href="https://linktr.ee/sixpmshow"><TbExternalLink className='h-6 w-6 text-[#ffffff]'/></a>
                    </div>
                    <div className='h-3/6'>
                      <div className='flex items-center my-5'>
                        <img className="h-10 w-10 rounded-xl" src={sixpm}/>
                        <div className='text-xl font-semibold mx-2 text-[#ffffff]'>The Six PM Show</div>
                      </div>
                      <div className='text-[#ffffff]'>September 2022 - Present</div>
                      <div>
                        <ul>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                  </Flip>
                  </div>
      </div>
    </Fade>
  )
}