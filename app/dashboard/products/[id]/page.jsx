import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noproduct.jpg" alt="" fill />
                    Alejo Gonzalez
                </div>
            </div>
            <div className={styles.formContainer}>
                <form action="">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Iphone 15 Pro Max" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$1500" />
                    <label>Created At</label>
                    <input type="text" name="createdAt" placeholder="14/08/2024" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="120" />
                    <label>Description</label>
                    <textarea type="text" name="Description" placeholder="	Lorem ipsum dolor sit, amet consectetur adipsicing elit." />
                
                    <button className={styles.saveButton} type="submit">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage