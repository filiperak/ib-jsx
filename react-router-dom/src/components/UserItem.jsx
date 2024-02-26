import { useParams, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext";
import { useContext ,useState , useEffect} from "react";

const UserItem = () => {
    const {userId} = useParams();
    const {users} = useContext(UserContext);
    const [user,setUser] = useState(undefined);

    useEffect(() => {
        const userE = users.find(user => user.id === parseInt(userId))
        setUser(userE)
    },[]);


    return( 
        <>
            <h1>User item {userId} </h1>
            {user? (
                <div>
                <p>name: {user.name}</p>
                <p>email: {user.email}</p>
                <p>website: {user.website}</p>
            </div>
            ):(<div>we can't find user</div>)
        }
            
        </>
    )
}
export default UserItem