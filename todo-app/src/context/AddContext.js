import { createContext, useState } from "react";

export const AddContext = createContext();
const AddContextProvider = ({children}) => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleClicked = () => {
        setIsClicked(!isClicked);
        console.log('test');
    }
    return(
        <AddContext.Provider value={{isClicked,toggleClicked}}>
            {children}
        </AddContext.Provider>
    );
};
export default AddContextProvider;