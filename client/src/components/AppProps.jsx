import React, {Component} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import '../App.css'


function TableProps(props){
  return(
    <div className="table">
    <h2 className="content-one">{props.table}</h2>
      <h2 className="content-one">{props.sits}</h2>
        <h2 className="content-two">{props.busy}</h2>
        <h2 className="content-two">{props.available}</h2>
        <Button onClick={props.button} className="cardButton">Schulde</Button>
    </div>
  )
}


export default TableProps
