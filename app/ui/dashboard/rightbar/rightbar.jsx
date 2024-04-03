import Image from "next/image"
import styles from "./rightbar.module.css"
import { MdPlayCircleFilled } from "react-icons/md"

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Disponible Ahora</span>
                    <h3 className={styles.title}>Como usar la nueva versión de este software?</h3>
                    <span className={styles.subtitle}>Solo 5 minutos para aprender</span>
                    <p className={styles.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio a quae, ad eos neque cum? Culpa 
                    </p>
                    <button className={styles.button}> <MdPlayCircleFilled/>Mirar</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Proximamente</span>
                    <h3 className={styles.title}>Como usar la nueva versión de este software?</h3>
                    <span className={styles.subtitle}>Solo 5 minutos para aprender</span>
                    <p className={styles.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio a quae, ad eos neque cum? Culpa 
                    </p>
                    <button className={styles.button}> <MdPlayCircleFilled/>Mirar</button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar