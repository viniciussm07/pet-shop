export const TOKEN_KEY = '&app-token';
export const ID_USER = '&id-user';
export const NOME_USER = '&nome-user';
export const USER_TYPE = '&user-type';

export const login = token => {localStorage.setItem(TOKEN_KEY, token);}
export const logout = () => {localStorage.clear()}

export const setIdUser = id => {localStorage.setItem(ID_USER, id);}
export const getIdUser = () => { localStorage.getItem(ID_USER);}

export const setIdName = nome => {localStorage.setItem(NOME_USER, nome);}
export const getIdName = () => { localStorage.getItem(NOME_USER);}