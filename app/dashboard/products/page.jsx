import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import styles from "@/app/ui/dashboard/products/products.module.css"

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Busca por un producto..."}/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Agregar Nuevo</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created at</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} />
                                Iphone 15 Pro Max
                            </div>
                        </td>
                        <td>Lorem ipsum dolor sit, amet consectetur adipsicing elit. </td>
                        <td>$1500</td>
                        <td>14/08/2024</td>
                        <td>120</td>
                        <td>
                        <div className={styles.buttons}>
                            <Link href="/dashboard/products/test">
                                <button className={`${styles.button} ${styles.view}`}>Ver</button>
                            </Link>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.delete}`}>Borrar</button>
                            </Link>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} />
                                Iphone 15 Pro Max
                            </div>
                        </td>
                        <td>Lorem ipsum dolor sit, amet consectetur adipsicing elit. </td>
                        <td>$1500</td>
                        <td>14/08/2024</td>
                        <td>120</td>
                        <td>
                        <div className={styles.buttons}>
                            <Link href="/dashboard/products/test">
                                <button className={`${styles.button} ${styles.view}`}>Ver</button>
                            </Link>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.delete}`}>Borrar</button>
                            </Link>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default ProductsPage