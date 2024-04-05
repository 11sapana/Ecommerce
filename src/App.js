import logo from './logo.svg';
// import './App.css';
import { Routes, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import Productlisting from './container/Productlisting';
import Productdetails from './container/Productdetails';





function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact Component={Productlisting} />
            <Route path='/product/:productId' exact Component={Productdetails} />
            <Route>404 Not found</Route>

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
