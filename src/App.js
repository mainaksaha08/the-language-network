import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path='/' element={} />*/}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;