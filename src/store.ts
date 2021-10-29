import { createContext } from "react";

const initialState = {
    firstName: "Juna",
    lastName: "Djon"
}

const context = createContext<typeof initialState>(initialState);

export type UserState = typeof initialState
export default context;