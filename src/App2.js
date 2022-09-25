import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Todos from './components/Todos';
import Pages from './pages/Pages';
import MainNavigation from './components/layouts/MainNavigation';
import Button from './components/Button';
import Lists from './components/Lessons/List';
import Lists267 from './components/Lessons/List267';
import FormSubmission57 from './components/Lessons/FormSubmission57';

let data = [
  {
    id: 1,
    name: 'Camera',
    desc: 'Camera desc',
    price: 150
  },
  {
    id: 2,
    name: 'Samsung',
    desc: 'Samsung desc',
    price: 100
  },
  {
    id: 3,
    name: 'Huawei',
    desc: 'Huawei desc',
    price: 200
  },
]

function App2() {
  const [list, setList] = useState(data)

  const addItemHandler = (item) => {
      setList((prevList) => {
          return [item, ...prevList]
      })
  }
 
  return (
    <div className='container-lg'>
      <div className='row'>
          <div className='col-lg-12'>
            {/* <FormSubmission57 onAddItem={addItemHandler} /> */}
            dwefwe
          </div>
          <div className='col-lg-12'>
            {/* <Lists267 data={list}   /> */}
          </div>
      </div>
    </div>
  );
}

export default App2;
