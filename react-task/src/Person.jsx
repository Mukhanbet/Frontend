import { useState } from 'react';

const Person = () => {
    const [message, setMessage] = useState("");
    const [position, setPosition] = useState("Junior Developer");

    const person = {
        name: "Nurmukhanbet Alaibek uulu",
        company: "O!",
        experience: "2 years",
        location: "Bishkek",
        hobby: "Play Basketball"
    };

    const promote = () => {
        setMessage("Position changed!");
        setPosition("Senior developer");
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Position: {position}</p>
            <p>Company: {person.company}</p>
            <p>Experience: {person.experience}</p>
            <p>Location: {person.location}</p>
            <p>Hobby: {person.hobby}</p>
            {message && <p>{message}</p>}
            <button onClick={promote}>Promote</button>

        </div>
    );
};

export default Person;
