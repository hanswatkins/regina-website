import About from './About';
import Home from './Home';
import Studies from './Studies';
import Resume from './Resume';
import { Link, Route, Routes } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <header>
                <div className='element'>
                <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <li className='list-item-1'><Link to="/">HOME</Link></li> 
                        <li className='list-item-2'><Link to="/about">ABOUT</Link></li>
                        <li className='list-item-3'><Link to="/studies">STUDIES</Link></li>
                        <li className='list-item-4'><Link to="/resume">RESUME</Link></li>
                    </ul>

                    </nav>

                    </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/studies" element={<Studies />}/>
                <Route path="/resume" element={<Resume />}/>
            </Routes>

        </div>
    );
};

export default Header;