import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const People = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(e => alert(e.message));
    }, []);

    return (

        <div className="col-md-6">
            <h1 className="text-center">Studio Ghibli Characters</h1>
            <ul className="list-group">
                {people.map(people => (
                    <li
                        key={`people-${people.id}`}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{people.name}</span>
                        <Link to={`/people/${people.id}`} className="btn btn-outline-primary">
                            Full Details
                        </Link>
                    </li>
                ))}

            </ul>

        </div>

    );
}

export default People;