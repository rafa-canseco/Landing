import {stats} from '../constants';
import styles from '../style';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';



const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="stats"  className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`} ref={ref} >
      <div  className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'></h4>
        {inView ? <CountUp start={0} end={35000} duration={3} /> :null} 
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>Clientes Satisfechos</p>
      </div>
      <div  className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'></h4>
        {inView ? <CountUp start={0} end={35} duration={3} /> : null} k+
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>pavos Satisfechos</p>
      </div>
      <div  className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'></h4>
        {inView ? <CountUp start={0} end={35121212000} duration={3} /> :null}
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>Orlandos Satisfechos</p>
      </div>
   
      

    </section>  
  )
    };


export default Stats