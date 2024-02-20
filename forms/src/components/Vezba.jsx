// import { useState } from "react";

// const Vezba = () =>{
//     const [val,setVal] = useState({
//         ime:'',
//         email:'',
//         godeine:'',
//         pretplata:false,
//         pol:'',
//         poruka:''
//     });
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const name = e.target.name;
//         const value = e.target.value;
//         setVal(() => (
//             {[name]:value}
//         ))
//     }
//     return(
//         <form>
//             <p>ime</p>
//             <input type="text" value={val.ime} name='ime'  onChange={handleSubmit}/>
        
//             <p>email:</p>
//             <input type="email" value={val.email}/>
        
//             <p>godine:</p>
//             <input type="number" value={val.godeine}/>
        
//             <p>Pretplati se</p>
//             <input type="checkbox" value={val.pretplata}/>
        
//             <select name="pol" value={val.pol}>
//                 <option value="musko">musko</option>
//                 <option value="zensko">zensko</option>
//             </select>
        
//             <input type="text" name="text" value={val.text}/>
        
//             <input type="submit" value='Submit'/>
//         </form>
//     )
// }
// export default Vezba;

import { useState } from "react";

const Vezba = () => {
    const [person,setPerson] = useState({
        name:'',
        email:'',
        age:'',
        subscribe: false,
        gender:'',
        message:''
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(person);
    }
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setPerson(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    return(
        <div>
            <h1>Person:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={person.name} onChange={handleChange} />

                    <label>Email:</label>
                    <input type="text" name="email" value={person.email} onChange={handleChange} />

                    <label>Age:</label>
                    <input type="text" name="age" value={person.age} onChange={handleChange} />

                    <label>Subscribe:</label>
                    <input type="checkbox" name="subscribe" value={person.subscribe} onChange={handleChange} />

                    <label>Gender:</label>
                    <select name="gender">
                        <option value="male"></option>
                        <option value="female"></option>
                    </select>

                    <label>Name:</label>
                    <input type="text" name="message" value={person.message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Vezba;