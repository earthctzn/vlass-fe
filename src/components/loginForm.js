import Form from 'react-bootstrap/Form'
import React from 'react'

export default function LoginForm() {
    <Form>
        <Form.Group controlId="formBasicUsername">
            <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
}


