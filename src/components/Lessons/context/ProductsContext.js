import { createContext, useState } from "react";
import List267 from "../List267";

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
  
const ProductsContext = () =>{
    const [list, setList] = useState(data)

    const store = createContext({
        addProduct: (data) => {
            setList([data,...list]); 
        }
    });
} 


export default ProductsContext;