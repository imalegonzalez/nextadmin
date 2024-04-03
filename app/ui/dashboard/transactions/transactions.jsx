import Image from "next/image"
import styles from "./transactions.module.css"

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Ultimas Transacciones</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Estado</td>
                        <td>Fecha</td>
                        <td>Cantidad</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image 
                                src="/noavatar.png"
                                alt="" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            Alejo Gonzalez
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pendiente</span>
                        </td>
                        <td>14/08/1994</td>
                        <td>$5000</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image 
                                src="/noavatar.png"
                                alt="" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            Alejo Gonzalez
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelado</span>
                        </td>
                        <td>14/08/1994</td>
                        <td>$5000</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image 
                                src="/noavatar.png"
                                alt="" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            Alejo Gonzalez
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.approved}`}>Confirmado</span>
                        </td>
                        <td>14/08/1994</td>
                        <td>$5000</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image 
                                src="/noavatar.png"
                                alt="" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            Alejo Gonzalez
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pendiente</span>
                        </td>
                        <td>14/08/1994</td>
                        <td>$5000</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image 
                                src="/noavatar.png"
                                alt="" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            Alejo Gonzalez
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.approved}`}>Confirmado</span>
                        </td>
                        <td>14/08/1994</td>
                        <td>$5000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions