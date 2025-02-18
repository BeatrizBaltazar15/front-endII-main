import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    
    
   
    

      <div className= {styles.home}>
        
        <h1 className={styles.h1}>Bem vindos 💕</h1>
        <p className={styles.text}>Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
         {/*<Image className={styles.img} src='/images/' alt=" " width={625} height={500} />*/}
         <button className={styles.buttonMedic}>Agende sua consulta</button>
        
      </div>

    
  );
}