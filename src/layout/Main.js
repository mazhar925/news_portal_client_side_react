import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Left from '../Pages/Shared/Left Side/Left'
import Right from '../Pages/Shared/Right Side/Right'
import Header from '../Pages/Shared/Header/Header'
import Footer from '../Pages/Shared/Footer/Footer'

export default function Main() {
  return (
    <div>
        <Header></Header>   
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <Left></Left>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <Right></Right>
                    </Col>
                </Row>
            </Container>
        <Footer></Footer>
    </div>
  )
}
