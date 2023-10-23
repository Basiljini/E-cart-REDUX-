import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col,Button,Card } from 'react-bootstrap';
import { deleteFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
 const wishlistArray = useSelector((state)=>state.wishlistReducer);
  console.log(wishlistArray);
 const dispatch = useDispatch()
 const addTocartFromWishlist=(product)=>{
  dispatch(addToCart(product))
  dispatch(deleteFromWishlist(product.id))
 }
  return (
    <div style={{marginTop:'100px',overflowX:'hidden'}}>
      <Row className='mb-5 ms-5'>
      {
     wishlistArray?.length>0? wishlistArray.map((product,index)=>(
      <Col key={index} className='mb-3' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem',height:"29rem" }}>
      <Card.Img style={{height:'250px'}} variant="top" src={product?.thumbnail}/>
      <Card.Body>
        <Card.Title className='fw-bold text-success' >{product?.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          <p>{product?.description.slice(0,50)}...</p>
          <p className='fw-bolder'style={{color:'black'}}>${product?.price}</p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(deleteFromWishlist(product.id))} className='btn btn-light' variant="primary"><i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
          <Button onClick={()=>addTocartFromWishlist(product)} className='btn btn-light' variant="primary"><i className='fa-solid fa-cart-plus text-success fa-2x'></i></Button>
  
       </div>      
       </Card.Body>
    </Card>

      </Col>
     )) : <p className='text-danger fs-1'>Your wishlist is empty!!</p>
  
    }

      </Row>
    </div>
  )
}

export default Wishlist