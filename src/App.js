import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detailed from './pages/Detailed';
import FormEx from './examples/FormEx';
import FormYup from './examples/FormYup';

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/formex'}>Form Example</Link>
            </li>
            <li>
              <Link to={'/formyup'}>Form Example</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path={'/:location'} element={<Detailed />} />
          <Route path={'/formex'} element={<FormEx />} />
          <Route path={'/formyup'} element={<FormYup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
