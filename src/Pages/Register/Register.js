import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider'

export default function Register() {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const [accept, setAccept] = useState(false)
    const handleRegister = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            updatePro(name, photo)
        })
        .catch(error => console.error(error))
        form.reset()

    }
    const updatePro =(name, photo)=>{
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error => console.error(error))
    }
    const acceptedHandle = event =>{
        const val = event.target.checked;
        setAccept(val)
    }
    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo Url" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onClick={acceptedHandle} label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accept}>
                Register
            </Button>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>
    )
}
