import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from 'react';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);
    useTitle("Register")
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        form.reset();
        setError('');
        setSuccess('');

        if (password !== confirm) {
            setError('Your password did not match')
            return;
        }

        else if (password.length < 6) {
            setError('Password must be 6 characters longer')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // sendVerificationEmail(result.user);
                updateUserData(result.user, name, photo);
                setSuccess('User created successfully')
                console.log(createdUser);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // const sendVerificationEmail = (user) => {
    //     sendEmailVerification(user)
    //         .then(result => {
    //             console.log(result);
    //             alert('Please check your email to verify')
    //         })
    // }
    return (
        <Container className='w-25 mx-auto border border-2 border-secondary p-4 rounded'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicCheckbox">
                    <Form.Check

                        type="checkbox"
                        name="accept"
                        onClick={handleAccepted}
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                {
                    error && <Form.Text className="text-danger">
                        <span>{error}</span> <br />
                    </Form.Text>
                }
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                {
                    success && <Form.Text className="text-success">
                        <span>{success}</span><br />
                    </Form.Text>
                }
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link className='text-danger fw-bold' to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                </Form.Text>


            </Form>
        </Container>
    );
};

export default Register;