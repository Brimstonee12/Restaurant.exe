import React, {Component} from 'react'
import './App.css'
import {Container,Form,Button,Alert} from 'react-bootstrap'
import TableProps from './components/AppProps'
import TableForm from './components/Forms'
import { SocialIcon } from 'react-social-icons';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FetchData:[],
      Tables:[],
      FormText:"",
      FormEmail:"",
      IsLoading:"Loading..."
    }
  }


  componentDidMount() {
    fetch('/tablesav')
      .then(res => res.json())
      .then(FetchData => this.setState({FetchData}, () => console.log('Customers fetched...',FetchData)));

      setTimeout(() =>{
        this.setState({IsLoading:"Its only free tier DB, give it some time.."})
      }, 9000)
      setTimeout(() =>{
        this.setState({IsLoading:"Something went wrong :("})
      }, 25000)

    }


  handleChange = event =>{this.setState({FormEmail: event.target.value})}
  handleChange2 = event =>{this.setState({FormText: event.target.value})}

  Confirm = () => {
    const body = this.state

    if(body.FormEmail.length > 0 && body.Tables.length > 0){
      body.FetchData.map(ItemF => {
          if(body.Tables.includes(ItemF.table1)){

            fetch(`/tablesav/update/${ItemF._id}`, {
               method:'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({available: 'Not Available'})
            })
            fetch('/reserved/add', {
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
    alert('Please select table to reserve')
  }
  else if(body.FormEmail.length === 0 && body.Tables.length > 0){
    alert('Please type your email adress')
  }else{
    alert('Email field and Table are required')
  }
  this.setState({Tables:[]})
}


  render() {
    const body = this.state

//LOOP FETCHED API AND PUT IT TO PROPS
     let All_API_Test = body.FetchData.map(Item => <TableProps key={Item._id} table={Item.table1}
        sits={Item.sits} available={Item.available} button= {() =>{
//ADD TABLE
        if(Item.available === 'Not Available'){
          null
        }else{
          if(body.Tables.some( i => Item.table1 === i )){
              this.setState(prevState =>{return{Tables:[...prevState.Tables - Item.table1 ] }})
          }else{
              this.setState(prevState =>{return{Tables:[...prevState.Tables, Item.table1] }})
            }
        }
      }}
    />)


    return (
  <div>
    <div className="background_2 ">
      <div className="Icons">
        <h3 className="Icon1"><SocialIcon url="https://www.linkedin.com/in/tomasz-karli%C5%84ski-1b36b717a/" fgColor="white"/></h3>
        <h3 className="Icon1"><SocialIcon url="https://github.com/Brimstonee12" fgColor="white"/></h3>
      </div>
        <h1 className="center_title">Restaurant. Exe</h1>
        <h1 className="heading-content">Reserve your table online or by calling us tel: 777 777 777</h1>
        <br/>
        <h1 className="heading-content">Reserve Table for today night</h1>
        <br/>
    </div>
    <Container>
    <div className="center">
        {All_API_Test.length === 0 ?
        <h2>{body.IsLoading}</h2>:
         All_API_Test}
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


    </Container>
  </div>
    )
  }
}


export default App
