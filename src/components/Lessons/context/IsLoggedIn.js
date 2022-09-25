import { createContext } from "react";

const IsLoggedIn = createContext({
    IsLoggedIn : false,
    text: 'Hello'
});

export default IsLoggedIn;