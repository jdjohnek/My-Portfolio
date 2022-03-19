import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from './Components/LandingPage/Landingpage'
import Header from './Components/Sidebar/Header'

function App() {
  return (
    <>
    <Router>
    <Header/>

    <div className="App">
      <main>
      <Routes>
        <Route 
        path='/'
        element={<Landingpage/>}
        />
      </Routes>
      </main>
    </div>
    </Router>
    </>
  );
}

export default App;
