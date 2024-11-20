const Person = () => {
    const person = {
        name: "Nurmukhanbet Alaibek uulu",
        position: "Developer",
        company: "O!",
        experience: "2 years",
        location: "Bishkek",
        hobby: "Play Basketball"
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Position: {person.position}</p>
            <p>Company: {person.company}</p>
            <p>Experience: {person.experience}</p>
            <p>Location: {person.location}</p>
            <p>Hobby: {person.hobby}</p>
            <button>Press me</button>
        </div>
    );
};

export default Person;
