import React from 'react';
import './components-css/InputBox.css'

const InputBox = ({ label, name, type="text", placeholder="" }) =>{
    return(
        <div className="floating-label">
                <label className="form-label">{label}</label>
                <input className="form-field" placeholder={placeholder} type={type} name={name}/>
        </div>
    );
};

const SelectBox = ({ label, name, options }) => {
    return (
        <div className="floating-label">
            <label className="form-label">{label}</label>
            <select className="form-field" name={name}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};


const Checkbox = ({ label, name}) => {
    return (
        <div className="checkbox">
            <label>
                <input
                    type="checkbox"
                    name={name}
                    //onChange={onChange}
                />
                {label}
            </label>
        </div>
    );
};

export {InputBox, SelectBox, Checkbox};