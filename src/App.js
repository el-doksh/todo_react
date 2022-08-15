import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Todos from './components/Todos';
import Pages from './pages/Pages';
import MainNavigation from './components/layouts/MainNavigation';
import Button from './components/Button';

function App() {
  return (

    <div className='container-lg'>
      <div className='row'>
        <div className='col-lg-12'>
            <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
