
import './App.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app)


function App() {
  /**============================================*/

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**--------------email--Handler------------------ */

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  /**--------------password--Handler---------------*/

  const handlePasswordBlur = event => {
    setPassword(event.target.value);


    /**-----------Submit-Button-handler------------- */
  }
  const handleFormSubmit = event => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
    event.preventDefault();


    /**============================================= */
  }
  return (
    <div >
      <div className="registration w-75 mx-auto mt-5 bg-gray p-2 rounded text-light">
        <h2 className='text-light text-center'> Registration Here</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-light">
              You are secured with us
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>

          <div className='button'>
            <Button className='mx-auto ' variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
