import React, {useState} from 'react'
import './ModalLogin.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const ModalLogin = ({ showModal, setShowModal }) => {

    const [valueName, setValueName] = useState('');
    const [showForm, setShowForm] = useState(false);

    const auth = () => {
        /* createUserWithEmailAndPassword(valueName) */
        console.log(valueName);
    }

    const handleChange = (event) => {
        setValueName(event.target.value);
    }


    return (
        <Modal show={showModal}>
            <Modal.Dialog>

                <Modal.Body className={showForm ? "formRegisterVisible" : "formRegisterNoVisible"}>
                    <Modal.Header onClick={() => setShowModal(false)} closeButton>
                        <Modal.Title>Registro</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={valueName} onChange= {handleChange} placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={auth} >
                            Enviar
                        </Button>
                    </Form>
                    <p onClick={() => {setShowForm(false)}}> Si ya estás registrado haz click aquí</p>
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
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={auth} >
                        Enviar
                        </Button>
                    </Form>
                    <p onClick={() => {setShowForm(true)}}> Si no estás registrado haz click aquí</p>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    )
}

export default ModalLogin
