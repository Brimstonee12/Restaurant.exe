import React, {Component} from 'react'
import '../App.css'
import {Container,Form,Button} from 'react-bootstrap'

export default class TableForm extends React.Component {

render(){
  return(
    <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label className="form-titles">Email address</Form.Label>
      <Form.Control onChange={this.props.handlechange} type="email" placeholder="name@example.com" value={this.props.ValueEmail} />
    </Form.Group>
    <Form.Group>
      <Form.Label className="form-titles">Choosed Tables</Form.Label>
      <h4 class="Choosed-Tables">{this.props.Tables + " "}</h4>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label className="form-titles">Comments to reserve</Form.Label>
      <Form.Control onChange={this.props.handlechange2} as="textarea" rows="3" value={this.props.ValueText}  />
    </Form.Group>
    <Form.Group>
    <Button className="SubmitButton" type="submit" onClick={this.props.Button}>Reserve</Button>
    </Form.Group>

    </Form>
  )
  }
}
