import React, {useState} from 'react';

const NewUserForm = ({dispatchNewUser}) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleNameChange = (changeEvent) => {
        const newName = changeEvent.target.value;
        setName(newName);
        handleChange(newName, address);
    }

    const handleAddressChange = (changeEvent) => {
        const newAddress = changeEvent.target.value;
        setAddress(newAddress);
        handleChange(name, newAddress);
    }

    const handleChange = (name, address) => {
        dispatchNewUser({type: "NEW_USER", newUser: [{key: "Name", value: name}, {key: "Address", value: address}]})
    }

    return (<>
        <label className="form">
            Name
        </label>
        <input className="form" type="text" onChange={handleNameChange} value={name}/><br/>
        <label className="form">
            Address
        </label>
        <input className="form" type="text" onChange={handleAddressChange} value={address}/>
    </>);
}

export default NewUserForm;