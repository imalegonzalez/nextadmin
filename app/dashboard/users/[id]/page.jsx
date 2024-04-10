import { updateUser } from "@/app/lib/actions";
import { fetchSingleUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"


const SingleUserPage = async ({params}) => {
    const {id} = params;
    const user = await fetchSingleUser(id);
 
    console.log(user.id)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src={user.img || "/noavatar.png"} alt="" />
                    {user.username}
                </div>
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Alejo Gonzalez" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder={user.phone} />
                    <label>Address</label>
                    <textarea type="text" name="adress" placeholder={user.address} />
                    <div className={styles.selectWrapper}>
                        <div className={styles.selectDiv}>
                            <label>Es admin?</label>
                            <select name="isAdmin" id="isAdmin">
                                <option value={true} selected={user.isAdmin}>Si</option>
                                <option value={false} selected={!user.isAdmin}>No</option>
                            </select>
                        </div>
                        <div className={styles.selectDiv}>
                        <label>Esta activo?</label>
                        <select name="isActive" id="isActive">
                            <option value={true} selected={user.isActive}>Si</option>
                            <option value={false} selected={!user.isActive}>No</option>
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