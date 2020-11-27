import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return <Form className={'p-1'}>

        <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control value={username} onChange={v => setUsername(v.target.value)} />
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' value={password} onChange={v => setPassword(v.target.value)} />
        </Form.Group>

        <Button onClick={() => authenticate()} block>Login</Button>

    </Form>;
};

export default LoginForm;