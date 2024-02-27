import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    return( 
            <>
            <h1>Page not found</h1>
            <button onClick ={() => navigate('/')}>Go home</button>
            </>
    )
};
export default PageNotFound;