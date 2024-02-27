import { Navigate } from "react-router-dom";

const PrivateRout = ({children, isLoggedIn, ...rest}) => {
    return isLoggedIn ? children : <Navigate to='/login' {...rest}/>
}
export default PrivateRout;