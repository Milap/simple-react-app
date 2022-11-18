import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users/Users';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/users" element={<Users />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
