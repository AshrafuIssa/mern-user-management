import './App.css';
import RegisterUser from './Components/RegisterUser';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import Users from './Components/Users';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<HomePage/>}></Route>
        <Route path='/registerUser' element ={<RegisterUser/>}></Route>
        <Route path='/users' element ={<Users/>}></Route>
        <Route path='*' element ={<PageNotFound requestedUrl={window.location.href}/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
