import { useState } from "react";
import Potvrda from "./Potvrda";

const EventRegistrationForm = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        subscribe: false
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name.trim() && data.email.trim() && data.phone.trim()) {
            setFormSubmitted(true);
        }
    }
    const handleButton = () => {
        setFormSubmitted(false);
        setData({
            name: '',
            email: '',
            phone: '',
            subscribe: false
        })
    }
    

    return (<>
                <form onSubmit={handleSubmit}>
                <p>Enter name</p>
                <input type="text" name="name" value={data.name} onChange={handleChange} />
                <p>Enter email</p>
                <input type="email" name="email" value={data.email} onChange={handleChange} />
                <p>Enter phone number</p>
                <input type="number" name="phone" value={data.phone} onChange={handleChange} />
                <p>Subscribe</p>
                <input type="checkbox" name="subscribe" checked={data.subscribe} onChange={handleChange} />
                <input type="submit" value="Send" />
            </form>
            {formSubmitted ? (
                <>
                    <Potvrda data={data} />
                    <button onClick={handleButton}>Reset form</button>
                </>
            ) : null}
            
            </>
    );
};

export default EventRegistrationForm;
