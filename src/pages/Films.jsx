import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(e => alert(e.message));
    }, []);

    return (

        <div className="col-md-6">
            <h1 className="text-center">Studio Ghibli Films</h1>
            <ul className="list-group">
                {films.map(films => (
                    <li
                        key={`films-${films.id}`}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{films.title}</span>
                        <Link to={`/films/${films.id}`} className="btn btn-outline-primary">
                            Full Details
                        </Link>
                    </li>
                ))}

            </ul>

        </div>

    );
}

export default Films;