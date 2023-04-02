import React from 'react'
import styles from './style';
import {Header, Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer, Nav, Contact } from './components';



const App = () => (
  <div className="bg-vaca w-full overflow-hidden">
    <Header/>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <Nav />
    
    </div>

    <div className={`bg-vaca ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
       </div>
    </div>


    <div className={`bg-vaca ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
        
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);


export default App