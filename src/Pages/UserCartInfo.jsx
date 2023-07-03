import React from 'react'
import {FaCartArrowDown} from 'react-icons/fa'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import {addToCart} from './ProductPage'


export default function UserCartInfo({ addToCart }) {




  return (
    <>
    <div className='container-fluid mt-2  bg-light  '>
        <h3>My Cart   <FaCartArrowDown size={25} color={"black"}/></h3> <hr />
        </div>
        <div className="container-fluid ">
            <h3 className='d-flex justify-content-center semi-bold'>
              My Cart Details 
            </h3>
            <p className='text-secondary'>You have total <span>--</span>item/items in your cart.</p>
        </div>


<Card  className="mb-2">
        <Card.Body>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button variant="outline-dark" size="sm" >
                  -
                </Button>
                <span className="mx-2"></span>
                <Button variant="outline-dark" size="sm" >
                  +
                </Button>
              </Col>
              <Col>$</Col>
              <Col>
                <Button variant="danger" size="sm" >
                  Remove
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <Container>
    
      <div className="text-end">
        <p>Total Items:</p>
        <p>Total Price: </p>
        <Button variant="success">Checkout</Button>
      </div>
    </Container>
  
        </> 
  )
}
