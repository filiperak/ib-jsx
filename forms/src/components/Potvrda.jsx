import { useState } from "react";

const Potvrda = (props) => {
    return(
        <div>
            <h2>Potvrda o dolasku</h2>
            <p>info:</p>
            <p>name:{props.data.name}</p>
            <p>email:{props.data.email}</p>
            <p>phone num:{props.data.phone}</p>
            <p>ime:{props.data.subscribe ? 'subscribed':'not subscribed'}</p>
        </div>
    )
}
export default Potvrda;