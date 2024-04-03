import styles from "@/app/ui/login/login.module.css"

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Login</h2>
                <form action="">
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login