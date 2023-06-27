import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const PeopleDetails = () => {
    const { peopleid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [peopleid]);

    if (!details) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='col-md-6'>
            <div className='card shadow rounded my-4'>
                <div className='card-body'>
                    <h2 className='card-title'>{details.name}</h2> <br />
                    <b>Gender:</b> {details.gender} <hr />
                    <b>Age:</b> {details.age} <hr />
                    <b>Eye Color:</b> {details.eye_color} <hr />
                    <b>Hair Color:</b> {details.hair_color} <hr />
                    <Link className='row justify-content-center' to="/people">Go Back</Link>
                </div>
            </div>
        </div>

    );
}

export default PeopleDetails;