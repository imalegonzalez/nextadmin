import { fetchUsers } from "@/app/lib/data"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"

const UsersPage = async ({searchParams}) => {

    const q = searchParams?.q || ""

    const users = await fetchUsers(q)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Busca por un usuario..."}/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Agregar Nuevo</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>(
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <img src={user.img || "/noavatar.png"} alt="" width={40} height={40} className={styles.userImage} />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4,16)}</td>
                            <td>{user.isAdmin? "Admin" : "User"}</td>
                            <td>{user.isActive? "Activo" : "Desactivado"}</td>
                            <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users/${user.username}`}>
                                    <button className={`${styles.button} ${styles.view}`}>Ver</button>
                                </Link>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.delete}`}>Borrar</button>
                                </Link>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default UsersPage