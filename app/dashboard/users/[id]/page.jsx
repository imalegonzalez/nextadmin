import { fetchSingleUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"


const SingleUserPage = async ({params}) => {
    const {id} = params;
    const user = await fetchSingleUser(id);
 

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src={user.img || "/noavatar.png"} alt="" fill/>
                    {user.username}
                </div>
            </div>
            <div className={styles.formContainer}>
                <form action="">
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Alejo@youarq.com" />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Alejo Gonzalez" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="54911238798" />
                    <label>Address</label>
                    <textarea type="text" name="adress" placeholder="Manuela Pedraza 5949, Villa Urquiza CABA" />
                    <div className={styles.selectWrapper}>
                        <div className={styles.selectDiv}>
                            <label>Es admin?</label>
                            <select name="isAdmin" id="isAdmin">
                                <option value={true}>Si</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <div className={styles.selectDiv}>
                        <label>Esta activo?</label>
                        <select name="isActive" id="isActive">
                            <option value={true}>Si</option>
                            <option value={false}>No</option>
                        </select>
                        </div>
                    </div>
                    <button className={styles.saveButton} type="submit">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage