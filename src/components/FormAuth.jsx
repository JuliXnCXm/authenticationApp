import React, { useContext } from 'react';
import { Form, Button , InputGroup, FormControl} from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import '../styles/FormAuth.css'


const FormAuth = ({setLogin}) => {

    const { handleSubmit, form , handleForm} = useAuth()

    return (
        <Form className="formContainer" onSubmit={(e) => {
            handleSubmit(e,setLogin)}}>
            <InputGroup className="mb-3 formContainer-email" controlId="formBasicEmail">
                <InputGroup.Text id="basic-addon1" className="icon">
                    <span class="material-icons material-icons-outlined">
                        email
                    </span>
                </InputGroup.Text>
                <FormControl type="email" name="email" value={form.email} placeholder="Enter email" onChange={handleForm}/>
            </InputGroup>
            <InputGroup className="mb-3 formContainer-password" controlId="formBasicPassword">
                <InputGroup.Text className="icon">
                    <span class="material-icons material-icons-outlined">
                        lock
                    </span>
                </InputGroup.Text>
                <Form.Control type="password" value={form.password} name="password" onChange={handleForm}  placeholder="Password" />
            </InputGroup>
            <Form.Group className="mb-3 formContainer-check" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remind me" />
            </Form.Group>
            {setLogin ?
                <Button size="lg" className="formContainer-button" variant="primary" type="submit"> Login
                </Button>
            :
                <Button size="lg" className="formContainer-button" variant="primary" type="submit"> Start coding now
                </Button>
            }
        </Form>
    )
};

export default FormAuth;
