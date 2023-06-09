import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import { fadeIn } from './variants';

const Hero = () => (
    <section id="home" className={`bg-vaca flex md:flex-row flex-col `}>
      <motion.div 
       variants={fadeIn('right',0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount: 0.3}} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72pix] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              The Next <br className='sm:block hidden'/>{" "}
              <span className='text-gradient'>
              </span><TypeAnimation cursor={false} className="type text-gradient" sequence={[
                'Developer',
                2000,
                'Method',
                2000,
                'Youtube',
                2000,
              ]} speed={50} 
              wrapper='span' repeat={Infinity}/>  {" "}
              
            </h1>
            

          </div>
          <h1 className='font-poppins font-semibold ss:text-[68pix] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full' >
            Payment Method.

          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id corrupti numquam est itaque autem maxime impedit, officia placeat, vel quibusdam! Dolorum molestiae cum tenetur debitis fuga illo nam odit.
          </p>
      </motion.div>

          <motion.div 
           variants={fadeIn('left',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount: 0.3}}
          className={`  flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
              <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
              <div className='absolute z-[1] w-[80%] h-[85%] rounded-full white__gradient'></div>
              <div className='absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient'></div>
          </motion.div>
          
        </section>
)


export default Hero