import {createContext} from "react";

interface ButtonContext {
    isPressed: boolean;
}

export const ToggleButton = createContext({
    isPressed:false,
    toggleButton: ()=>{}
})