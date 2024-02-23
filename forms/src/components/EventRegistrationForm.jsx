import { useState } from "react";

const EventRegistrationForm = () => {
    const [data,setData] = useState({
        name:'',
        email:'',
        phone:'',
        subscribe: false
    });
    const [formSubmitted,setFormSubmitted] = useState(false);
    const handleChange = (e) => {
        const {name,value,type,checked} = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    return (
        <form>
            <p>Enter name</p>
            <input type="text" name="text" value={data.name} onChange={handleChange}/>
            <p>Enter email</p>
            <input type="email" name="email" value={data.email} onChange={handleChange}/>
            <p>Enter phone number</p>
            <input type="number" name="number" value={data.phone} onChange={handleChange}/>
            <p>Subscribe</p>
            <input type="checkbox" name="checkbox" value={data.subscribe} onChange={handleChange}/>
        </form>
    );
};

export default EventRegistrationForm