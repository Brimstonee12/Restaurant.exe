import React, {Component} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import '../App.css'


function TableProps(props){
  return(
    <div className="table">
    <h2>{props.table}</h2>
      <h2>{props.sits}</h2>
        <h2>{props.busy}</h2>
        <h2>{props.available}</h2>
        <Button onClick={props.button} className="cardButton">Reserve</Button>
    </div>
  )
}


export default TableProps
