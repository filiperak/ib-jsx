import { useState } from "react";

const Checkbox = () => {
    const [lang, setLang] = useState([
       { label: 'HTML', isChecked: true},
       { label: 'CSS', isChecked: true},
       { label: 'JS', isChecked: true},
       { label: 'React', isChecked: true}
    ])
    return (
        <div>
            {
                lang.map((lang, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" checked={lang.isChecked} />
                            {lang.label}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}
export default Checkbox;