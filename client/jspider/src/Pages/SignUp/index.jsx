import React, { Component } from 'react'
import InputField from '../../Components/InputFiled';



export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

      change(e){
        // console.log(e.target.value,e.target.name);
        this.setState({
          [e.target.name] : e.target.value
        })
          
      }

      submit(){
        let obj = {
          username : this.state.username,
            email : this.state.email,
            phone : this.state.phone,
            countryCode : "+91",
        }
        console.log(obj);
      fetch("http://127.0.0.8:5000/student",{
        method : "POST",
        body : JSON.stringify(obj)
      }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

        this.setState({})
      }

  render() {
    return (
      <div style={{width:'700px',margin:"20px auto", border:"1px solid black",padding:"2%",display:'flex',flexWrap:"wrap"}}>
        <InputField name="username" type="text" label="Student Name" value={this.state.username} onchange={(e) => this.change(e)}/>
        <InputField name="email" type="email" label="Email" value={this.state.email} onchange={(e) => this.change(e)}/>
        <InputField name="phone" type="tel" label="Phone" value={this.state.phone} onchange={(e) => this.change(e)}/>
        <InputField name="phone" type="button" value="submit" onclick={(e) => this.submit(e)}/>
      </div>
    )
  }
}
