import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Left from '../Left Side/Left';
import { AuthContext } from '../../../contexts/AuthProvider'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <div>
      <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div className='d-lg-none'>
              <Left></Left>
            </div>
          </Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button variant='light' onClick={handleLogOut}>Log Out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }
            </Nav.Link>
            <Nav.Link>{user?.photoURL? <Image className='me-2' roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUserAlt></FaUserAlt>}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
