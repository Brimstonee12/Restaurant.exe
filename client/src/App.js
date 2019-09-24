import React, {Component} from 'react'
import './App.css'
import {Container,Form,Button} from 'react-bootstrap'
import TableProps from './components/AppProps'
import TableForm from './components/Forms'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FetchData:[],
      Tables:[],
      FormText:"",
      FormEmail:""
    }
  }


  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(FetchData => this.setState({FetchData}, () => console.log('Customers fetched...',FetchData)));
  }

  handleChange = event =>{this.setState({FormEmail: event.target.value})}
  handleChange2 = event =>{this.setState({FormText: event.target.value})}

  Confirm = () => {
    const body = this.state

    if(body.FormEmail.length > 0 && body.Tables.length > 0){
      body.FetchData.map(ItemF => {
          if(body.Tables.includes(ItemF.table1)){

            fetch(`/api/customers/${ItemF.id}`, {
               method:'PUT',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({available: 'Not Available'})
            })
            fetch('/api/ReservedTables/', {
               method:'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                 Tables: body.Tables,
                 Email: body.FormEmail,
                 Comment: body.FormText
             })
            })
             console.log('DONE...',' // Fetch Item: ',ItemF.table1,' // Item ID: ',ItemF.id)
          }})
        }
  else if(body.FormEmail.length > 0 && body.Tables.length === 0){
    alert('Please choose table to reserve')
  }
  else if(body.FormEmail.length === 0 && body.Tables.length > 0){
    alert('Please type your email adress')
  }else{
    alert('Email field and Table in required!')
  }
  this.setState({Tables:[]})
    }


  render() {
    const body = this.state

//LOOPUJE CALE API I WKLADA DO PROPSOW
     let All_API_Test = body.FetchData.map(Item => <TableProps key={Item.id} table={Item.table1}
        sits={Item.sits} available={Item.available} button= {() =>{

//SILNIK DODAWANIA STOLIKOW
      if(body.Tables.some( i => Item.table1 === i )){
          this.setState(prevState =>{return{Tables:[...prevState.Tables - Item.table1 ] }})
      }else{
          this.setState(prevState =>{return{Tables:[...prevState.Tables, Item.table1] }})
        }
      }}
    />)


    return (
    <div>
      <div className="background_2">
        <h1 className="center_title">Restaurant De la Ves</h1>
        <h1>Shulde you table online or by calling us tel: 777 777 777</h1>
        <br/>
        <h1>Reserve Table for today night</h1>
        <br/>
        </div>
     <Container>
     <div className="center">
        {All_API_Test}
     </div>
     <hr/>
        <TableForm
        Tables={body.Tables}
        Button={this.Confirm}
        ValueEmail={body.FormEmail}
        ValueText={body.FormText}
        handlechange={this.handleChange}
        handlechange2={this.handleChange2}
        />

        <h1>{body.FormEmail}</h1>
        <h1>{body.FormText}</h1>

    </Container>
  </div>
    )
  }
}


export default App
