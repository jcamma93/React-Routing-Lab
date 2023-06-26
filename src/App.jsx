import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films'
import FilmDetails from './pages/FilmDetails';
import People from './pages/People';
import PeopleDetails from './pages/PeopleDetails';

const App = () => {
    return (
        <BrowserRouter>
            <main className='container'>
                <section className='row justify-content-center'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/films' element={<Films />} />
                        <Route path='/films/:filmsid' element={<FilmDetails />} />
                        <Route path='/people' element={<People />} />
                        <Route path='/people/:peopleid' element={<PeopleDetails />} />
                        <Route path='*' element={<h1 className='text-danger'>404 Not Found</h1>} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;