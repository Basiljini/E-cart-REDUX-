import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'
function Home() {
 const data= useFetch("https://dummyjson.com/products")
 const dispatch = useDispatch()
 console.log(data);
  return (
    <div style={{marginTop:'100px'}}>
    <Row  className='mt-5 mb-5 me-3 ms-5'>
    {
     data?.length>0? data.map((product,index)=>(
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
          <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light' variant="primary"><i className='fa-solid fa-heart text-success fa-2x'></i></Button>
          <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light' variant="primary"><i className='fa-solid fa-cart-plus text-success fa-2x'></i></Button>
  
       </div>      
       </Card.Body>
    </Card>

      </Col>
     )) : <p className='text-danger'>Nothing to Display</p>
  
    }
    </Row>
    </div>
  )
}

export default Home