import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='col-md-6'>
            <h1 className="text-center">Welcome to my Studio Ghibli Database</h1>
            <Link to="Films" className='btn btn-primary'>Films Page</Link>
            <Link to='FilmDetails' className='btn btn-warning'>Film Details Page</Link>
            <Link to='People' className='btn btn-success'>People Page</Link>
            <Link to='PeopleDetails' className='btn btn-danger'>People Details Page</Link>
        </div>
    );
}

export default Home;