import { useState } from 'react';
import { Navigate, Route, Routes , Switch } from 'react-router-dom';
import FormSubmission57 from './components/Lessons/FormSubmission57';
import List267 from './components/Lessons/List267';
import Home from './components/Lessons/Pages/Home';
import Products from './components/Lessons/Pages/Products';
import Show from './components/Lessons/products/Show';
import Nav from './components/Nav';

const App = () => {
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
  
  const [list, setList] = useState(data)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <Nav />
        </div>
        <div className='col-md-12'>
          <Routes>
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<List267 data={list}  />} />
              <Route path="/products/:id" element={<Show />} />
          </Routes>
        </div>  
      </div>  
    </div>
  );
}

export default App;
