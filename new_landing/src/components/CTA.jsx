import styles from "../style";
import Button from "./Button";

const CTA = () => (
   <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
  
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Lets Try our service now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis temporibus repellat, laudantium sit dolorum sint ipsum eum, aliquam eaque, id nobis suscipit? Voluptatibus quisquam deleniti eligendi atque repellendus rem ad.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
   </section>
  )


export default CTA