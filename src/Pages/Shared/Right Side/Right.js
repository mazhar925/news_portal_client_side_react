import React, { useContext } from 'react'
import {Button, ButtonGroup, ListGroup} from 'react-bootstrap'
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import Brand from '../BrandCarousel/Brand';
import {AuthContext} from '../../../contexts/AuthProvider'
import { GoogleAuthProvider } from "firebase/auth";


export default function Right() {

const provider = new GoogleAuthProvider();

  const {providerLogin} = useContext(AuthContext)
  const handleGoogle = ()=>{
      providerLogin(provider)
      .then(result => console.log(result.user))
      .catch(error => console.error(error))
  }

  return (
    <div>
      <ButtonGroup vertical>
        <Button className='mb-2' variant='outline-primary' onClick={handleGoogle}><FaGoogle></FaGoogle> Log In with Google</Button>
        <Button variant='outline-dark'><FaGithub></FaGithub> Log In with Github</Button>
      </ButtonGroup>
      <div>
        <h5 className='my-2'>Find Us on</h5>
          <ListGroup>
            <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
          </ListGroup>
      </div>
      <div>
        <Brand></Brand>
      </div>
    </div>
  )
}
