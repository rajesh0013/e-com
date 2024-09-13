import React from 'react'
// import Cart from '../../assets/cart/Cart'
import Footer from '../footer/Footer'
import './Products.css'
import { Link } from 'react-router-dom'
import data from '../data/Data'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SecondNav from '../secondNav/SecondNav'
function Products({addTocart,dataProduct,onClick}) {
   
    
  return (
    <>
      <ToastContainer
  position="top-right"
  autoClose={1500}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light" 
/>
   
   <div className='products-Wrapper'>
 

  <div className='products-Container'>

      {
          dataProduct.map((item, index)=>{
              return(
                  <div key={index} className='products-Card'>
                      <div className='products-Card-Image'> 
                      <Link to={`/product-1/${item.id}`} state={{ product: item }} onClick={onClick}>
                             <img src={item.image} alt={item.name} />
              </Link>
                      </div>   
                      <div className='products-Card-Title'>
                <h3>{item.title}</h3>
                      </div>  
                      <div className="products-Card-Price">
                         <p className='products-Card-Price-Color'>price: <span> $ {item.price}</span></p>
                      </div>
                      <div className='products-Card-Btn'>
                           <button onClick={()=>addTocart(item)}>Add To Cart</button>
              </div>
            </div>
              )
        })
      }
  </div>
   
    </div>

</>
   

  )
}

export default Products