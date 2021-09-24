import {createContext} from "react";

interface Auth{
    isLoggedIn:boolean;
    userId:number;
    token: number;
}
export const AuthContext = createContext({
    isLoggedIn: false,
    userId: false,
    token: false,
    login: () => {},
    logout: () => {}
});