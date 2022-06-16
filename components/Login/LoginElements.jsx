export const LoginContainer = () => {
    return (
    <>
        <form method="post">
            <div class="container">
                <h1>Login</h1>
                <input type="email" placeholder="Email" name="email" required />

                <input type="password" placeholder="Senha" name="senha" required />

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Lembrar de mim
                </label>
            </div>

            <div class="container">
                <span class="psw"><a href="#">Esqueceu a senha?</a></span>
            </div>
        </form>

    </>)
}