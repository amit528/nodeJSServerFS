import React, { Component } from 'react'
import "./style.css"

export default class InputField extends Component {
  render() {
    let {type,name,label,error,value,onclick,onchange} = this.props
    return (
     <>
        <div className='input-container'>
            {label && <label>{label}</label>}<br/>
            <input type={type}  name={name} value={value} onClick={onclick} onChange={onchange}/>
            {error && <p>{error}</p>}
        </div>
     </>
    )
  }
}
