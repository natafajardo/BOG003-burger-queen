import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './ModalLogin.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import app from '../../firebase/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const ModalLogin = ({ showModal, setShowModal }) => {

    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })
    /* 
        const handleInputChange = (event) => {
            // console.log(event.target.name)
            console.log(event.target.value)
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        } */

    // const firebaseApp = app;
    const sendData = (e, emailUser, passwordUser, valueName) => {
        e.preventDefault();
        console.log("joan te amo 100", emailUser, passwordUser, valueName);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailUser, passwordUser)
            .then(async(userCredential) => {
                const user = userCredential.user;
                setShowModal(false);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                // ..
            });
    }



    const authenticator = () => {
        console.log(emailUser, passwordUser);
        console.log(datos);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailUser, passwordUser)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }


    return (
        /*         <div>
                <label htmlFor="email">Mail </label>
                <input type="email" name='email' id="email" onChange={(e) => setEmailUser(e.target.value)} /> <br />
                <label htmlFor="pass">Pass </label>
                <input type="password" name="pass" id="pass" onChange={(e) => setPasswordUser(e.target.value)} /> <br />
                <button type="button" onClick={authenticator}>Registrar usuario</button> */



        <Modal show={showModal}>
            <Modal.Dialog>

                <Modal.Body className={showForm ? "formRegisterVisible" : "formRegisterNoVisible"}>
                    <Modal.Header onClick={() => setShowModal(false)} closeButton>
                        <Modal.Title>Registro</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={valueName} onChange={(e) => { setValueName(e.target.value) }} placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" value={emailUser} onChange={(e) => { setEmailUser(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" onChange={(e) => { setPasswordUser(e.target.value) }} placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => { sendData(e, emailUser, passwordUser, valueName) }} >
                            Enviar
                        </Button>
                    </Form>
                    <p onClick={() => { setShowForm(false) }}> Si ya estás registrado haz click aquí</p>
                </Modal.Body>
                <Modal.Body className={showForm ? "formLoginNoVisible" : "formLoginVisible"}>
                    <Modal.Header onClick={() => setShowModal(false)} closeButton>
                        <Modal.Title>Ingreso</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" value={passwordUser} placeholder="Contraseña" />
                        </Form.Group>
                        <Link to="/tables">
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Link>
                    </Form>
                    <p onClick={() => { setShowForm(true) }}> Si no estás registrado haz click aquí</p>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    )
}

export default ModalLogin
