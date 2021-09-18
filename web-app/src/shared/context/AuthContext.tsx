import {createContext} from "react";

interface Auth{
    isLoggedIn:boolean;
}
export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});