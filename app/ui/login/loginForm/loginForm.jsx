"use client"

import { authenticate } from "@/app/lib/actions"
import styles from "@/app/ui/login/loginForm/loginForm.module.css"
import { useFormState} from "react-dom"

const LoginForm = () => {
    
    const [state, formAction] = useFormState(authenticate, undefined)
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Login</h2>
                <form action={formAction}>
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <button type="submit">Entrar</button>
                    {state && state}
                </form>
            </div>
        </div>
    )
}

export default LoginForm