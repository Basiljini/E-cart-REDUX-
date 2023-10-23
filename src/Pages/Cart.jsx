import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal]=useState(0)
  const navigate = useNavigate()
 const totalAmount = ()=>{
  if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2)) 
  }
  else{
    setTotal(0)
  }
  }

const checkOut=()=>{
alert("Order placed successfully...")
dispatch(emptyCart())
navigate('/')
}
useEffect(()=>{
  totalAmount()
},[cartArray])
  console.log(cartArray);
  return (
    <div style={{marginTop:'100px'}}>
      {
        cartArray.length>0?
       <>
          <div className='row ms-5 me-5'>
           <div className='col-md-8'>
              <table className=' mt-5 table border shadow rounded'>
                 <thead>
                   <tr>
                    <th>#</th>
                    <th>Produt Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                  {
                    cartArray.map((product,index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.title}</td>
                        <td><img src={product.thumbnail} width={'100px'} height={'100px'} alt="" /></td>
                        <td>${product.price}</td>
                        <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                      </tr>
                    ))
                  }
                 </tbody>
              </table>
           </div>
           <div className="col-md-1"></div>
            <div className='total col-lg-3 border rounded p-5 mt-5'>
            <h4 className='fw-bolder mt-5 text-primary'>Cart Summary</h4>
            <h5 className='mt-3'>Total Products : <span>{cartArray.length}</span></h5>
            <h3>Total : $<span>{total}</span></h3>
            <div className='d-grid mt-3'><button onClick={checkOut} className='btn btn-success rounded'>Check Out</button></div>
            </div>
          </div>
       </>
        :<p className='fw-bolder text-danger ms-5 mt-5 fs-1'>Your Cart is empty!</p>
      }
    </div>
  )
}

export default Cart