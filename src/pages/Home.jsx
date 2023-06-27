import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='row justify-content-center col-md-6 my-4'>
            <h1 className="text-center">Welcome to my Studio Ghibli Database</h1>
            <Link to="/Films" className='btn btn-primary my-2'><b>Films Page</b></Link>
            <Link to='/People' className='btn btn-info my-2'><b>People Page</b></Link>
            <img className='my-4' src="https://culturardotblog.files.wordpress.com/2022/04/20140816.ghiblia.webp?w=1500&h=768&crop=1" alt="" />
        <div className='border border-primary text-center'><b>Created by: Jesse Cammarano</b></div>
        </div>
    );
}

export default Home;