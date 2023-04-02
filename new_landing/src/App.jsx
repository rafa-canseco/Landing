import React from 'react'
import styles from './style';
import {Header, Navbar,Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer, Nav, Contact } from './components';



const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Header/>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
     
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
       </div>
    </div>


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Nav />
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