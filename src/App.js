import React from 'react'
import Header from './Header'
import Main from './Main'
import Button from './Button'
import Input from './Input'

import Footer from './Footer'
import './App.css';

function Form(props) {
  return (
    <div>
      <Header />
      <Input
        inputType="text"
        placeholder="0.00000000001"
         />
         <Button />
      <Main />
      <Footer />
    </div>
  );
}

export default Form;