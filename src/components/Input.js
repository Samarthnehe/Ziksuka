import React from 'react'
import {Form} from 'react-bootstrap';

export default function Input() {
    return (
        <div className="outer-form">
                <Form>
                <div className="form-block">
                    <div className="form-input first">
                    <Form.Group style={{marginBottom:"0px"}} controlId="formBasicEmail" >
                        <Form.Label>Username</Form.Label>
                        <Form.Control style={{border:"none",height:"0.5%"}} type="email"  />
                        
                    </Form.Group>
                    </div>
                    <div className="form-input" >
                    <Form.Group style={{marginBottom:"0px"}} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={{border:"none",height:"0.5%"}} type="password"  />
                    </Form.Group>
                    </div>
                </div>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check id="check"  label="Remember Login?" type="checkbox" />
                </Form.Group>
                </Form>
           
        </div>
        
    )
}
