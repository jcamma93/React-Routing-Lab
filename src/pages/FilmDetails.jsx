import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const FilmDetails = () => {
    const { filmsid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/films/${filmsid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [filmsid]);

    if (!details) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='col-md-6'>
            <div className='card shadow rounded my-4'>
                <div className='card-body'>
                    <h4 className='card-title'>{details.title}</h4>
                    <b>Directed by:</b> {details.director} <hr /> 
                    <b>Produced by:</b> {details.producer} <hr /> 
                    <b>Release in:</b> {details.release_date} <hr />
                    <b>Rotten Tomatoes Score:</b> {details.rt_score} <hr />
                    <h5><b>Synopsis:</b></h5>{details.description} <br />
                    <Link className='row justify-content-center' to="/films">Go Back</Link>
                </div>
            </div>
        </div>

    );
}

export default FilmDetails;