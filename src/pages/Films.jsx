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
            <div className="d-flex justify-content-around mx-4">
            <Link to="/" className='btn btn-warning my-2'><b>Home Page</b></Link> 
            <Link to='/People' className='btn btn-info my-2'><b>People Page</b></Link>
            </div>
            <h1 className="text-center">~Studio Ghibli Films~</h1>
            <ul className="list-group">
                {films.map(films => (
                    <li
                        key={`films-${films.id}`}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        <span><h3>{films.title}</h3><h6>({films.release_date})</h6>{films.description}</span>

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