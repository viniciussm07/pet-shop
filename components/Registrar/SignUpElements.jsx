export const SignUp = () => {
    return (<>
        
        <form >
            <div class="container">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Informe o Email*" name="email" required/>

                <input type="password" placeholder="Informe a Senha*" name="psw" required/>

                <input type="password" placeholder="Informe a Senha novamente*" name="psw-repeat" required/>

                <div class="clearfix">
                    <button type="submit" class="signupbtn">Cadastrar</button>
                </div>
            </div>
        </form>
    </>)
}