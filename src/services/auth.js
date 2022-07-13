export const TOKEN_KEY = '&app-token';
export const ID_USER = '&id-user';
export const NOME_USER = '&nome-user';
export const USER_TYPE = '&user-type';
export const LOGGEDIN = '&isLoggedIn';

export const login = token => {localStorage.setItem(TOKEN_KEY, token);}
export const getToken = () => { return localStorage.getItem(TOKEN_KEY);}
export const logout = () => {localStorage.clear()}

export const setIdUser = id => {localStorage.setItem(ID_USER, id);}
export const getIdUser = () => {return localStorage.getItem(ID_USER);}

export const setIdName = name => {localStorage.setItem(NOME_USER, name);}
export const getIdName = () => {return localStorage.getItem(NOME_USER);}

export const setUserType = isAdmin => {
    let userType;
    if(isAdmin === true){ userType = 1;}
    else{userType = 2;}
    localStorage.setItem(USER_TYPE, userType);
}
export const getUserType = () => {return localStorage.getItem(USER_TYPE);}

export const setIsLoggedIn = (logged) => {localStorage.setItem(LOGGEDIN, logged);}
export const getIsLoggedIn = () => { return localStorage.getItem(LOGGEDIN);}

